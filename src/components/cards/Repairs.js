import React, { Component } from 'react';
import "./cards.css"
import roof from "./images/roof.png"



class Repairs extends Component {

    

    constructor(props){
        super(props)

        this.state = {
            message: ' '
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: '-Replacing wind blown shingles, repairing leaks\n\n-Close animal entry points on the roof.\n\n-Flashing Repair\n\n-Replace rotten plywood/facia\n\n -Free Inspection to assess  damage We work along side your insurance to make the process easy. Homeowner chooses the new color of the new roof. Assistance available if needed'
        })
    }
    

    render() {
        return (
            <div className = "card-container">
                <div className = "type-container">
                <img src={roof} alt="Roof" className="img"/>
                <h2>Types of Repairs</h2>
                <button onClick={this.clickHandler}>Show more</button>
                <div className = "card">{this.state.message}</div>
                </div>
            </div>
        );
    }
}

export default Repairs;