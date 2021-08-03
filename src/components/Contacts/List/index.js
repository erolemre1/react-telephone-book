import {useState} from 'react';
import {Button,FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function List({contacts}) {
    const [filterText, setFilterText] = useState("");

    const filtered = contacts.filter((item)=> {
        return Object.keys(item).some((key)=> 
            item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
        )
    })
    console.log("filtered", filtered)
    return (
        <div>
            <FormControl type="text" value = {filterText} onChange={(e)=> { setFilterText(e.target.value)}} placeholder="Filter Contact"/>
         <ul className="list">
             {
                 filtered.map((contact,index)=> <li className="btn btn-primary"  key={index}><span> {contact.fullname}
                     </span><span> {contact.phoneNumber}
                     </span> </li>)
             }
         </ul>
         <p className="text-success h4" >Registered User : ({filtered.length}) </p>
        </div>
    )
}

export default List;
