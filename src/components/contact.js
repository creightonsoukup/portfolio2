import React from 'react';
import ContactForm from '../containers/contact_form';
import SectionHeader from './section_header';

const Contact = (props) => {
  return (
    <section id='contact' className='contact'>
      <SectionHeader header={'contact'}/>
      <ContactForm submitTicket={props.submitTicket} />
    </section>
  )
}

export default Contact;
