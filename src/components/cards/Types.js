import React, { Component } from "react";
import "./cards.css";
import tile from "./images/tile.png";
import Button from "@mui/material/Button";

class Types extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: " ",
      button: "types",
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    if (this.state.message === " ") {
      this.setState({
        message:
          "-We can install many different types of roofing\n\n-Concrete Tile is our specialty\n\n-Clay tile\n\n-Asphalt / Shingles\n\n-Flat roof",
      });
    } else {
      this.setState({ message: " " });

    
    }
  }

  render() {

      {/* Clicking the button changes the state and displays it within a div */}

    return (
      <div className="card-container">
        <div className="type-container">
          <img src={tile} alt="Tile" className="img" />
          <h2>Types of Roofs</h2>
          <Button
            style={{
              color: "#242424",
              borderColor: "#242424",
              whiteSpace: 'nowrap',
              width: 'max'
            }}
            className="cardButton"
            onClick={this.clickHandler}
            variant="outlined"
            fullWidth={true}
          >
           {this.state.button}
          </Button>
          <div className="card">{this.state.message}</div>
        </div>
      </div>
    );
  }
}

export default Types;
