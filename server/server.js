import {ApolloServer} from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

//here we write the code that uses this "Schema Defination Language", that's a language designed specifically for defining the GraphQL schema. 

//It declares that any client calling our API can ask for, or "query" for, a "greeting" and the server will return a string value as a response
const typeDefs =`#graphql

    schema {
        query:Query
    }
    type Query {
        greeting: String 
    }
`;
const resolvers = {
    Query:{
        greeting: () => 'Hello World!',
    },
};

//Creating a server using ApolloServer class
//This constructor accept the object where we can pass configuration options
const server = new ApolloServer({typeDefs,resolvers});

const {url} = await startStandaloneServer(server,{listen:{port:9000}});

console.log(`server running at ${url}`);

