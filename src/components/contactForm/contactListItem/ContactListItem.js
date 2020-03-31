import React from "react";
import { connect } from "react-redux";
import { deleteContact } from "../../../redux/actions";
import styles from "../ContactForm.module.css";

const ContactListItem = props => {
  return (
    <li className={styles.contactCard}>
      {/* {console.log(props)} */}
      <span>{props.contact.name} </span>
      <span>{props.contact.number}</span>
      <button
        className={styles.contactButt}
        type="button"
        id={props.contact.id}
        onClick={() => props.deleteContact(props.contact.id)}
      >
        X
      </button>
    </li>
  );
};

const mapDTP = {
  deleteContact
};

export default connect(null, mapDTP)(ContactListItem);
