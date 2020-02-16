import React, { useMemo, useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import queries from "../queries/queries";
const {getAuthorsQuery, addBookMutation} = queries
const getOptions = (loading, error, data) => {
  if (loading) {
    return <option disabled>Loading Authors...</option>;
  } else if (error) {
    return <option disabled>Error loading Authors</option>;
  } else {
    console.log(data);
    return data.authors.map(({ name, id }) => {
      return (
        <option key={id} value={id}>
          {name}
        </option>
      );
    });
  }
};

const AddBook = () => {
  const [state, setState] = useState({ name: "", genre: "", authorId: "" });

  const { loading, error, data } = useQuery(getAuthorsQuery);

  const options = useMemo(() => getOptions(loading, error, data), [
    loading,
    error,
    data
  ]);

  const submitForm = (e)=>{
     e.preventDefault();
     
  }

  return (
    <div>
      <form id="add-book" onSubmit={submitForm}>
        <div className="field">
          <label>Book name:</label>
          <input type="text" onChange={(e) => setState({...state, name: e.target.value})} />
        </div>

        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={(e) => setState({...state, genre: e.target.value})}/>
        </div>

        <div className="field">
          <label>Author:</label>
          <select onChange={(e) => setState({...state, authorId: e.target.value})}>
            <option>Select Author</option>

            {options}
          </select>
        </div>

        <button>+</button>
      </form>
    </div>
  );
};

export default AddBook;
