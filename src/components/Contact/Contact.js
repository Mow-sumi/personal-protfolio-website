import React from 'react';
import './Contact.css';



const Contact = () => {
    return (
        <div className="contact">
      <form className="form">
          <h1>Contact Form</h1>
          <label>Name</label>
          <input placeholder="name" />

          <label>Email</label>
          <input placeholder="Email" />

          <label>Message</label>
          <textarea placeholder="Message"></textarea>

          <button type ="submit">Submit</button>
      </form>
      </div>
    );
};

export default Contact;