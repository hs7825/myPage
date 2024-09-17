import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import Bob from "../../Assets/transparentBobTheBuilder.png"
import BlogCard from "./BlogCard"
import Card from 'react-bootstrap/Card';


function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Building w/
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> Hector Saucedo 👋🏻</strong>
              </h1>

              <Col md={6} className="project-card" style={{textAlign : "center"}}>
              
              <Card style={{width: 155, backgroundColor: '#4c6872'}}>
                <Card.Title style = {{textAlign : 'center', paddingLeft: 5, paddingTop: 5, color: 'white'}}> Latest Posts </Card.Title>
              </Card>

              <Container style={{marginTop : 10}}>
                <Card style={{width: 600, backgroundColor: '#4c6872'}}>
                  <Card.Title style = {{textAlign : 'left', paddingLeft: 20, paddingTop: 20, color: 'white'}}> Wordle on Android </Card.Title>
                  <Card.Body  style = {{textAlign : 'left', paddingLeft: 20,  color: 'white'}}>September 11, 2024</Card.Body>
                </Card>
              </Container>

              

              </Col>

            </Col>



            <Col md={5} style={{ paddingTop:60 ,paddingBottom: 20 }}>
              <img
                src = {Bob}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              <div style={{ padding: 50, textAlign: "right" }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;