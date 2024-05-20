import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import PRImage from "../../Assets/prBeach.jpeg";
import beachImage from "../../Assets/beachSunset.jpeg"
import TrafficLights from "../../Assets/trafficCircuit.MOV"

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
        <Col md={5}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              A little bit about me ...
            </h1>
            <Aboutcard />
          </Col>
          <Col md={7} style={{ paddingTop: 60 }}>
            <Row>
              <Col md={6}>
                <img
                  src={beachImage}
                  alt="Pyramids in Mexico"
                  className="img-fluid"
                  style={{ maxHeight: "250px", width: "100%" }}
                />
              </Col>
              <Col md={6}>
                <img
                  src={PRImage}
                  alt="Beach in Puerto Rico"
                  className="img-fluid"
                  style={{ maxHeight: "250px", width: "100%" }}
                />
              </Col>
            </Row>
            <Row>
                <video 
                  src={TrafficLights} 
                  controls 
                  autoPlay 
                  muted 
                  style={{ width: "100%", height: "auto" }}  // This will make the video responsive
                />
            </Row>
          </Col>

        </Row>

      </Container>
    </Container>
  );
}

export default About;
