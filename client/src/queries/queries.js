import { gql } from "apollo-boost";

// queries
const queries = {
  getAuthorsQuery: gql`
  {
    authors{
      name
      id
    }
  }
  `,getBooksQuery: gql`
  {
    books {
      name
      id
    }
  }
`, addBookMutation: gql`
  mutation($name:String!, $genre:String!, $authorId:ID!) {
    addBook(name:$name, genre:$genre, authorId:$authorId){
      name 
      id
    }
  }
  
  `
}
 export default queries;