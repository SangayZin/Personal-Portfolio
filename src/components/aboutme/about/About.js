import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                Hi, I’m <b className="purple">Sangay Tenzin</b>, a passionate
                and dedicated <b className="purple">Software Engineering student</b> at the{" "}
                <b className="purple">College of Science and Technology</b> in
                Rinchending, Phuentsholing.
                <br />
                <br />
                I have a strong interest in <b className="purple">web development</b>,{" "}
                <b className="purple">artificial intelligence</b>, and{" "}
                <b className="purple">database engineering</b>, and I enjoy
                exploring how technology can solve real-world problems and
                improve user experiences.
                <br />
                <br />
                I am familiar with programming languages such as{" "}
                <b className="purple">
                  C, C++, Java, Python, HTML, CSS, PHP, and JavaScript.
                </b>{" "}
                I’ve also worked with frameworks and libraries including{" "}
                <b className="purple">
                  React.js, Node.js, OpenCV, Pandas, and NumPy.
                </b>
                <br />
                <br />
                I'm currently looking for internship opportunities where I can
                apply my skills, learn from experienced professionals, and
                contribute to meaningful projects. I'm always excited to explore
                new technologies and build innovative products that make a
                difference.
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
