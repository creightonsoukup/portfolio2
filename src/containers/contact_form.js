import React, { Component } from 'react';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      subject: '',
      message: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.submitTicket = this.submitTicket.bind(this)
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  submitTicket() {
    let ticket = {}
    ticket.name = this.state.name
    ticket.email = this.state.email
    ticket.subject = this.state.subject
    ticket.message = this.state.message
    this.props.submitTicket(ticket)
    this.setState({
      name:'',
      email: '',
      subject: '',
      message: ''
    })
  }
  render() {
    return (
      <div className='contact-form'>
        <form>
          <input
          placeholder={'name'}
          name={'name'}
          value={this.state.name}
          onChange={this.handleInputChange}/>
          <input
          placeholder={'email'}
          name={'email'}
          value={this.state.email}
          onChange={this.handleInputChange}/>
          <input
          placeholder={'subject'}
          name={'subject'}
          value={this.state.subject}
          onChange={this.handleInputChange}/>
          <textarea
          placeholder={'message'}
          name='message'
          value={this.state.message}
          onChange={this.handleInputChange}></textarea>
          <div
          onClick={this.submitTicket}
          className='submit'
          >submit</div>
        </form>
      </div>
    )
  }
}

export default ContactForm
