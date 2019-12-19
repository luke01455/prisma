const Query = {
    posts(parent, args, { db, prisma }, info) {
        const opArgs = {}

        if (args.query) {
            opArgs.where = {
                OR: [ { 
                    title_contains: args.query
                },
                {
                    body_contains: args.query
                }]
            }
        }

        return prisma.query.posts(opArgs, info)
        // if(!args.query) {
        //     return db.posts
        // }
    
        // return db.posts.filter((post) => {
        // const isTitleMatch = post.title.toLowerCase().includes(args.query.toLowerCase())
        // const isBodyMatch = post.body.toLowerCase().includes(args.query.toLowerCase())
        // return isTitleMatch || isBodyMatch
    //}) 
    },
    comments(parent, args, { prisma }, info){
        return prisma.query.posts(null, info)
    },
    users(parent, args, { db, prisma }, info){
        const opArgs = {}

        if (args.query) {
            // finding users where given string is contained within email or name
            opArgs.where = {
                OR: [ { 
                    name_contains: args.query
                },
                {
                    email_contains: args.query
                }]
            }
        }
        return prisma.query.users(opArgs, info)
        // if(!args.query) {
        //     return db.users
        // }
        
        // return db.users.filter((user) => {
        //     return user.name.toLowerCase().includes(args.query.toLowerCase())
        // })
    },
    me() {
        return {
            id: '3443',
            name: 'Mike',
            email: 'Mike@gmail.com'
        }
    },
    post() {
        return {
            id: '12234',
            title: 'Hello world',
            body: 'message to the world',
            published: true
        }
    }
}

export { Query as default }