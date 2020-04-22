import React, { Component } from 'react'
import * as emailjs from 'emailjs-com'
import { Button, FormFeedback, Form, FormGroup, Label, Input } from 'reactstrap'
import { Container } from 'semantic-ui-react'
import toastr from 'toastr'

class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
  }

  valdateMail(){
      let errors = {}
      let formIsValid = true

      if (!this.state.name || this.state.name.length < 3) {
          errors.name = 'Minimum 3 symbols'
          formIsValid = false
      }
      if (!this.state.subject || this.state.subject.length < 3) {
        errors.subject = 'Minimum 3 symbols'
        formIsValid = false
    }
    if (!this.state.message || this.state.message.length < 10) {
        errors.message = 'Minimum 10 symbols'
        formIsValid = false
    }
    if (!this.state.email || this.state.email.length < 3) {
        errors.email = 'Minimum 3 symbols'
        formIsValid = false
    }
    
    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/

    if (!pattern.test(this.state.email)) {
        errors.email = 'This is not a valid email'
        formIsValid = false
    }

    this.setState({
        errors: errors
    })

    return formIsValid
}

  
handleSubmit(e) {

    if (!this.validateMail()){
        return
    }

    e.preventDefault()
    const { name, email, subject, message } = this.state
    let templateParams = {
      from_name: email,
      to_name: 'kj.tymczasowy1992@gmail.com',
      subject: subject,
      message_html: message,
     }
     emailjs.send(
      'gmail',
      'template_AvYab0TH',
       templateParams,
      'user_O1wv45AemxaofnY3QwCLw'
     ).then(function(response) {
         toastr.success('Message sent successful')
         console.log('SUCCESS!', response.status, response.text)
     }, function(err){
         toastr.error(err)
         console.log(err)
     })
     this.resetForm()
 }
resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, e) => {
    this.setState({ [param]: e.target.value })
  }
render() {
    return (
      <>
        {/* <Layout> */}
        <Container style={{ marginTop: 60 }}>
          <h1 className="p-heading1">Get in Touch</h1>
          <Form onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="formBasicEmail">
              <Label className="text-muted">Email address</Label>
              <Input
                type="email"
                name="email"
                value={this.state.email}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </FormGroup>
<FormGroup controlId="formBasicName">
              <Label className="text-muted">Name</Label>
              <Input
                type="text"
                name="name"
                value={this.state.name}
                className="text-primary"
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </FormGroup>
<FormGroup controlId="formBasicSubject">
              <Label className="text-muted">Subject</Label>
              <Input
                type="text"
                name="subject"
                className="text-primary"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </FormGroup>
<FormGroup controlId="formBasicMessage">
              <Label className="text-muted">Message</Label>
              <Input
                type="textarea"
                name="message"
                className="text-primary"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </FormGroup>
<Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Container>
        {/* </Layout> */}
      </>
    )
  }
}
export default ContactForm