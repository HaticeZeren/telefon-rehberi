import React from 'react';
import { List } from './List';
import { Form } from './Form';

export class Contacts extends React.Component{

    
    render(){
        return(
            <div>
           <List  contacts={this.props.contacts} deleteContacts={this.props.deleteContacts} updateContacts={this.props.updateContacts}/>
           <Form  addContacts={this.props.addContacts}/>
            </div>
        );
    }
}