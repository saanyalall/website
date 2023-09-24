import React from 'react';
import './Contact.css'; // Import CSS file for styling

function Contact() {
  return (
    <div className="contact-container">
      <div className="content">
        <h1 style={{fontWeight:"bolder"}}>NewsLetter</h1>
        <p>Get news about articles and updates in your inbox.</p>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" id="name" placeholder="Enter your name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" id="message" rows="5" placeholder="Enter your message"></textarea>
          </div>
        </form>
      </div>
      <img src="/Images/getTouch.png.png" alt="img" className="image-1" />
      <img src="\Images\Button.png" alt="" className="image-2" />
    </div>
  );
}

export default Contact;
