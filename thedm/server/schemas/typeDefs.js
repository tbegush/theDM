const { gql } = require('apollo-server-express');
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }
    
    type Auth {
        token: ID!
        user: user
    }

    type Post {
        _id: ID
        messageText: String
        createdAt: String
        username: String
    }

    type Query {

    }

    type Mutation {

    }
`;


module.exports = typedefs;
