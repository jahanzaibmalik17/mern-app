import React from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./HeaderSection.css";
const HeaderSection = () => {
  return (
    <React.Fragment>
      <Row>
        <Col lg={8}>
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
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Types of housing</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Stable</option>
                  <option>Meadow</option>
                  <option>Paddock Paradise</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Label>Keyword</Form.Label>
                <Form.Control placeholder="" />
              </Form.Group>

              <Form.Group as={Col} controlId="formBasicRangeCustom">
                <Form.Label>Radius</Form.Label>
                <Form.Control type="range" custom />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridAddress1">
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Vacancy Only"
                />
              </Form.Group>
              <Link to="/" className="px-4 py-2">Advance Search</Link>
              <Button size="sm" variant="warning">
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
