import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import hotel from "../../Assets/Projects/hotel.png";
import Luxe from "../../Assets/Projects/Luxe Gleam.png";
import tourist from "../../Assets/Projects/tourist.png";
import figma from "../../Assets/Projects/figma-e-commerce.png";
import foodPortal from "../../Assets/Projects/Supplier Food Safety Query portal.png";

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
              isBlog={false}
              imgPath={tourist}
              title="Tourist Website"
              description="Tourist Guide is a web (or mobile-responsive) frontend application aimed at helping travelers explore destinations, plan itineraries, and discover points of interest. It acts as the user-facing interface for a larger tourism platform."
              demoLink="https://triptastic-pune.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={foodPortal}
              title="Supplier Food Safety Query Portal — UX/UI Design"
              description="The Supplier Food Safety Query Portal is a web-based platform designed to streamline communication and compliance between suppliers and quality teams within the food industry. This portal enables suppliers to submit food safety queries, upload documentation, track query status, and receive updates in a clear, intuitive interface — improving transparency and reducing compliance delays. The design process involved understanding supplier workflows, defining pain points in food safety documentation, and creating an interactive Figma that balances usability and regulatory requirements."
              demoLink="https://www.figma.com/design/ikgcVoww23AyKz4VnsBVxb/Supplier-Food-Safety-Query-Portal?node-id=1-5&p=f"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              imgPath={figma}
              title="Responsive E-Commerce Website UI/UX Design (Figma Prototype)"
              description="Designed a modern, responsive e-commerce interface using Figma, focusing on intuitive navigation, clean layout, and engaging product presentation.The prototype includes key user flows such as homepage browsing, product details, cart, and checkout. Emphasized usability, consistency in design elements, and mobile-friendly layouts to enhance user experience."
              demoLink="https://www.figma.com/proto/wdOoSL72wVKe8LfWPzpMRd/Untitled?node-id=177-123&t=qPIGgDJs5UgAWUeS-1&starting-point-node-id=165%3A10"
            />
          </Col>
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
              imgPath={Luxe}
              title="Luxe Gleam"
              description="Luxe Gleam is a web application for managing and showcasing jewelry collections, built with modern web technologies. It provides both a customer-facing storefront and an admin panel for managing product listings, categories, inventories, and orders."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
