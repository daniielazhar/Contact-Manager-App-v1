import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  const inputElement = useRef("");
  const getContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputElement.current.value);
  };

  return (
    <div className="main">
      <br />
      <br />
      <h1>
        Contact List
        <Link to="/add">
          <button className="ui purple button" style={{ float: "right" }}>
            Add Contact
          </button>
        </Link>
      </h1>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputElement}
            type="text"
            placeholder="Search Contacts"
            style={{ width: "500px" }}
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon" style={{ color: "purple" }}></i>
        </div>
      </div>
      <div className="ui celled list">
        {getContactList.length > 0 ? getContactList : "Contacts Not Found"}
      </div>
    </div>
  );
};

export default ContactList;
