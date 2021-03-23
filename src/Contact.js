import React from 'react';
import { NavLink } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('xyybrrdn');
  if (state.succeeded) {
    return <p>Thanks for getting in touch!</p>;
  }

  return (
    <form className='emailForm' onSubmit={handleSubmit}>
      <h2>send me a message</h2>
      <label htmlFor='email'>your email address</label>
      <input id='email' type='email' name='email' />
      <ValidationError prefix='Email' field='email' errors={state.errors} />
      <label htmlFor='message'>message</label>
      <textarea id='message' name='message' />
      <ValidationError prefix='Message' field='message' errors={state.errors} />
      <button
        className='emailForm-button'
        type='submit'
        disabled={state.submitting}
      >
        send message
      </button>
    </form>
  );
}

function Contact() {
  return (
    <div className='pageView'>
      <div className='header'>
        <NavLink className='homeArrow' to={'/'}>
          ←
        </NavLink>
        <p className='about'>Contact</p>
      </div>
      <div className='projects'>
        <a href='mailto:jackrandol@gmail.com'>
          <div className='contact-email'>send an email</div>
        </a>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
