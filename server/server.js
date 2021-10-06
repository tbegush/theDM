const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const { ApolloServer } = require('apollo-server-express');
const socketio = require('socket.io');


const app = express();
const PORT = process.env.PORT || 3001;

let server;
async function startServer() {
    server = new ApolloServer({
        typeDefs,
        resolvers,

        context: authMiddleware,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
        playground: true
    });

    await server.start();
    server.applyMiddleware({ app });
}
startServer()
const io = socketio(server);


app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Serve up static assets
app.use('/images', express.static(path.join(__dirname, '../client/src/assets/img ')));


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../build')));
  }
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });

io.on('connection', socket => {
  console.log("New connection....");
  socket.emit('message', "Welcome to TheDM!");
  //to all users, except the use that is connecting
  socket.broadcast.emit('message', 'A user has joined the chat!');
  //When User disconnects
  socket.on('disconnect', () => {
    io.emit('message', 'A user has left the chat')
  })

})
  

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/thedm', {
//   useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));