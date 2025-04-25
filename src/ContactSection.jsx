import React from "react";
import { MdEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall } from "react-icons/fi";
import "./ContactSection.css";

const ContactSection = () => {
  return (
    <section className="contact-container">
      <div className="contact-info">
        <h2>Get In Touch</h2>
        <div className="contact-line"></div>
        <p><MdEmail /> <strong>help@edustarttech.com</strong></p>
        <p><BsWhatsapp /> +234 805 555 5555</p>
        <p><FiPhoneCall /> +234 805 555 5556, <br /> +234 805 555 5557</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="First Name" />
        <input type="email" placeholder="Enter email address" />
        <label>Your Message</label>
        <textarea placeholder="Please enter your message"></textarea>
        <button type="submit">Submit →</button>
      </form>
    </section>
  );
};

export default ContactSection;
