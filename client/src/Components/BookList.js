import React from "react";
import { useQuery } from "@apollo/react-hooks";
import queries from '../queries/queries'


const BookList = () => {
  const { loading, error, data } = useQuery(queries.getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { books } = data;

  const bookListItems = books.map(({ id, name }) => {
    return <li key={id}>{name}</li>;
  });

  return (
    <div>
      <ul id="book-list">{bookListItems}</ul>
    </div>
  );
};

export default BookList;