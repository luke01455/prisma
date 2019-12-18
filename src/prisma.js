import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://192.168.99.100:4466/'
})

// prisma.query prisma.mutation prisma.subscription prisma.exists
// method name matches with query name from schema
// data represents users

prisma.query.comments(null, '{ id text author { id name } }').then((data) => {
    console.log(JSON.stringify(data, undefined, 2))
})