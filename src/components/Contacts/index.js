import {useState, useEffect} from 'react';
import List from "./List";
import Form from "./Form";



function Index() {
    const [contacts, setContacts] = useState([
        {
            fullname:"Emre",
            phoneNumber : "12345"
        },
        {
            fullname:"Erol",
            phoneNumber : "34564"
        },
        {
            fullname:"Güleç",
            phoneNumber : "12334564345"
        },
    ]);
  

    useEffect(()=> {
console.log(contacts)

    },[contacts])
    return (
        <div>
            <List contacts={contacts}/>
            <Form contacts={contacts} setContacts = {setContacts}/>
        </div>
    )
}

export default Index
