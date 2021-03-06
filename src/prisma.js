import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    fragmentReplacements
})

export default prisma
// prisma.query prisma.mutation prisma.subscription prisma.exists
// method name matches with query name from schema

// const createPostForUser = async (authorId, data) => {
//     const userExists = await prisma.exists.User({ id: authorId})

//     if(!userExists) {
//         throw new Error("user not found")
//     }

//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{ author { id name email posts { id title published }} }')

//     return post.author 
// }

// // createPostForUser('ck4bd0h9v001n0751br0ul0sx', {
// //     title: 'new books to read',
// //     body: 'lord of the rings',
// //     published: true
// // }).then((user) => {
// //     console.log(JSON.stringify(user, undefined, 2))
// // }).catch((error) => {
// //     console.log(error)
// // })


// const updatePostForUser = async (postId, data) => {
//     const postExists = await prisma.exists.Post({ id: postId})

//     if(!postExists) {
//         throw new Error('post not found')
//     }
//     const post = await prisma.mutation.updatePost({
//         data,          
//         where: {
//             id: postId
//         }
//     }, '{ author { id name email posts { id title published body}} }')

//     return post.author 
// }

// // updatePostForUser('ck4bqnl5g00770751vsor8jxb', {
// //     body: 'lord of the rings 2'
// // }).then((user) => {
// //     console.log(JSON.stringify(user, undefined, 2))
// // }).catch((error) => {
// //     console.log(error)
// // })
