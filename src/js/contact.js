import React from 'react';
import Footer from './footer';

const submitFunc = () => {
  const name = document.getElementById('contactName');
  const email = document.getElementById('contactEmail');
  const message = document.getElementById('contactMessage');
  if (name.value === '' || email.value === '' || message.value === '') {
    alert('Please complete all form fields');
  }
};

const MessageMe = () => {
  return (
    <div id="messageDiv">
      <div id="messageDivHeader">
        <h3>Message Me:</h3>
      </div>
      <form action="http://localhost:3000/send/" method="post">
        <div>
          <div id="nameLabel" className="labels">
            <h4>Name:</h4>
          </div>
          <input
            type="text"
            className="contactSecAttr"
            id="contactName"
            placeholder="Your Name"
            name="name"
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
            name="email"
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
          name="message"
        />
        <div>
          <button
            id="submitButton"
            className="contactSecAttr"
            type="submit"
            onClick={() => submitFunc()}
          >
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
          <img
            id="LinkedIn_Icon"
            className="iconImg"
            src="./dist/images/LinkedIn_icon.svg"
            alt=""
          />
        </a>
        <a href="mailto:mr.nolank@gmail.com" id="gMail" target="_blank" rel="noopener noreferrer">
          <img id="gMailIcon" className="iconImg" src="./dist/images/Gmail_Icon.png" alt="" />
        </a>
        <a
          href="https://medium.com/@mr.nolank"
          id="medium"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="mediumIcon" className="iconImg" src="./dist/images/Medium_Logo.svg" alt="" />
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
