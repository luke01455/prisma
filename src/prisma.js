import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://192.168.99.100:4466/'
})

// prisma.query prisma.mutation prisma.subscription prisma.exists
// method name matches with query name from schema
// data represents users

// prisma.query.users(null, '{ id name posts { id title } }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

// prisma.mutation.createPost({
//     data: {
//         title: "101 graphql",
//         body: "",
//         published: false,
//         author: {
//             connect: {
//                 id: "ck4bfexyu004m07517z0u3li0"
//             }
//         }
//     },
    
// }, '{ id title body published }').then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
//     return prisma.query.users(null, '{ id name posts { id title } }')
// }).then((data) => {
//     console.log(JSON.stringify(data, undefined, 2))
// })

prisma.mutation.updatePost({
    data: {
       body: "101 learning about graphql",
       published: "true"
    },
    where: {
        id: "ck4bk6p49006c0751r6xhsch8"
    }
}, '{ id title body published}').then((data) => {
    console.log(data)
    return prisma.query.posts(null, '{ id title body published author { id name }}')
}).then((data) => {
    console.log(JSON.stringify(data, undefined, 2))
})