import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Bike.css'
import BikeList from './BikeList'

const axios = require('axios')

class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'Hello World!',
      data: 'The an ok prop...!',
      bikeData: []
    }
  }

  componentDidMount () {
    console.log('Component mounted!')
    // For some indiscernable reason, citibikenyc doesn't have cross-origin requests enabled, so we route through cors-anywhere
    // This obviously is a bit of a patchjob fix, and it would be better to
    axios.get('https://cors-anywhere.herokuapp.com/https://feeds.citibikenyc.com/stations/stations.json', {crossdomain: true})
    .then( response => {
      this.setState({bikeData: response.data.stationBeanList})
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
