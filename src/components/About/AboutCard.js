import React from "react";
import Card from "react-bootstrap/Card";
import { CgGym } from "react-icons/cg";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaWrench } from "react-icons/fa";



function AboutCard() {
  return (
    <Card className="quote-card-vie" style={{ backgroundColor: '#838B90' }}>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", color : "white" }}>
            I am Hector,
            <br />
            <br />
            A senior student graduating with a B.S in Computer Science and a minor in Information Technology. For a few years I have been coding and dipping my hands or should I say "keys" into internship work and personal projects of my interest. 
            <br />
            <br />
            <br />
            My other hobbies include :
          </p>
          <p>
            <p className="about-activity">
              <CgGym /> Hitting the gym
            </p>
            <p className="about-activity">
              <FaMoneyBillTrendUp /> Personal Finance
            </p>
            <p className="about-activity">
              <GiCommercialAirplane /> Travelling
            </p>
            <p className="about-activity">
              <FaWrench /> Incorpotating technology into my life
            </p>
          </p>

          <p style={{ color: "red" }}>
            "Sometimes You Gotta Run Before You Can Walk."{" "}
          </p>
          <footer className="blockquote-footer">Stark</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;