import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="orange"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate Frontend Developer continue to explore ways of
              building impactful digital products.
              <br />
              <br />I am strong expertise like
              <i>
                <b className="orange">
                  {" "}
                  React.js, JavaScript (ES6+), HTML5, CSS3,
                </b>
              </i>
              <br />
              <br />
              Skilled in building &nbsp;
              <i>
                <b className="orange">
                  scalable, responsive, and user-friendly web applications,
                  integrating modern UI/UX design practices
                </b>
                &nbsp; using &nbsp;
                <b className="orange">
                  Figma, Material UI, Ant Design, and Bootstrap
                </b>{" "}
                Experienced in
                <b className="orange"> Performance optimization</b>
              </i>
              &nbsp; (lazy loading, image optimization, efficient state
              management) and
              <b className="orange"> Agile collaboration.</b>
              <br />
              <br />
              Passionate about developing modern web technologies
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="orange">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/priya-bhondwe"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/priya-b-b52042196/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
