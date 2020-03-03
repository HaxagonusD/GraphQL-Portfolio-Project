import React from "react";
import { useQuery } from "@apollo/react-hooks";
import queries from "../queries/queries";
const { getBookQuery } = queries;

const BookDetails = ({ which }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: which }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  console.log(data);
  return (
    <div id="book-details">
      <h1>{data.book.name}</h1>
      <h1>{data.book.genre}</h1>
      <div>
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
