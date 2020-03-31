import React from "react";
import ContactListItem from "./../contactForm/contactListItem/ContactListItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import transition from "../../transition/transition.module.css";

const ContactList = ({ contacts }) => (
  <>
    <TransitionGroup component="ul">
      {/* {console.log(contacts)} */}
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={1500}
          classNames={transition}
          unmountOnExit
        >
          <ContactListItem contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

export default ContactList;
