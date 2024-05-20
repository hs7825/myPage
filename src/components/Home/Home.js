import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Type from "./Type";
import Bob from "../../Assets/transparentBobTheBuilder.png"
import BlogCard from "./BlogCard"


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
            
              <BlogCard
              title="Adding mailing list to Deals4U"
              description='Due to the nature of the application being a "coupon book" I wanted to retain user attention through the popular method of a mailing list.'
              />
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