import React, { Component } from 'react';
import Bike from './Bike'

class BikeList extends Component {
    render() {
        return (
            <div>
                <h5>If you can read this, that means BikeList loaded correctly!</h5>
                <Bike/>
            </div>
        )
    }
}

export default BikeList