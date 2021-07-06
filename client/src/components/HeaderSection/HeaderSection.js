import React from "react";
import { Col, Row, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HeaderSection.css";
import headerImage from '../../images/brown-horse-pasture-mountains-morning-1 (1).png'
const HeaderSection = () => {
  return (
    <React.Fragment>
      <Row className="header-section">
        <Col lg={8}>
          <Col className="header-image">
              {/* <Image src={headerImage}  /> */}
          </Col>
          <Row>
            {" "}
            <Col lg={6}>
              <h1>find your horse a better / more Natural living.</h1>
              <p>
                Our unique algorithm helps you find the best natural environment
                for your horse.
              </p>
            </Col>
          </Row>
          <Form className="form">
            <Form.Row className="location">
              <Col lg={4} md={6} sm={6} xs={12}>
                <Form.Group
                  className="location-col"
                  as={Col}
                  controlId="formGridEmail"
                >
                  <Form.Label>Location</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </Col>
              <Col lg={4} md={6} sm={6} xs={12}>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Control
                    as="select"
                    defaultValue=""
                    className="housing-type-select"
                  >
                    <option>Type of housing</option>
                    <option>Stable</option>
                    <option>Meadow</option>
                    <option>Paddock Paradise</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row className="keyword">
              <Col lg={4}>
                <Form.Group
                  className="keyword-col"
                  as={Col}
                  controlId="formGridAddress1"
                >
                  <Form.Label>Keyword</Form.Label>
                  <Form.Control placeholder="" />
                </Form.Group>
              </Col>
              <Col lg={8}>
                <Form.Group as={Col} controlId="formBasicRangeCustom">
                  <Form.Label>Radius</Form.Label>
                  <Form.Control type="range" custom />
                </Form.Group>
              </Col>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Vacancy Only"
                />
              </Form.Group>
              <Link to="/" className="px-4 py-2" id="advance-search-btn">
                Advance Search
              </Link>
              <Button size="sm" variant="warning" id="search-btn">
                Search
              </Button>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default HeaderSection;
