import React,{Component} from 'react';
import Contacts from "./Contacts";
import "../assets/css/style.css";

class App extends Component{
  
  constructor(){
    super();
    this.addContact = this.addContact.bind(this);
    this.removeContact = this.removeContact.bind(this);
  }
  
  
  state = {
    contacts: [
      {
        
        name: "Alper Erkol",
        phone: "05318708280",
      }
      
    ]
  };

  addContact(contact){

    this.state.contacts.push(contact);

    this.setState({
      [this.state.contacts] : this.state.contacts
    });

  }

  removeContact(contact){
    let index = this.state.contacts.indexOf(contact);
    this.state.contacts.splice(index,1);

    this.setState({

      [this.state.contacts] : this.state.contacts

    });

    

  }

  render(){

    return (
      <div className="App">
        <div className = "intro">
          <h1>Contact App with React!</h1>
          
          <p> ** Right click on the number to delete contact.</p>
        </div>
        <Contacts contacts = {this.state.contacts} addContact = {this.addContact} removeContact = {this.removeContact}/>
      </div>
    );

  };
}
export default App;
