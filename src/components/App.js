import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Bike.css'
import BikeList from './BikeList'
import BikeSeed from '../resources/seedbikes.json'

const axios = require('axios')

class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'Hello World!',
      data: 'The an ok prop...!',
      bikeData: BikeSeed
    }
  }

  componentDidMount () {
    console.log('Component mounted!')
    axios.get('https://feeds.citibikenyc.com/stations/stations.json', {crossdomain: true})
    .then( response => {
      console.log(response)
    })
    .catch( error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BikeList bikeInfo={this.state.bikeData}/>
        </header>
      </div>
    );
  }
}

export default App;
