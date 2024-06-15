import React, { useState } from 'react';
import './Contact.css';
import mail from '../Assets/mail_icon.svg';
import call from '../Assets/call_icon.svg';
import location from '../Assets/location_icon.svg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const onSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        formData.append("access_key", "5561720f-69df-437d-afde-036337738715");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            toast.success(res.message);
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } else {
            toast.error('Failed to submit form. Please try again later.');
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className='contact'>
            <div className="contact-title">
                <h1>Contact Me</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to say hello, feel free to reach out using the contact information below.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail} alt="" /> <p>malikarifin904@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call} alt="" /> <p>+62 882-9351-1029</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location} alt="" /> <p>Depok, Jawa Barat, Indonesia</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} action="" className="contact-right">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' id='name' value={formData.name} onChange={handleChange} />
                    <label htmlFor="email">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' id='email' value={formData.email} onChange={handleChange} />
                    <label htmlFor="message">Write your message here</label>
                    <textarea name="message" id="message" rows="8" placeholder='Enter your message' value={formData.message} onChange={handleChange}></textarea>
                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>
            <ToastContainer
                toastClassName="black-toast"
            />
        </div>
    );
}

export default Contact;
