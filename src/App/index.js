import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import './themes.css';
import Form from '../Form'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Form values={this.props.mappedState}/>
      </div>
    );
  }
}

export default App;
