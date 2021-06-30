import React from "react";
import { Col, Row } from "react-bootstrap";
import "./HeaderSection.css";
import headerImage from "../../images/brown-horse-pasture-mountains-morning-1.png";
const HeaderSection = () => {
  return (
      <Row className="section-header">
        <Col lg={4}>
          <p className="paragraph">
            find your horse a better / more Natural living.
          </p>
          <p className="section-p-2">
            Our unique algorithm helps you find the best natural environment for
            your horse.
          </p>
        </Col>
        <Col lg={7} className="image-section">
          <img className="header-image" src={headerImage} alt="test.jpg" />
        </Col>
      </Row>
  );
};

export default HeaderSection;
