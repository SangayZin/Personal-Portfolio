import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF, FaGoogle } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Sangay Tenzin</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Sangay Tenzin</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/SangayZin"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              {/* Either add a valid LinkedIn URL or replace with button */}
              <button
                className="icon-button"
                style={{ 
                  color: "white", 
                  background: "none", 
                  border: "none",
                  padding: 0
                }}
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                <FaLinkedinIn />
              </button>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/sangs_zin?igsh=NWh5MXI0bGpkbTdm"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/share/1ByGdWFH6v/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="mailto:02230298.cst@rub.edu.bt"
                style={{ color: "white" }}
              >
                <FaGoogle />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;