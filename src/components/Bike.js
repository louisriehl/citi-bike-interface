import React, {Component} from 'react'

class Bike extends Component {
    render() {
        return(
            <ul>
                <li>Station Name: {this.props.name}</li>
                <li>Percent Bikes Available: {((this.props.bikes / this.props.totalDocks) * 100).toFixed(2)}%</li>
            </ul>
        )
    }
}

export default Bike