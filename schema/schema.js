const graphql = require('graphql');
const _ = require('lodash');

const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema, 
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

//dummy data
const books = [
    {name: 'first name', genre: 'Fantasy', id:'1', authorID: '1'},
    {name: 'second name', genre: 'Fantasy', id:'2', authorID: '2'},
    {name: 'thirds name', genre: 'Scifi', id:'3', authorID: '3'},
    {name: 'fourth name', genre: 'one', id:'4', authorID: '2'},
    {name: 'fifth name', genre: 'two', id:'5', authorID: '3'},
    {name: 'sixth name', genre: 'three', id:'6', authorID: '3'},
]

const authors = [
    {name: 'Patrick', age: 44, id: '1',books: []},
    {name: 'Brandon', age: 42, id: '2'},
    {name: 'Terry', age: 66, id: '3'},
]



const AuthorType = new GraphQLObjectType({
    name:'author',
    fields:()=> ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return _.filter(books, {authorID: parent.id})
            }
        }
    })
});

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: ()=>({
        id: {type:GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
        
                return _.find(authors, {id: parent.authorID})
            }
        }
    })
});




const RootQuery =  new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        book: {
            type: BookType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //code to get data from db/ other source
                return _.find(books, {id: args.id});
            }
        },
        author:{
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return _.find(authors, {id: args.id})
            }
        },
        books:{
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return books;
            }
        }
    }
});
module.exports = new GraphQLSchema({
    query: RootQuery
})