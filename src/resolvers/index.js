import { extractFragmentReplacements } from 'prisma-binding'
import Query from './Query'
import Subscription from './Subscription'
import Mutation from './Mutation'
import Post from './Post'
import Comment from './Comment'
import User from './User'

const resolvers = {
    Query,
    Mutation,
    Subscription,
    User, 
    Post,
    Comment
}

const fragmentReplacements = extractFragmentReplacements(resolvers)

export { resolvers, fragmentReplacements }