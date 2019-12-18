import { Prisma } from 'prisma-binding'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://192.168.99.100:4466/'
})

// prisma.query prisma.mutation prisma.subscription prisma.exists
// method name matches with query name from schema


const createPostForUser = async (authorId, data) => {
    const post = await prisma.mutation.createPost({
        data: {
            ...data,
            author: {
                connect: {
                    id: authorId
                }
            }
        }
    }, '{ id }')
    const user = await prisma.query.user({
        where: {
            id: authorId
        }
    }, '{ id name email posts { id title published } }')

    return user 
}

// createPostForUser('ck4bd0h9v001n0751br0ul0sx', {
//     title: 'great books to read',
//     body: 'the art of war',
//     published: true
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// })


const updatePostForUser = async (postId, data) => {
    const post = await prisma.mutation.updatePost({
        data,          
        where: {
            id: postId
        }
    }, '{ author { id } }')
    const user = await prisma.query.user({
        where: {
            id: post.author.id
        }
    }, '{ id name email posts { id title published } }')

    return user 
}
// updatePostForUser('ck4bln5pc006p0751rzaue5q2', {
//     title: 'great books',
//     body: 'big lebowski'
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// })
