import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Zaheer Ahmed</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Zaheer</h3>
        </Col>
        <Col md="4" className="footer-body">
  <ul className="footer-icons">
    <li className="social-icons">
      <a
        href="https://github.com/zaheer-ahmed77"
        style={{ color: "white" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillGithub />
      </a>
    </li>
    <li className="social-icons">
      <a
        href="https://www.linkedin.com/in/zaheer-ahmed77/"
        style={{ color: "white" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedinIn />
      </a>
    </li>
    {/* LeetCode Icon */}
    <li className="social-icons">
      <a
        href=""
        style={{ color: "white" }}
        target="_blank"
        rel="noopener noreferrer"
      >

        <SiLeetcode />
      </a>
    </li>
  </ul>
</Col>

      </Row>
    </Container>
  );
}

export default Footer;
