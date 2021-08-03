import {useState, useEffect} from 'react';
import List from "./List";
import Form from "./Form";
import "./styles.css"



function Index() {
    const [contacts, setContacts] = useState([
        {
            fullname:"Emre",
            phoneNumber : "111"
        },
        {
            fullname:"Erol",
            phoneNumber : "222"
        },
        {
            fullname:"Güleç",
            phoneNumber : "333"
        },
    ]);
  

    useEffect(()=> {
console.log(contacts)

    },[contacts])
    return (
        <div id="container">
            <h1 className="text-secondary">Contacts</h1>
            <List contacts={contacts}/>
            <Form contacts={contacts} setContacts = {setContacts}/>
        </div>
    )
}

export default Index
