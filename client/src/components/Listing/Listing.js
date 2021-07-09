import React from "react";
import { Link } from "react-router-dom";
import { Row, Card, Col, Image, Container } from "react-bootstrap";
import "./Listing.css";

const Listing = ({ products }) => {
  return (
    <Container fluid>
      <Col className="listing-comp pt-5">
        <h1>Find Spaces that suit your horse</h1>
        <p>
          Our unique algorithm helps you find the best natural environment for
          your horse.
        </p>
        <Row>
          {products &&
            products.map((product) => (
              <Col key={product._id} lg={3} md={6} sm={12} xs={12}>
                <Card className="product-card">
                  <Link to="/">
                    <Image
                      className="product-image"
                      src={product.imagesArray[0]}
                      variant="top"
                      fluid
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title as="div" className="card-name">
                      {product.name}
                    </Card.Title>
                    <Card.Text as="div" className="card-description">
                      {product.description}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body>
                    <Card.Text as="div" className="card-type">
                      {product.housingType}
                      <i
                        className="far fa-heart"
                        style={{ float: "right" }}
                      ></i>
                    </Card.Text>
                    <Card.Text as="div"></Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
        <Col className="text-center">
         
        </Col>
      </Col>
    </Container>
  );
};

export default Listing;
