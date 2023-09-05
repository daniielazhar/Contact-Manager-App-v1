import React from "react";
import { Link } from "react-router-dom";

const ContactDelete = (props) => {
  console.log(props);
  const { id } = props.match.params;
  const deleteContactHandler = () => {
    //console.log(id);
    props.clickHandler(id);
  };
  return (
    <div className="header">
      <br />
      <br />
      <div>
        <h2>Are you sure you want to delete this contact ?</h2>
        <br />
      </div>

      <Link to="/">
        <button className="ui green button" onClick={deleteContactHandler}>
          Yes
        </button>
      </Link>
      <Link to="/">
        <button className="ui red button">Cancel</button>
      </Link>
    </div>
  );
};

export default ContactDelete;
