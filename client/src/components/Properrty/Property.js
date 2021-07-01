import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Card, Col, Image } from "react-bootstrap";
import productImage from "../../images/brown-horse-pasture-mountains-morning-1.png";
import "./Property.css";
const Property = () => {
  return (
    <Row className="property-comp pt-5">
      <h1>Featured Listings</h1>
      <p>
        Our unique algorithm helps you find the best natural environment for
        your horse.
      </p>
      <Col lg={3}>
        <Card className="product-card">
          <Link>
            <Image
              className="product-image"
              src={productImage}
              variant="top"
            />
          </Link>
          <Card.Body>
            <Link>
              <Card.Title as="div">Stable</Card.Title>
            </Link>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3}>
        <Card className="product-card">
          <Link>
            <Image
              className="product-image"
              src={productImage}
              variant="top"
            />
          </Link>

          <Card.Body>
            <Link>
              <Card.Title as="div">Stable</Card.Title>
            </Link>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3}>
        <Card className="product-card">
          <Link>
            <Image
              className="product-image"
              src={productImage}
              variant="top"
            />
          </Link>
          <Card.Body>
            <Link>
              <Card.Title as="div">Stable</Card.Title>
            </Link>
          </Card.Body>
        </Card>
      </Col>

      <Col lg={3}>
        <Card className="product-card">
          <Link>
            <Image
              className="product-image"
              src={productImage}
              variant="top"
            />
          </Link>
          <Card.Body>
            <Link>
              <Card.Title as="div">Stable</Card.Title>
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Property;
