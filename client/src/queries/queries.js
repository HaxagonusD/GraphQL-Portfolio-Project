import { gql } from "apollo-boost";

// queries
const queries = {
  getAuthorsQuery: gql`
    {
      authors {
        name
        id
      }
    }
  `,
  getBooksQuery: gql`
    {
      books {
        name
        id
      }
    }
  `,
  addBookMutation: gql`
    mutation($name: String!, $genre: String!, $authorId: ID!) {
      addBook(name: $name, genre: $genre, authorId: $authorId) {
        name
        id
      }
    }
  `//$name of argument, type of argument <--- this is a declaration
      //name of argument, reference to argument  <----- this is passing arguments to a function
  , getBookQuery: gql`
  query($id: ID){ 
    book(id: $id){
      name
      genre
      author{
        name
        age
        books{
          name
        }
      }
    }
  }`,
  
};
export default queries;
