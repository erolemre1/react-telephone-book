import React from 'react';
import { useState } from "react";
import {Button,FormControl} from 'react-bootstrap';




const initialformvalues ={ fullname : "", phoneNumber : "" }
function Form({setContacts,contacts}) {

    const [form, setForm] = useState(initialformvalues);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
            console.log(form)
            setContacts([...contacts, form]);    
            setForm(initialformvalues)
    }
    return (
        <form className="forms" >
            <div>
                <div>
                    <FormControl
                    type="text"
                     name="fullname" placeholder="Full Name" 
                     value = {form.fullname} onChange={onChangeInput} />
                </div>

                <div>
                    <FormControl
                    className="mt-2"
                    type="number"
                     name="phoneNumber" placeholder="Phone Number" value = {form.phoneNumber}   onChange={onChangeInput} />
                </div>

                <div className="btnWrapper">
                    <Button className="btn"  
                     variant="primary" onClick={onSubmit}>Add</Button>
                    
                </div>
            </div>
        </form>
    )
}

export default Form
