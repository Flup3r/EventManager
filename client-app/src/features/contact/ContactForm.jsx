import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import toastr from "toastr";
import ButtonF from "./ButtonF";
import InputF from "./InputF";
import TextAreaF from "./TextAreaF";
import 'jquery';
import { Form } from "semantic-ui-react";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      errors: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    };
  }

  handleInputChange(event){
    event.preventDefault()
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({[name]: value})
  }

  validateMail() {
    let errors = {};
    let formIsValid = true;

    if (!this.state.name || this.state.name.length < 3) {
      errors.name = "Minimum 3 symbols";
      formIsValid = false;
    }
    if (!this.state.subject || this.state.subject.length < 3) {
      errors.subject = "Minimum 3 symbols";
      formIsValid = false;
    }
    if (!this.state.message || this.state.message.length < 10) {
      errors.message = "Minimum 10 symbols";
      formIsValid = false;
    }
    if (!this.state.email || this.state.email.length < 3) {
      errors.email = "Minimum 3 symbols";
      formIsValid = false;
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!pattern.test(this.state.email)) {
      errors.email = "This is not a valid email";
      formIsValid = false;
    }

    this.setState({
      errors: errors,
    });

    return formIsValid;
  }

  

  sentMessage(event) {
    event.preventDefault()

    if (!this.validateMail()) {
      return;
    }

    var templateParams = {
      from_name: this.state.name + '(' + this.state.email + ')',
      to_name: "kj.tymczasowy1992@gmail.com",
      subject: this.state.subject,
      message_html: this.state.message,
    };
    emailjs
      .send(
        "gmail",
        "template_AvYab0TH",
        templateParams,
        "user_O1wv45AemxaofnY3QwCLw"
      )
      .then(
        function (response) {
          toastr.success("Message sent successful");
          console.log("SUCCESS!", response.status, response.text);
        },
        function (err) {
          toastr.error(err);
          console.log(err);
        }
      );
 
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  // handleChange = (param, e) => {
  //   this.setState({ [param]: e.target.value });
  // };
  render() {
    return (
      <Form>
        <form
          id={this.props.id}
          className={this.props.className}
          name={this.props.name}
          method={this.props.method}
          action={this.props.action}
        >
          <Form.Field>
          <InputF
            type="text"
            name="name"
            className="form-control"
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.name}
            error={this.state.errors.name}
          />
          </Form.Field>

          <Form.Field>
          <InputF
            type="email"
            name="email"
            className="form-control"
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.email}
            error={this.state.errors.email}
          />
          </Form.Field>

          <Form.Field>
          <InputF
            type="text"
            name="subject"
            className="form-control"
            required="required"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.subject}
            error={this.state.errors.subject}
          />
          </Form.Field>

          <Form.Field>
          <TextAreaF
            name="message"
            id="message"
            required="required"
            className="form-control"
            rows="8"
            onChange={this.handleInputChange.bind(this)}
            value={this.state.message}
            error={this.state.errors.message}
          />
          </Form.Field>

          <ButtonF
            type="button"
            name="submit"
            className="btn btn-primary btn-lg"
            required="required"
            onClick={this.sentMessage.bind(this)}
          />
        </form>
      </Form>
    );
  }
}
{
  /*         
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
          </Container> */
}

export default ContactForm;
