import React from "react";
import { useQuery } from "@apollo/react-hooks";
import queries from "../queries/queries";
const { getBookQuery } = queries;

const BookDetails = ({ which }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: which }
  });

  if (loading) return <p class="book-details">Loading...</p>;
  if (error) return <p class="book-details"></p>;
  return (
    <div class="book-details">
      <h1 id="title">Title: {data.book.name}</h1>
      <h4 id="genre">Genre: {data.book.genre}</h4>
      <h3 id="author">Author {data.book.author.name}</h3>
      <div>
        Other books by the same author:
        {data.book.author.books.map(book => {
          if (book !== null) {
            return <h1>book.name</h1>;
          } else {
            return <h1></h1>;
          }
        })}
      </div>
    </div>
  );
};

export default BookDetails;
