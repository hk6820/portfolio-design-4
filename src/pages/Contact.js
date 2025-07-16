import React from 'react';
import emailjs from 'emailjs-com';
import './style/Contact.css'; // Assuming you have a CSS file for styling
import {
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
  EMAIL_PUBLIC_KEY,
} from '../utils/emailConfig'; // Adjust the import path as necessary

const Contact = ({ title, subtitle, email, location , id}) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      EMAIL_SERVICE_ID,
      EMAIL_TEMPLATE_ID,
      e.target,
      EMAIL_PUBLIC_KEY
    )
      .then(() => {
        alert('Message sent successfully!');
        e.target.reset();
      })
      .catch((err) => {
        alert('Failed to send message. Please try again later.');
        console.error(err);
      });
  };

  return (
    <section className="container contact-section" id={id||"contact"}>
      <h2 className="section-title">{title}</h2>
      <p className="contact-subtitle">{subtitle}</p>

      <div className="contact-info">
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Location:</strong> {location}</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
