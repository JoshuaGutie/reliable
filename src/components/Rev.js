import React, { Component } from "react";
import pfp from "./images/pfp.png";
import star from "./images/star.png";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

class Rev extends Component {
  constructor() {
    super();
    this.state = {
      isShow: false,
    };
    this.createText = this.createText.bind(this);
  }

  createText() {
    if (this.state.isShow === false) {
      this.setState({ isShow: true });
    } else {
      this.setState({ isShow: false });
    }
  }

  render() {
    return (
      <div className="revc">
        <h2
          style={{
            margin: "0px",
            color: "DFDFDF",
          }}
        >
          Reviews via HomeAdvisor
        </h2>

        <div className="revb">
          <div className="pics">
            <img src={pfp} alt="pfp" id="pfp" />
            <img src={star} alt="stars" className="rimage" />
          </div>
          <span>
            <b>Ron W.</b>Austin, TX
          </span>
          <NavLink
            activeClassName="active"
            to="/services"
            style={{
              textDecoration: "none",
              color: "#063d74",
              fontWeight: "500",
            }}
          >
            Repair of a Flat Roof{" "}
          </NavLink>
          <p>
            As a former home building contractor, I know quality work, and Jimmy
            is 5 STAR Quality in all aspects.
            Courteous, prompt, completed the job in a professional manner. Jimmy
            and his crew are the best. I would hire them again and highly
            recommend them to everyone.{" "}
          </p>
        </div>

        <div className="revb">
          <div className="pics">
            <img src={pfp} alt="pfp" id="pfp" />
            <img src={star} alt="stars" className="rimage" />
          </div>
          <span>
            <b>Donny N.</b>Pflugerville, TX
          </span>
          <NavLink
            activeClassName="active"
            to="/services"
            style={{
              textDecoration: "none",
              color: "#063d74",
              fontWeight: "500",
            }}
          >
            Apply Roof Sealant{" "}
          </NavLink>
          <p>
            Jimmy came out and gave a quote for a fix that would stop our gable
            vent from taking in water with heavy winds and rain, which caused
            water damage to the interior walls. Four days later, he came out and
            implemented a permanent solution to prevent water from getting into
            our attic in the future, and made structural modifications to the
            gable vent which exceeded our expectations. Thanks Jimmy!{" "}
          </p>
        </div>

        <div className="revb">
          <div className="pics">
            <img src={pfp} alt="pfp" id="pfp" />
            <img src={star} alt="stars" className="rimage" />
          </div>
          <span>
            <b>Kofi E.</b>Austin, TX
          </span>
          <NavLink
            activeClassName="active"
            to="/services"
            style={{
              textDecoration: "none",
              color: "#063d74",
              fontWeight: "500",
            }}
          >
            Repair A Tile Roof{" "}
          </NavLink>
          <p>
            Jimmy did a great job identifying the cause of the leaking when he
            went to the attic. We set up an appointment for a time when it was
            not raining since the repair would be done at the roof. Jimmy and
            his associate came and repaired it. They asked me to let them know
            if the leaking does not stop completely. They did a great job. Will
            likely hire them again on future roofing problems.{" "}
          </p>
        </div>
        {/*When state === true more reviews are rendered */}
        {!this.state.isShow && (
          <div className="revb2">
            <div className="pics">
              <img src={pfp} alt="pfp" id="pfp" />
              <img src={star} alt="stars" className="rimage" />
            </div>
          </div>
        )}

        {this.state.isShow && (
          <div>
            {" "}
            <div className="revb">
              <div className="pics">
                <img src={pfp} alt="pfp" id="pfp" />
                <img src={star} alt="stars" className="rimage" />
              </div>
              <span>
                <b>Debra P.</b> Manchaca, TX
              </span>
              <NavLink
                activeClassName="active"
                to="/services"
                style={{
                  textDecoration: "none",
                  color: "#063d74",
                  fontWeight: "500",
                }}
              >
                Repair an Asphalt Shingle Roof{" "}
              </NavLink>
              <p>
                Jimmy was exceptional to work with today. He gave me in depth
                answers to all of my questions and was very professional. I
                wholeheartedly recommend this company!{" "}
              </p>
            </div>
            <div className="revb">
              <div className="pics">
                <img src={pfp} alt="pfp" id="pfp" />
                <img src={star} alt="stars" className="rimage" />
              </div>
              <span>
                <b>Terri K.</b>Kyle, TX
              </span>
              <NavLink
                activeClassName="active"
                to="/services"
                style={{
                  textDecoration: "none",
                  color: "#063d74",
                  fontWeight: "500",
                }}
              >
                Repair an Asphalt Shingle Roof{" "}
              </NavLink>
              <p>
                Jimmy and his son were wonderful.They completed job as discussed
                for the price agreed upon.{" "}
              </p>
            </div>
            <div className="revb">
              <div className="pics">
                <img src={pfp} alt="pfp" id="pfp" />
                <img src={star} alt="stars" className="rimage" />
              </div>
              <span>
                <b>Jessica E.</b>Austin, TX
              </span>
              <NavLink
                activeClassName="active"
                to="/services"
                style={{
                  textDecoration: "none",
                  color: "#063d74",
                  fontWeight: "500",
                }}
              >
                Repair an Asphalt Shingle Roof{" "}
              </NavLink>
              <p>
                Jimmy was very polite and professional. He repaired our roof for
                a reasonable price and with a very quick turnaround time. Highly
                recommend!{" "}
              </p>
            </div>
            <div className="revb">
              <div className="pics">
                <img src={pfp} alt="pfp" id="pfp" />
                <img src={star} alt="stars" className="rimage" />
              </div>
              <span>
                <b>George H.</b>Austin, TX
              </span>
              <NavLink
                activeClassName="active"
                to="/services"
                style={{
                  textDecoration: "none",
                  color: "#063d74",
                  fontWeight: "500",
                }}
              >
                Repair of a Tile Roof{" "}
              </NavLink>
              <p>
                Jimmy went well beyond his estimate by replacing additional roof
                tiles but still only charged me for the amount of his original
                quote.{" "}
              </p>
            </div>
            <div className="revb">
              <div className="pics">
                <img src={pfp} alt="pfp" id="pfp" />
                <img src={star} alt="stars" className="rimage" />
              </div>
              <span>
                <b>Paul B.</b>Austin, TX
              </span>
              <NavLink
                activeClassName="active"
                to="/services"
                style={{
                  textDecoration: "none",
                  color: "#063d74",
                  fontWeight: "500",
                }}
              >
                Repair an Asphalt Shingle Roof{" "}
              </NavLink>
              <p>
                Our house was hit by lightning blowing a hole in our roof.
                Can&apos;t say enough about Jimmy&apos;s professionalism and
                quality of the work he did, and at a very reasonable price!
                Highly recommend them for any roof repairs.{" "}
              </p>
            </div>
            <div className="revb">
              <div className="pics">
                <img src={pfp} alt="pfp" id="pfp" />
                <img src={star} alt="stars" className="rimage" />
              </div>
              <span>
                <b>John C.</b>Dripping Springs, TX
              </span>
              <NavLink
                activeClassName="active"
                to="/services"
                style={{
                  textDecoration: "none",
                  color: "#063d74",
                  fontWeight: "500",
                }}
              >
                Repair an Asphalt Shingle Roof{" "}
              </NavLink>
              <p>
                Jimmy was professional, fair and very proficient in his work.
                Recommend him for any roof work.{" "}
              </p>
            </div>
            <div className="revb">
              <div className="pics">
                <img src={pfp} alt="pfp" id="pfp" />
                <img src={star} alt="stars" className="rimage" />
              </div>
              <span>
                <b>James W.</b>JonesTown, TX
              </span>
              <NavLink
                activeClassName="active"
                to="/services"
                style={{
                  textDecoration: "none",
                  color: "#063d74",
                  fontWeight: "500",
                }}
              >
                Repair Extieror Trim{" "}
              </NavLink>
              <p>
                Jimmy and his team were excellent from the first free estimate.
                I received a written estimate with the exact work that would be
                done (house exterior wood and hardi-plank replacement for rotted
                wood). I asked for some extra work to be done. All work was
                completed was completed in the time estimate quoted. Work
                quality and value exceeded my expectations.{" "}
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
          {this.state.isShow ? "show less" : "show more"}
        </Button>
      </div>
    );
  }
}

export default Rev;
