import React from "react";
import { useQuery } from "@apollo/react-hooks";
import queries from "../queries/queries";
const { getBooksQuery } = queries;

//components

const BookList = ({ setWhich }) => {
  // click Hnadler
  const clickHandler = event => {
    // setWhich(event.target.id);
  };
  //
  const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { books } = data;

  const bookListItems = books.map(({ id, name }) => {
    return (
      <li key={id} id={id} onClick={clickHandler}>
        {name}
      </li>
    );
  });

  return (
    <div>
      <ul id="book-list">{bookListItems}</ul>
    </div>
  );
};

export default BookList;
