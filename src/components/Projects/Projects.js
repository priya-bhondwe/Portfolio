import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/hotel.png";
import Luxe from "../../Assets/Projects/Luxe Gleam.png";
import tourist from "../../Assets/Projects/tourist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel Order"
              description="Hotel Order is a dynamic web application that streamlines in-hotel food service: customers or waitstaff place orders from tablets or mobile devices at the table, while kitchen staff manage, accept, and update order status in real time. The system reduces service latency, prevents miscommunication, and gives managers live insights into kitchen throughput and sales"
              ghLink="https://github.com/priya-bhondwe/Hotel-Order.git"
              demoLink="https://hotel-order.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={Luxe}
              title="Luxe Gleam"
              description="Luxe Gleam is a web application for managing and showcasing jewelry collections, built with modern web technologies. It provides both a customer-facing storefront and an admin panel for managing product listings, categories, inventories, and orders."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={tourist}
              title="Tourist Website"
              description="Tourist Guide is a web (or mobile-responsive) frontend application aimed at helping travelers explore destinations, plan itineraries, and discover points of interest. It acts as the user-facing interface for a larger tourism platform."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
