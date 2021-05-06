import React from "react";
import PropTypes from 'prop-types';
import List from './List';
import Form from './Form';


// Since there is no state, I defined this component as 'Stateless Component'.

const Contacts = props => {
  
    return (

      <div className="container">
        
        <List contacts = {props.contacts} removeContact = {props.removeContact}/>

        <Form addContact  = {props.addContact} />
      
      </div>
    );
  
}

Contacts.propTypes= {

  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func,
  removeContact: PropTypes.func
  
}

export default Contacts;
