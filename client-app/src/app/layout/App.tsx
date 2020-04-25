import React, { Component, Fragment } from "react";
import { Container } from "semantic-ui-react";
import axios from "axios";
import Navbar from "../../features/nav/NavBar";
import HomePage from "../../features/home/HomePage";
import {Route} from "react-router-dom";
import FormPageF from "../../features/form/FormPageF";
import Footer from '../../features/nav/Footer';
import ContactPage from "../../features/contact/ContactPage";
import {ToastContainer} from 'react-toastify';

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
    axios({
      method: 'get',
      url: 'http://localhost:5000/users',
      'headers': {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjcxMDI0ZTBiLTU4NTMtNDkyMy05MzE4LWMwNzZmYzA5M2U0YiIsIm5iZiI6MTU4NzY5ODM1MiwiZXhwIjoxNTg4MzAzMTUyLCJpYXQiOjE1ODc2OTgzNTJ9.MjJWsv3OmXnALqJ9ASoY4_oD9yxG--sRILA1-18zUrE'
      },
    })
      .then((response) => {
      console.log(response);
    })
    .catch(function (response) {
      //handle error
      console.log("Wrong Token log in again", localStorage.getItem("token"));
      
      
      
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
