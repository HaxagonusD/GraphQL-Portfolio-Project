import React, { useState } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./index.css";

//components
import BookList from "./Components/BookList";
import AddBook from "./Components/AddBook";
import BookDetails from "./Components/BookDetails";
//apollo client setup

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

const App = () => {
  const [ which, setWhich ] = useState("");
  console.log(which);
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Reading List</h1>

        <BookList setWhich={setWhich} />
        <BookDetails which={which} />
        <AddBook />
      </div>
    </ApolloProvider>
  );
};

export default App;
