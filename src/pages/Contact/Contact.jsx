import React from 'react';
import './contact.scss';
import email from './email (1).png';
import chat from './chat.png';
import location from './location.png'
import ContactForm from '../../components/ContactForm/ContactForm';



const Contact = () => {

    return (
        <>
        <section className='contact'>
            <h2>Контакты для связи</h2>
            <div className='white'>
                <div className='contacts'>
                    <img src={email} alt="" />
                    <p>Info@kitdrone.com</p>
                </div>
                <div className='contacts'>
                    <img src={chat} alt="" />
                    <p>+996 704-213-010</p>
                </div>
                <div className='contacts'>
                    <img src={location} alt="" />
                    <p>Эркиндик, 58А (Инновационный центр)</p>
                </div>
            </div>
            
        </section>
        <ContactForm/>
        </>
        
    );
};

export default Contact;