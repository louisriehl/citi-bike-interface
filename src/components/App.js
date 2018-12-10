import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/Bike.css'
import BikeList from './BikeList'

const axios = require('axios')

class App extends Component {
  constructor() {
    super()
    this.state = {
      msg: 'Fetching bike station data...',
      bikeData: []
    }
  }

  componentDidMount () {
    console.log('Component mounted!')
    // For some indiscernable reason, citibikenyc doesn't have cross-origin requests enabled, so we route through cors-anywhere
    // This obviously is a bit of a patchjob fix, and it would be better to
    axios.get('https://cors-anywhere.herokuapp.com/https://feeds.citibikenyc.com/stations/stations.json', {crossdomain: true})
    .then( response => {
      this.setState({bikeData: response.data.stationBeanList.filter( station => (
        station.statusValue === 'In Service' && station.testStation !== true
      )), msg: 'All done!'})
    })
    .catch( error => {
      console.log(error)
      this.setState({msg: 'Something went wrong!'})
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>{this.state.msg}</h2>
          <BikeList bikeInfo={this.state.bikeData}/>
        </header>
      </div>
    );
  }
}

export default App;
