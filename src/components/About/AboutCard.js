import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="orange">Priya Bhondwe </span>
            from <span className="orange"> Pune, India.</span>
            <br />
            I am currently employed as a Frontend developer at Cognizant.
            <br />
            I have completed Bachelor Of Engineering (BE) in Information
            Technology at BVCOEW.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs And Fiction Story
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Story
            </li>
          </ul>

          <p style={{ color: "rgb(255, 213, 128)" }}>
            "Focus on creating solutions that leave a lasting impact!"{" "}
          </p>
          <footer className="blockquote-footer">Priya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
