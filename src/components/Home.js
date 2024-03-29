import React, { Component } from "react";
import title from "./images/title.png";
import "./css/home.css";
import Email from "./cards/Email";
import { useSpring, animated as a } from 'react-spring'
import Footer from "./Footer";

function Card() {
  const props = useSpring({
    to: { opacity: 1, y:0 },
    from: { opacity: 0, y:150 },
    delay: 500,
  })

  return  <a.div style={props} className="coverText">
  <h1>Professional and Reliable Roofing Contractors</h1>
  <span>
    We are a family owned business with over 44 years of experience.
    We strive to provide only the most exceptional service to ensure
    customer satisfaction.
  </span>
</a.div>
}


function Contact() {
  const props = useSpring({
    to: { opacity: 1, y:0 },
    from: { opacity: 0, y:150 },
    delay: 1200,
  })

  return <a.div style={props} className="homeContact">
  <Email />
  <div className="coverText2">
    <h2>Dedicated To Costumer Satisfaction</h2>
    <br />
    <span className="endSpan">
      When you want affordable roofing services from a locally-owned and
      -operated company, Call Arbitor Roofing. We’re licensed and
      insured, and We offer complete residential and commercial roofing
      services throughout Texas.
    </span>
    <br />
    <span className="endSpan">
      Contact us today at <b>(512) 845-5283</b> or fill out the form.
      Thank you.
    </span>
  </div>
</a.div>
}


class Home extends Component {
  render() {

    return (
      <div className="homeContainer">
        <div className="title">
          <img src={title} alt="title" className="titleImg" />
        </div>
        <div className="homeCover">
          <div className="homeImg"/>
         <Card />
        </div>
        <Contact />

        <div className="valueCover">
          <span className="valueText" style={{ fontSize: "2.1em", fontWeight:"600", textAlign:'left'}}>
            Adding Home Value & Protection
          </span>
          <div className="valueDesc">
          <span className="valueText">
         DURABLE
          </span>
          <span className="valueText">
         LONG LASTING
          </span>
          <span className="valueText">
         COST EFFICIENT
          </span>
          </div>
        </div>
        <div className="homeEnd">
        <div className="coverText3">
        <h3>A Reliable Team That Ensures A Reliable Roof</h3>
            <span className="endSpan">
            When you need trusted and affordable roofing services, look no further than Arbiter Roofing Company.<br/> <br/>
            No matter what you need, our team can handle it. Contact Arbiter Roofing Company today for emergency roofing services in Austin.
            </span>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
