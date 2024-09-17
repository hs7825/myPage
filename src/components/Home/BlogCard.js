import React, { useState } from "react";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";
import { IoIosDocument } from "react-icons/io";


function BlogCard(props){
    const [expanded, setExpanded] = useState(false);
    
    const handleToggle = () => {
        setExpanded(!expanded);
      };

    return(
        <Container style={{paddingTop : 50}}>
        <Card className="project-card-view" onClick={handleToggle} style={{border : "white", cursor: "pointer", backgroundColor: '#838B90'}}>
            <Card.Title style={{color: "white", textAlign: "left", paddingTop: 10, paddingBottom: 5, paddingLeft: 5}}>{props.title}</Card.Title>
            {expanded && (
                <>
                <Card.Text style={{ textAlign: "justify" , color: "white", backgroundColor: '#8aa7b2'}}> {props.description}</Card.Text>
                <Button variant="primary" href={props.link} target="_blank" style={{ marginRight: "80px", marginLeft: "80px" }}>
                    <IoIosDocument /> &nbsp;
                    {"Read More"}
                </Button>
                </>
            )}
        </Card>
        </Container>
    )
}

export default BlogCard;