import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import deals4UHomePage from "../../Assets/deals4UHomePage.png";
import samHomePage from "../../Assets/samAppHomePage.png";
import trackerPal from "../../Assets/trackerPal.png"
import yoloV8Demo from "../../Assets/yoloV8Demo.png"
import guess34 from "../../Assets/guess34.gif"
import airwebDigital from "../../Assets/airwebScreenshot.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" align="left" style={{ fontSize: "2.1em", paddingTop: "60px" , color: "white"}}>
          PROJECTS
        </h1>
        <p style={{ color: "grey" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={deals4UHomePage}
              isBlog={false}
              title="Deals4U"
              description="It is a coupon book that takes you directly to the site, with the deal ready for you to purchase. Deals get refreshed every 24 hours so you are never left with 'expired deals'. It is quick, easy and simple."
              ghLink="https://github.com/hs7825/CS490"
              demoLink="https://frontendtest-9f9b72d90005.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={samHomePage}
                isBlog={false}
                title="Segment Anything Model (SAM) for Sidewalks"
                description="This web application allows users to upload satellite images of sidewalks, which the application then processes to segment the sidewalk from the rest of the image. This tool is particularly useful for urban planning and accessibility assessments."
                demoLink="https://huggingface.co/spaces/hsaucedo/SAM_Sidewalks"
                youtubeLink="https://youtu.be/RYyMQVegqFs"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={trackerPal}
                isBlog={false}
                title="TrackerPal"
                description="This was one of my first full stack application's. It's purpose was to allow users to track  meals, nutrient and caloric intake as well as recipes."
                youtubeLink="https://youtu.be/SZWjG2UXxfw"
            />

          </Col>
        </Row>
        
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">  
            <ProjectCard
                  imgPath={yoloV8Demo}
                  isBlog={false}
                  title="YOLOV8 & Drone Footage"
                  description="Trained the YOLOV8 deep learning model to detect cyclists and cars from drone footage processed by OpenCV. Implemented algorithms that combine object detection and data association techniques when drawing reliable predictions using the Kalman Filter on objects with a CI >= 60. Won 1st place in academic competition where the model was measured on mitigating factors such as occlusion, motion blur, and changes in object appearance."
                  youtubeLink="https://youtube.com/shorts/iiujv2ZhiUM?feature=share"
                  youtubeLink2 = "https://youtu.be/trs8Twsw418"

              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                  imgPath={airwebDigital}
                  isBlog={false}
                  title="Drone2U"
                  description="During my internship at AIR WEB DIGITAL I started the creation of a mobile app to allow users to request a drone service. This is a demo I created in the early stages. "
                  youtubeLink="https://youtu.be/1E_gPjNnmnw"
              />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
                    imgPath={guess34}
                    isBlog={false}
                    title="Guess4/3"
                    description="Guess 4/3 is an android app that recreates a simple version of the popular word game Wordle. The most tedious part of building the application was getting the UI right. I am still familiarizing myself with the constraints so if they were not set right they would move all over the place when I ran on the emulator. I also noticed I needed to search a lot for ways to manipulate the button component so trying to remember that is definitely useful. Also, I need to write out the logic I want my app to have before actually coding. I found myself going back too much trying to understand why I did not receive my desired outcome."
                    ghLink="https://github.com/hs7825/Android_Development_Projects/blob/main/project1/README.md"
                    />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;