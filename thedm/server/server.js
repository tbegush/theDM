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


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  })
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);

  });
});