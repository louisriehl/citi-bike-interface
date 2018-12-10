import React, {Component} from 'react'

class Bike extends Component {
    constructor () {
        super()
        this.state = {
            isHovered: false
        }
        this.mouseEntered = this.mouseEntered.bind(this)
        this.mouseLeft = this.mouseLeft.bind(this)
    }
    render() {
        const elementIsHovered = this.state.isHovered
        let extraInfo

        if (elementIsHovered) {
            extraInfo = <div>
                <p>Available Docks: {this.props.availableDocks}</p>
                <p>Lat/Long: {this.props.lat}, {this.props.long}</p>
                <p>Last Communication: {this.props.lastComm}</p>
            </div>
        }
        return(
            <div className='station' onMouseEnter={this.mouseEntered} onMouseLeave={this.mouseLeft}>
                <p><strong>{this.props.name}</strong></p>
                <p>Percent Bikes Available: {((this.props.bikes / this.props.totalDocks) * 100).toFixed(2)}%</p>
                {extraInfo}
            </div>
        )
    }

    mouseEntered () {
        this.setState({isHovered: true})
    }

    mouseLeft () {
        this.setState({isHovered: false})
    }
}

export default Bike