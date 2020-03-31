import React, { Component } from "react";
import ContactForm from "./components/contactForm/ContactForm";
import ContactList from "./components/contactList/ContactList";
import Filter from "./components/filter/Filter";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import styles from "./App.module.css";
import phonebook from "./transition/phonebook.module.css";

class App extends Component {
  state = {
    // contacts: [],
    filter: "",
    inUp: false
  };

  // componentDidMount() {
  //   // const contacts =
  //   //   localStorage.getItem("contacts") !== null
  //   //     ? JSON.parse(localStorage.getItem("contacts"))
  //   //     : [];
  //   // console.log(contacts);
  // }
  // componentDidUpdate() {
  //   // localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   this.setState({ contacts: this.props.contacts, inUp: true });
  // }

  // submitContact = data => {
  //   console.log("data", { data });
  //   this.setState(prevstate => ({
  //     contacts: [...prevstate.contacts, data]
  //   }));
  // };

  // deleteContact = e => {
  //   const id = e.target.id;
  //   this.setState(prevstate => ({
  //     contacts: prevstate.contacts.filter(contact => contact.id !== id)
  //   }));
  // };

  getName = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.props.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
  };

  render() {
    // const { contacts } = this.state;
    // const inUp = true;
    // console.log("state", this.state.contacts);
    // console.log("this.props.contacts", this.props.contacts);

    return (
      <div className={styles.container}>
        <CSSTransition
          in={this.state.inUp}
          timeout={1500}
          classNames={phonebook}
        >
          <h2 className={styles.logo}>Phonebook</h2>
        </CSSTransition>
        <ContactForm submitContact={this.submitContact} />
        <h2>Contacts</h2>
        <Filter getName={this.getName} value={this.state.filter} />
        {this.state.filter === "" ? (
          <ContactList contacts={this.props.contacts} />
        ) : (
          <ContactList contacts={this.filterContacts()} />
        )}

        {/* <ContactList
          contacts={this.props.contacts} */}
        {/* // deleteContact={this.deleteContact} */}
        {/* /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    contacts: state.contacts
  };
};

export default connect(mapStateToProps)(App);
