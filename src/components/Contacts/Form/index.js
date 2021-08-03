import React from 'react';
import { useState } from "react";


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
                    <input
                    type="text"
                     name="fullname" placeholder="Full Name" 
                     value = {form.fullname} onChange={onChangeInput} />
                </div>

                <div>
                    <input
                    type="number"
                     name="phoneNumber" placeholder="Phone Number" value = {form.phoneNumber}   onChange={onChangeInput} />
                </div>

                <div><button onClick={onSubmit}>Add</button>
                </div>
            </div>
        </form>
    )
}

export default Form
