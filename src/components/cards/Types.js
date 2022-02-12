import React, { Component } from 'react';
import "./cards.css"
import tile from "./images/tile.png"



class Types extends Component {

    

    constructor(props){
        super(props)

        this.state = {
            message: ' '
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        this.setState({
            message: '-We can install many different types of roofing\n\n-Concrete Tile is our specialty\n\n-Clay tile\n\n-Asphalt / Shingles\n\n-Flat roof'
        })
    }
    

    render() {
        return (
            <div className = "card-container">
                <div className = "type-container">
                <img src={tile} alt="Tile" className="img"/>
                <h2>Types of Roofs</h2>
                <button onClick={this.clickHandler}>Show more</button>
                <div className = "card">{this.state.message}</div>
                </div>
            </div>
        );
    }
}

export default Types;