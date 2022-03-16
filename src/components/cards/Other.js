import React, { Component } from 'react';
import "./cards.css"
import paint from "./images/paint.png"



class Other extends Component {

    

    constructor(props){
        super(props)

        this.state = {
            message: ' '
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        console.log(this.state)
        if(this.state.message === ' '){
        this.setState({
            message: '-Exterior painting\n\nInterior Painting\n\n-Cleaing Leaves from gutters\n\n-Replacing gutters\n\n-PaperWork processing'
        })
    }else {
        this.setState({
            message: ' '
        })
    }
    }
    

    render() {
        return (
            <div className = "card-container">
                <div className = "type-container">
                <img src={paint} alt="Paint" className="img"/>
                <h2>Other Services</h2>
                <button onClick={this.clickHandler}>Show more</button>
                <div className = "card">{this.state.message}</div>
                </div>
            </div>
        );
    }
}

export default Other;