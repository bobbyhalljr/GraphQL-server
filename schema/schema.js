// import stuff from graphql
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
} = require('graphql');

// import users data
const users = require('../data/users');

// GraphQL schema
const UserType = new GraphQLObjectType({
    name: 'users',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        quote: { type: GraphQLString },
    })
})

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return users;
            }
        }
    }
})

// export users
module.exports = new GraphQLSchema({
    query: RootQuery
})
