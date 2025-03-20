import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/avatar.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I have a strong passion for programming and have gained a solid understanding of various concepts along the way. 🚀
              <br />
              <br />
              My expertise includes:
              <i>
                <b className="purple"> JavaScript, HTML, CSS, JavaScript Frameworks, JavaScript Technologies, and Java </b>
              </i>
              <br />
              <br />
              I love working on innovative &nbsp;
              <i>
                <b className="purple">Web Technologies and Products</b> and have a keen interest in{" "}
                <b className="purple">Artificial Intelligence (AI)</b>.
              </i>
              <br />
              <br />
              Whenever possible, I channel my passion into building products using <b className="purple">Node.js</b> along with
              <i>
                <b className="purple"> modern JavaScript libraries and frameworks</b>
              </i>
              &nbsp; such as
              <i>
                <b className="purple"> React.js and Next.js</b>.
              </i>
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
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">reach out</span> and connect with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/zaheer-ahmed77"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/zaheer-ahmed77/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
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
