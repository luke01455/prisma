import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db'
import Query from './resolvers/Query'
import Subscription from './resolvers/Subscription'
import Mutation from './resolvers/Mutation'
import Post from './resolvers/Post'
import Comment from './resolvers/Comment'
import User from './resolvers/User'
import prisma from './prisma'

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
        Subscription,
        User, 
        Post,
        Comment
    },
    // gives all files on server the db file as context
    context(request) {
        return {
            db,
            pubsub,
            prisma,
            request
        }
    }
})

server.start(() => {
    console.log('The server is up!')
})