import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.jpg";

const CardContact = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link
          to={{
            pathname: "/contacts/" + id,
            state: { contact: props.contact },
          }}
        >
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
      </div>
      <div className="right floated column">
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px", marginLeft: "10 px" }}
          onClick={() => props.clickHandler(id)}
        ></i>
        <Link
          to={{
            pathname: "/edit/" + id,
            state: { contact: props.contact },
          }}
        >
          <i
            className="edit alternate outline icon"
            style={{ color: "grey", marginTop: "7px" }}
          ></i>
        </Link>
      </div>
    </div>
  );
};

export default CardContact;
