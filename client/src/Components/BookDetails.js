import React from "react";
import { useQuery } from "@apollo/react-hooks";
import  queries from '../queries/queries'
const {getBookQuery} = queries;

const BookDetails = () => {


  return (
    <div id="book-details">
      <p>output Book details here</p>
    </div>
  );
};

export default BookDetails;
