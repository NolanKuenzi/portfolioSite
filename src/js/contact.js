import React, { useState } from 'react';
import axios from 'axios';
import regeneratorRuntime, { async } from 'regenerator-runtime';
import Footer from './footer';

const MessageMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState();

  const submitFunc = async event => {
    event.preventDefault();
    try {
      const request = await axios.post('https://powerful-lowlands-40404.herokuapp.com/send', {
        name,
        email,
        message,
      });
      if (request.status === 200) {
        setName('');
        setEmail('');
        setMessage('');
      }
    } catch (error) {
      if (error.response !== undefined) {
        alert(error.response.data);
        return;
      }
      alert(error);
    }
  };
  return (
    <div id="messageDiv">
      <div id="messageDivHeader">
        <h3>Message Me:</h3>
      </div>
      <form onSubmit={event => submitFunc(event)}>
        <div>
          <div id="nameLabel" className="labels">
            <h4>Name:</h4>
          </div>
          <input
            type="text"
            className="contactSecAttr"
            id="contactName"
            placeholder="Your Name"
            value={name}
            onChange={event => setName(event.target.value)}
          />
          <br />
          <div id="emailLabel" className="labels">
            <h4>Email:</h4>
          </div>
          <input
            type="text"
            className="contactSecAttr"
            id="contactEmail"
            placeholder="Your Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>
        <div id="messageLabel" className="labels">
          <h4>Message:</h4>
        </div>
        <textarea
          type="text"
          className="contactSecAttr"
          id="contactMessage"
          placeholder="Message"
          value={message}
          onChange={event => setMessage(event.target.value)}
        />
        <div>
          <button id="submitButton" className="contactSecAttr" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const Contact = () => (
  <div>
    <div id="contactSection">
      <div>
        <h4>Contact Me:</h4>
      </div>
      <div id="contactIcons">
        <a
          href="https://www.linkedin.com/in/nolan-kuenzi-07770473/"
          id="linkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="LinkedIn_Icon" className="iconImg" src="./images/LinkedIn_icon.svg" alt="" />
        </a>
        <a href="mailto:mr.nolank@gmail.com" id="gMail" target="_blank" rel="noopener noreferrer">
          <img id="gMailIcon" className="iconImg" src="./images/Gmail_Icon.png" alt="" />
        </a>
        <a
          href="https://medium.com/@mr.nolank"
          id="medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="mediumIcon" className="iconImg" src="./images/Medium_Logo.svg" alt="" />
        </a>
      </div>
    </div>
    <div>
      <MessageMe />
    </div>
    <Footer />
  </div>
);
export default Contact;
