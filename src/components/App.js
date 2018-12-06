import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';
import BikeList from './BikeList'
import BikeSeed from '../resources/seedbikes.json'

class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'Hello World!',
      data: 'The an ok prop...!'
    }
  }

  componentDidMount() {
    this.setState({bikeData: BikeSeed})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            This app says {this.state.msg}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <BikeList/>
        </header>
      </div>
    );
  }
}

export default App;
