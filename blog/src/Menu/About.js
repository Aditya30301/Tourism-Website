import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";
// import { NavLink } from "react-router-dom";
//import { Carousel } from "react-bootstrap";
const About = () => {
  return (
    <>
      <Container style={{ justifyContent: "center" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#00e699",
            fontFamily: "revert",
            justifyContent: "center",
          }}
        >
          GET TO KNOW US
          <br />
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <a href="#" className="btnAB">
            Start Exploring
          </a>
        </h2>
        <hr />
        <h5 style={{ textAlign: "center", fontFamily: "revert" }}>
          Welcome to Andman <h5 style={{ color: "#00e699" }}>Emrald</h5> We are
          here to make your holidays in Andaman a Pleasent joyful experience
        </h5>
        <Container className="AboutBox">
          <h2 className="h1s">
            {" "}
            We provide you with the best experince of Andaman with precisely
            tailoured packages.
            <br /> Our highly professional guides make your visits
            Enjoyable,safe and Informative.
            <br />
            You Can Get Started with a Few Simple Steps
          </h2>
        </Container>
      </Container>
    </>
  );
};

export default About;
