import {useState} from 'react';

function List({contacts}) {

    const [filterText, setFilterText] = useState("")
    return (
        <div>
            <input type="text" placeholder="Filter Contact"/>
         <ul>
             {
                 contacts.map((contact,index)=> <li key={index}>{contact.fullname} </li>)
             }
         </ul>
        </div>
    )
}

export default List;
