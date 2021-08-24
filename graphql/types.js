const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const {User, Post, Comment} = require("../models")

const UserType = new GraphQLObjectType({
    name : 'User',
    description : "User type",
    fields : () => ({
        id: {type : GraphQLID},
        username: {type : GraphQLString},
        email: {type : GraphQLString},
        displayName: {type : GraphQLString},
        id: {type : GraphQLString},
    })
})

const PostType = new GraphQLObjectType({
    name : 'User',
    description : "Post types",
    fields : () => ({
        id: {type : GraphQLID},
        title: {type : GraphQLString},
        body: {type : GraphQLString},
        author : {
            type : UserType,
            resolve(parent, args){
                return User.findById(parent.authorId)
            }
        },
        comments : {
            type : GraphQLString,
            resolve(parent , args){
                return User.findById(parent.authorId)
            }
        }
    })
})


const CommentType = new GraphQLObjectType({
    name : "Comment",
    description : "Comment type",
    fields : () => ({})
})