import React, {Component} from 'react'

class Bike extends Component {
    render() {
        return(
            <div className='station'>
                <p>Station Name: {this.props.name}</p>
                <p>Percent Bikes Available: {((this.props.bikes / this.props.totalDocks) * 100).toFixed(2)}%</p>
            </div>
        )
    }
}

export default Bike