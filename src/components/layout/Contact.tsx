// Contact.tsx
import React, { useState } from 'react';
import { FaInstagram, FaEnvelope, FaPhone, FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = (formData.get('name') as string)?.trim();
    const email = (formData.get('email') as string)?.trim();
    const message = (formData.get('message') as string)?.trim();

    const newErrors = { name: '', email: '', message: '' };
    if (!name) newErrors.name = 'Please enter your name.';
    if (!email) newErrors.email = 'Please enter your email.';
    if (!message) newErrors.message = 'Please enter your message.';
    if (newErrors.name || newErrors.email || newErrors.message) {
      setErrors(newErrors);
      return;
    }

    formData.append("access_key", "d28135c5-7e9e-4f35-bd22-025b4c920400");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: json
    }).then(res => res.json());

    if (res.success) {
      setFormSubmitted(true);
      setErrors({ name: '', email: '', message: '' });
    }
  };

  return (
    <div id='contact' className='contact'>
      

      <div className="contact-section">
        {/* Left Side: Contact Details */}
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>We're on Salerno's main street. Come visit us!</p>

          <div className="contact-details">
            <div className="contact-detail">
              <FaEnvelope className="icon" />
              <p>burgerbaritalia@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhone className="icon" />
              <p>089236337</p>
            </div>
            <div className="contact-detail">
              <FaMapMarkerAlt className="icon" />
              <p>Salerno, Italy</p>
            </div>
          </div>

          {/* Social icons */}
          <div className="social-icons">
            <a href="https://www.instagram.com/burgerbarcargo/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="icon" />
            </a>
            <a href="https://www.facebook.com/share/14WeRUhWhR4/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="icon" />
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="icon" />
            </a>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        {!formSubmitted ? (
          <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="name">Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name' />
            {errors.name && <p className="error-message">{errors.name}</p>}

            <label htmlFor="email">Your Email</label>
            <input type="email" name='email' placeholder='Enter Your Email' />
            {errors.email && <p className="error-message">{errors.email}</p>}

            <label htmlFor="message">Your Message</label>
            <textarea name="message" rows={8} placeholder='Enter Your Message'></textarea>
            {errors.message && <p className="error-message">{errors.message}</p>}

            <button type='submit' className="contact-submit">Submit</button>
          </form>
        ) : (
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your message has been successfully submitted.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
