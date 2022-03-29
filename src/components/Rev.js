import React, { Component } from "react";
import pfp from "./images/pfp.png";
import star from "./images/star.png";
import Button from "@mui/material/Button";
class Rev extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
    this.createText = this.createText.bind(this);
  }

  createText() {
    if (this.state.isShow=== false){
    this.setState({ isShow: true });
  } else {
    this.setState({isShow: false})
  }
  }

  render() {
    return (
      <div className="revc">
        <div className="revb">
          <div className="pics">
            <img src={pfp} alt="pfp" id="pfp" />
            <img src={star} alt="stars" className="rimage" />
          </div>
          <p>
            Magna eu pariatur non pariatur consectetur sint occaecat elit. Magna
            Magna eu pariatur non pariatur consectetur sint eu pariatur non
            pariatur consectetur sint{" "}
          </p>
        </div>

        <div className="revb">
          <div className="pics">
            <img src={pfp} alt="pfp" id="pfp" />
            <img src={star} alt="stars" className="rimage" />
          </div>
          <p>
            Magna eu pariatur non pariatur consectetur sint occaecat elit. Magna
            Magna eu pariatur non pariatur consectetur sint eu pariatur non
            pariatur consectetur sint{" "}
          </p>
        </div>

        <div className="revb">
          <div className="pics">
            <img src={pfp} alt="pfp" id="pfp" />
            <img src={star} alt="stars" className="rimage" />
          </div>
          <p>
            Magna eu pariatur non pariatur consectetur sint occaecat elit. Magna
            Magna eu pariatur non pariatur consectetur sint eu pariatur non
            pariatur consectetur sint{" "}
          </p>
        </div>
        {/*When state === true more reviews are rendered */}
        {this.state.isShow && (
          <div>
            {" "}
            <div className="revb">
              <div className="pics">
                <img src={pfp} alt="pfp" id="pfp" />
                <img src={star} alt="stars" className="rimage" />
              </div>
              <p>
                Magna eu pariatur non pariatur consectetur sint occaecat elit.
                Magna Magna eu pariatur non pariatur consectetur sint eu
                pariatur non pariatur consectetur sint{" "}
              </p>
            </div>
            <div className="revb">
            <div className="pics">
              <img src={pfp} alt="pfp" id="pfp" />
              <img src={star} alt="stars" className="rimage" />
            </div>
            <p>
              Magna eu pariatur non pariatur consectetur sint occaecat elit.
              Magna Magna eu pariatur non pariatur consectetur sint eu pariatur
              non pariatur consectetur sint{" "}
            </p>
          </div>
          <div className="revb">
            <div className="pics">
              <img src={pfp} alt="pfp" id="pfp" />
              <img src={star} alt="stars" className="rimage" />
            </div>
            <p>
              Magna eu pariatur non pariatur consectetur sint occaecat elit.
              Magna Magna eu pariatur non pariatur consectetur sint eu pariatur
              non pariatur consectetur sint{" "}
            </p>
          </div>
          <div className="revb">
            <div className="pics">
              <img src={pfp} alt="pfp" id="pfp" />
              <img src={star} alt="stars" className="rimage" />
            </div>
            <p>
              Magna eu pariatur non pariatur consectetur sint occaecat elit.
              Magna Magna eu pariatur non pariatur consectetur sint eu pariatur
              non pariatur consectetur sint{" "}
            </p>
          </div>
          <div className="revb">
            <div className="pics">
              <img src={pfp} alt="pfp" id="pfp" />
              <img src={star} alt="stars" className="rimage" />
            </div>
            <p>
              Magna eu pariatur non pariatur consectetur sint occaecat elit.
              Magna Magna eu pariatur non pariatur consectetur sint eu pariatur
              non pariatur consectetur sint{" "}
            </p>
          </div>
          <div className="revb">
            <div className="pics">
              <img src={pfp} alt="pfp" id="pfp" />
              <img src={star} alt="stars" className="rimage" />
            </div>
            <p>
              Magna eu pariatur non pariatur consectetur sint occaecat elit.
              Magna Magna eu pariatur non pariatur consectetur sint eu pariatur
              non pariatur consectetur sint{" "}
            </p>
          </div>
          <div className="revb">
            <div className="pics">
              <img src={pfp} alt="pfp" id="pfp" />
              <img src={star} alt="stars" className="rimage" />
            </div>
            <p>
              Magna eu pariatur non pariatur consectetur sint occaecat elit.
              Magna Magna eu pariatur non pariatur consectetur sint eu pariatur
              non pariatur consectetur sint{" "}
            </p>
          </div>
          </div>
        )}
        {/*New reviews are rendered here ^^^ */}
        <Button
          style={{
            color: "#242424",
            borderColor: "#242424",
            whiteSpace: "nowrap",
            alignSelf: "center",
          }}
          variant="outlined"
          onClick={this.createText}
        >
          {this.state.isShow ? 'show less': 'show more'}
        </Button>
      </div>
    );
  }
}

export default Rev;
