import React, {Component, Fragment} from 'react';
import { Header, Icon, Container } from 'semantic-ui-react'
import axios from 'axios';
import Navbar from '../../features/nav/NavBar';
import HomePage from '../../features/home/HomePage';
import Footer from '../../features/nav/Footer';

class App extends Component {
  state = {
    events: []
  }

  componentDidMount(){
    axios.get("http://localhost:5000/api/events")
      .then(response => {
        console.log(response);
        this.setState({   
          events: response.data
        });
      });
    
  }
  render(){
    return (
      <Fragment>
          <Navbar />
          <HomePage />
          <Container style={{marginTop: '7em'}}>
          </Container>
          <Footer />
      </Fragment>
    );
  }

}

export default App;
