import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Card, Col, Image, Button, Container } from "react-bootstrap";
import productImage from "../../images/brown-horse-pasture-mountains-morning-1@2x.png";
import "./Property.css";
const Property = () => {
  return (
    <Container fluid>
    <Col className="property-comp pt-5">
      <h1>Featured Listings</h1>
      <p>
        Our unique algorithm helps you find the best natural environment for
        your horse.
      </p>
      <Row>
        <Col lg={3} md={3} sm={12} xs= {12}>
          <Card className="product-card">
            <Link>
              <Image
                className="product-image"
                src={productImage}
                variant="top"
                fluid
              />
            </Link>
            <Card.Body>
              <Card.Title as="div" className="card-name">
                Renting House 
              </Card.Title>
              <Card.Text as="div" className="card-description">
                Renting House for your horse
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text as="div" className="card-type">
              Meadow
                <i className="far fa-heart" style={{ float: "right" }}></i>
              </Card.Text>
              <Card.Text as="div"></Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={3} sm={12} xs= {12}>
          <Card className="product-card">
            <Link>
              <Image
                className="product-image"
                src={productImage}
                variant="top"
                fluid
              />
            </Link>
            <Card.Body>
              <Card.Title as="div" className="card-name">
                Your horse dream house
              </Card.Title>
              <Card.Text as="div" className="card-description">
                Your horse dream house
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text as="div" className="card-type">
                Meadow
                <i className="far fa-heart" style={{ float: "right" }}></i>
              </Card.Text>
              <Card.Text as="div"></Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={3} sm={12} xs= {12}>
          <Card className="product-card">
            <Link>
              <Image
                className="product-image"
                src={productImage}
                variant="top"
                fluid
              />
            </Link>
            <Card.Body>
              <Card.Title as="div" className="card-name">
                Second Home for your horse
              </Card.Title>
              <Card.Text as="div" className="card-description">
                Oosterwolde, Netherlands
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text as="div" className="card-type">
                Stable
                <i className="far fa-heart" style={{ float: "right" }}></i>
              </Card.Text>
              <Card.Text as="div"></Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={3} md={3} sm={12} xs= {12}>
          <Card className="product-card">
            <Link>
              <Image
                className="product-image"
                src={productImage}
                variant="top"
                fluid
              />
            </Link>
            <Card.Body>
              <Card.Title as="div" className="card-name">
                Second Home for your horse
              </Card.Title>
              <Card.Text as="div" className="card-description">
                Oosterwolde, Netherlands
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Card.Text as="div" className="card-type">
                Stable
                <i className="far fa-heart" style={{ float: "right" }}></i>
              </Card.Text>
              <Card.Text as="div"></Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Col className="text-center">
        <Button type="button" className="featured-btn">Explore all featured</Button>
      </Col>
    </Col>
    </Container>
  );
};

export default Property;
