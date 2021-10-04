const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const { ApolloServer } = require('apollo-server-express');

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

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/thedm', {
//   useFindAndModify: false,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
});

// Use this to log mongo queries being executed!
mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌍 Connected on localhost:${PORT}`));