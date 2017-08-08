import React, { Component } from 'react';

class ContactForm extends Component {
  render() {
    return (
      <div className='contact-form'>
        <form>
          <input placeholder={'name'}/>
          <input placeholder={'email'}/>
          <input placeholder={'subject'}/>
          <textarea placeholder={'message'}></textarea>
          <div className='submit'>submit</div>
        </form>
      </div>
    )
  }
}

export default ContactForm
