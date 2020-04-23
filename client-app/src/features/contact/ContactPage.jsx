import React, { Component } from "react";
import ContactForm from "./ContactForm";
import { Container } from "semantic-ui-react";

class ContactPage extends Component {
  render() {
    return (
      <Container style={{ marginTop: 60 }}>
        <div className="center">
          <h3>Drop Your Message</h3>
        </div>

        <div
          className="status alert alert-success"
          style={{ display: "none" }}
        />
        <ContactForm
          id="main-contact-form"
          className="contact-form"
          name="contact-form"
          method="post"
          action=""
        />
      </Container>
    );
  }
}

export default ContactPage;
