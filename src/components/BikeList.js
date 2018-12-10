import React, { Component } from 'react';
import Bike from './Bike'

class BikeList extends Component {
    render() {
        const bikeItems = this.props.bikeInfo.map( (station) => (
            <Bike
                key={station.id}
                name={station.stationName}
                bikes={station.availableBikes}
                totalDocks={station.totalDocks}
                availableDocks={station.availableDocks}
                lat={station.latitude}
                long={station.longitude}
                lastComm={station.lastCommunicationTime}
            />
        ))
        return (
            <div className="stations">
                {bikeItems}
            </div>
        )
    }
}

export default BikeList