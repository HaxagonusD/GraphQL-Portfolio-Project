import React from "react";
import { useQuery } from "@apollo/react-hooks";
import queries from "../queries/queries";
const { getBookQuery } = queries;

const BookDetails = ({ which }) => {

  return (
    <div id="boook-details">
      <p>{which}</p>
    </div>
  );
};

export default BookDetails;
