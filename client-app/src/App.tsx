import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {this.state.events.map((events: any) => (
              <li key={events.id}>{events.title}</li>
            ))}
          </ul>
        </header>
      </div>
    );
  }

}

export default App;
