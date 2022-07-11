import React, { useContext } from 'react'
import './Contact.css'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {

    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;
    const form = useRef();

    const [done, setDone] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ojjsl2j', 'template_u7xer1j', form.current, 'Uvno4m_kDfH7Fczkf')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='contact-form'>
        <div className="w-left">
            <div className="awesome">
                <span
                    style={{color: darkMode ? 'white' : ''}}
                    className='contact-titles'
                >Get in touch</span>
                <span className='contact-titles'>Contact me</span>

                <div 
                    className="blue s-blur1"
                    style={{background: '#ABF1FF94'}}
                >

                </div>
            </div>
        </div>

        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input 
                    type="text" 
                    name='user_name'
                    className='user'
                    placeholder='Name'
                />

                <input 
                    type="email" 
                    name='user_email'
                    className='user'
                    placeholder='Email'
                />

                <textarea 
                    name="message"
                    className='user'
                    placeholder='Message'
                />

                <input 
                    type="submit" 
                    className='button'
                    value='Send'
                />

                <span>
                    {done && "Thanks for contacting me!"}
                </span>

                <div 
                    className="blur c-blur1"
                    style={{background: 'var(--purple'}}
                >

                </div>
            </form>
        </div>
    </div>
  )
}

export default Contact