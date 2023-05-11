import React, { useState } from 'react';
import './contactform.scss';
import img5 from './map.jpg'
import axios from 'axios';

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    number: '',
    message: ''

  });

  const handleSumbit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:3002/message',formData)
  }
  const handleNameChange = (event) => {
    setFormData({ ...formData, name: event.target.value });
  };
  const handleLastNameChange = (event) => {
    setFormData({ ...formData, lastName: event.target.value });
  };
  const handleEmailChange = (event) => {
    setFormData({ ...formData, email: event.target.value });
  };
  const handleNumberChange = (event) => {
    setFormData({ ...formData, number: event.target.value });
  };
  const handleMessageChange = (event) => {
    setFormData({ ...formData, message: event.target.value });
  };

  return (
    <section className='contact-form'>
      <div className='contact-wrapper'>
        <form action="" onSubmit={handleSumbit}>
          <div className='names'>
            <p className='name'>Имя*
              <label>
                <input type="text" value={formData.name} onChange={handleNameChange} placeholder='Введите имя...' required />
              </label>
            </p>
            <p className='name'>Фамилия*
              <label>

                <input type="text" value={formData.lastName} onChange={handleLastNameChange} placeholder='Введите фамилию...' required />
              </label>
            </p>
          </div>
          <div className='names'>
            <p className='name'>Почта*
              <label>
                <input type="text" value={formData.email} onChange={handleEmailChange} placeholder='Введите почту...' required />
              </label> </p>

            <p className='name'>Номер телефона*
              <label>
                <input type="text" value={formData.number} onChange={handleNumberChange} placeholder='Введите номер...' required />
              </label> </p>
          </div>

          <p>Оставьте сообщение*</p>
          <div className='contact-form-area'>
            <textarea
              type="text"
              value={formData.message}
              onChange={handleMessageChange}
              placeholder='Здесь вы можете написать,по какому вопросу вы собираетесь с нами связаться' className='message' />

            <button type='submit'>Отправить</button>
          </div>


        </form>

        <div className='contact-img'>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ae43c255404d801db40ea6a44331a8ddf74f3f25340725cc3183235a3e7f8d3a3&amp;source=constructor" width="549" height="400" frameborder="0"></iframe>
          {/* <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa6bd1a8d16d2007ca052e607b7d67bafca9905471461150fa9bd89b9652946a3&amp;source=constructor" width="496" height="391" frameborder="0"></iframe> */}

        </div>
      </div>


    </section>
  );
};

export default ContactForm;