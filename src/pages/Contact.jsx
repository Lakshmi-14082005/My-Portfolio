import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for reaching out! I'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact-container">
            <h2 className="text-5xl contact-heading">Contact Me</h2>
            <p className="contact-subtitle">Let's connect! Feel free to reach out for opportunities or just a tech chat.</p>

            <div className="contact-layout">

                <div className="contact-info-cards">
                    <a href="mailto:thotalakshmiprasanna1408@gmail.com" className="connect-card">
                        <div className="connect-icon">✉️</div>
                        <h3>Email</h3>
                        <p>thotalakshmiprasanna1408@gmail.com</p>
                    </a>

                    <a href="https://linkedin.com/in/lakshmi-prasanna-thota-88a28740b" target="_blank" rel="noopener noreferrer" className="connect-card">
                        <div className="connect-icon">💼</div>
                        <h3>LinkedIn</h3>
                        <p>linkedin.com/in/lakshmi-prasanna-thota-88a28740b</p>
                    </a>

                    <a href="https://github.com/Lakshmi-14082005" target="_blank" rel="noopener noreferrer" className="connect-card">
                        <div className="connect-icon">🐙</div>
                        <h3>GitHub</h3>
                        <p>github.com/Lakshmi-14082005</p>
                    </a>
                </div>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Your Email"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Type your message here..."
                        ></textarea>
                    </div>
                    <button type="submit" className="submit-btn">Send Message 🚀</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;