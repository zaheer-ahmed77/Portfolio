import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
  <p style={{ textAlign: "justify" }}>
    Hello! 👋 I am <span className="purple">Zaheer Ahmed</span> from <span className="purple">Hyderabad, Pakistan</span>. I am a passionate and driven Web Developer, currently pursuing a Software Engineering degree at Mehran University of Engineering and Technology (MUET). 
    <br />
    I specialize in the Fullstack, focusing on building dynamic, responsive, and high-performance web applications that solve real-world problems.
    <br />
    Additionally, I have a keen interest in Artificial Intelligence and continuously explore its innovative possibilities.
    <br />
    <br />
    Besides coding, I enjoy engaging in:
  </p>
  <ul>
    <li className="about-activity">
      <ImPointRight /> Playing Cricket
    </li>
    <li className="about-activity">
      <ImPointRight /> Content Creation
    </li>
    <li className="about-activity">
      <ImPointRight /> Traveling
    </li>
  </ul>

  <p style={{ color: "rgb(155 126 172)" }}>
    "Code with passion, create with purpose!"{" "}
  </p>
  <footer className="blockquote-footer">Zaheer</footer>
</blockquote>

      </Card.Body>
    </Card>
  );
}

export default AboutCard;