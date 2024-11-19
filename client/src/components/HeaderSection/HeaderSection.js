import React from "react";
import { Col, Row } from "react-bootstrap";
import "./HeaderSection.css";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
const HeaderSection = () => {
  return (
    <React.Fragment>
      <Row className="header-section">
        <Col lg={8}>
          <Col className="header-image">
          </Col>
          <Row>
            {" "}
            <Col lg={6}>
              <h1>
                find your car a better{" "}
                <span style={{ color: "#FBCB51" }}>/</span> more Natural living.
              </h1>
              <p>
                Our unique algorithm helps you find the best car
                for you.
              </p>
            </Col>
          </Row>
          
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HeaderSection;
