import "../Style/Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const serviceId= process.env.REACT_APP_EMAILJS_SERVICEID;
const templateId= process.env.REACT_APP_EMAILJS_TEMPLATEID;



const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey:'8YHphobEABT7Sm4ak',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="Contact-container">
      <h2>Send me a message</h2>
    <div className="Input-container">
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder="Name"/>
      <input type="email" name="user_email" placeholder="email" required/>
      <textarea name="message" placeholder="Massage"/>
      <div className="button-container">
      <button>SEND</button>
      </div>
    </form>
    </div>
    </div>
  );
};

export default Contact;