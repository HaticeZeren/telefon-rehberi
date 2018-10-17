import React, { Component } from 'react';
import './App.css';
import {Contacts} from './Contacts';
class App extends Component {
  constructor(){
    super();
    this.addContacts=this.addContacts.bind(this);
    this.deleteContacts=this.deleteContacts.bind(this);
    this.updateContacts=this.updateContacts.bind(this);
  }
  state={
    contacts:[
        {
         isim:"Sena Solmaz",
         telefon:"0000"
        },{
         isim:"Siham Amarouch",
         telefon:"000000"
        }
    ]
  };

  addContacts(contact){
    console.log(contact);
    console.log(this.state);
   const {contacts}=this.state;//state verileri contacts dizisine atandı.
    console.log(contacts);
    contacts.push(contact);
    this.setState({
      contacts:contacts
    })

    
  }

  deleteContacts(id){
    console.log(id.id);
    const {contacts}=this.state;//state verileri contacts dizisine atandı.
    console.log("....."+contacts.telefon)
    const place=contacts.filter((contact)=>{
    return contact.telefon.indexOf(id.id)!==-1
    })
  console.log(place);
    //const place=contacts.telefon.indexOf(id);
    contacts.splice(place, 1);

    this.setState({
      contacts:contacts
    })

  }
 componentWillUpdate(){

 }
  updateContacts(id){
    console.log(id.id);
    const {contacts}=this.state;//state verileri contacts dizisine atandı.
    var contact=contacts.filter((contact)=>{
       return contact.telefon.indexOf(id.id)!==-1
    })
   console.log("Güncellenecek Kişi");
   console.log(contact);
   
    
  }

  render() {
    return (
      <div className="App">
       <Contacts contacts={this.state.contacts} addContacts={this.addContacts} deleteContacts={this.deleteContacts} updateContacts={this.updateContacts}/>
      </div>
    );
  }
}

export default App;
