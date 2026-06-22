import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="orange">Priya Bhondwe</span>
            from <span className="orange">Pune, India.</span>
            <br />
            I have recently completed my Bachelor of Engineering (BE) in
            Information Technology at BVCOEW.
            <br />I am passionate about{" "}
            <span className="orange">Frontend Development</span>
            and enjoy building interactive and user-friendly web applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs and Fiction Stories
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Novels and Stories
            </li>
          </ul>

          <p style={{ color: "rgb(255, 213, 128)" }}>
            "Eager to learn, build, and grow as a developer while making a
            positive impact!"
          </p>
          <footer className="blockquote-footer">Priya</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
