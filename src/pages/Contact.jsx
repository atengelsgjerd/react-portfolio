import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

// this is the contact component that will be rendered in the App.jsx file
const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_tb9s6xc', 'template_pd3vedt', form.current, {
        publicKey: 'UIovC_Trfh8U41WaJ',
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



        
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" required />
      <label>Email</label>
      <input type="email" name="user_email" required/>
      <label>Message</label>
      <textarea name="message" required />
      <input className="submitBtn" type="submit" value="Send" />
    </form>
    )
};

export default Contact;