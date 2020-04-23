import React, { Component, Fragment } from "react";
import { Header, Icon, Container } from "semantic-ui-react";
import axios from "axios";
import Navbar from "../../features/nav/NavBar";
import HomePage from "../../features/home/HomePage";
import {
  Route,
  RouteComponentProps,
  withRouter,
  Switch,
} from "react-router-dom";
import FormPageF from "../../features/form/FormPageF";
import ContactForm from "../../features/contact/ContactForm";
import Footer from '../../features/nav/Footer';
import ContactPage from "../../features/contact/ContactPage";


class App extends Component {
  state = {
    events: [],
  };

  componentDidMount() {
    axios.get("http://localhost:5000/api/events").then((response) => {
      console.log(response);
      this.setState({
        events: response.data,
      });
    });
  }
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Navbar />
        <Route exact path="/formpage" component={FormPageF} />
        <Route exact path="/contact" component={ContactPage} />
        <Container style={{ marginTop: "7em" }}></Container>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
