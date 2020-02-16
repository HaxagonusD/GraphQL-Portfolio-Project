import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

//components
import BookList from "./Components/BookList";
import AddBook from './Components/AddBook'

//apollo client setup

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});



const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Reading List</h1>
        <BookList />
        <AddBook/>
      </div>
    </ApolloProvider>
  );
};

export default App;
