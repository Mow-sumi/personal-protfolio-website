import React, { useState } from 'react';
import './Contact.css';

import { db } from '../firebase';



const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const [ loader,setLoader] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);


        db.collection('contacts') .add({
           name:name,
           email:email,
           message:message, 
        })

        .then (() =>{
            alert('Message hase been successfully submitted');
            setLoader(false);
        })

        .catch(error =>{
            alert('error.message');
            setLoader(false);
        })

        setName('');
        setEmail('');
        setMessage('');

    };

    return (
        <div className="contact">
      <form className="form" onSubmit={handleSubmit}>
          <h1>Contact Form</h1>

          <label>Name</label>
          <input placeholder="name" 
          value ={name}
           onChange={(e) => setName(e.target.value)}
          
          />

          <label>Email</label>
          <input placeholder="Email"
             value ={email}
             onChange={(e) => setEmail(e.target.value)}
          
          />

          <label>Message</label>
          <textarea placeholder="Message"
             value ={message}
             onChange={(e) => setMessage(e.target.value)}
          
          ></textarea>

          <button type ="submit" style={{background : loader ? "#ccc" : "rgb(2,2,110)"}}>Submit</button>
      </form>
      </div>
    );
};

export default Contact;