import React from 'react';
import ContactForm from '../containers/contact_form';
import SectionHeader from './section_header';

const Contact = (props) => {
  return (
    <div className='contact'>
      <SectionHeader header={'contact'}/>
      <ContactForm />
    </div>
  )
}

export default Contact;
