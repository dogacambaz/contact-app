import React, { useRef } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";
import { Dropdown } from "semantic-ui-react";

const ContactList = (props) => {
  const inputEl = useRef("");

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      ></ContactCard>
    );
  });

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };

  const handleSort = () => {};

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button green right floated">
            Add a New Contact
          </button>
        </Link>
      </h2>
      <Dropdown placeholder="Sort by" simple item>
        <Dropdown.Menu>
          <Dropdown.Item text="Sort Name(Z - A)" />
          <Dropdown.Item text="Sort Name(A - Z)" onClick={handleSort} />
        </Dropdown.Menu>
      </Dropdown>
      <div className="ui search">
        <div className="ui icon input">
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className="search icon"></i>
        </div>
      </div>
      <div className="ui celled list">
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts available"}
      </div>
    </div>
  );
};

export default ContactList;
