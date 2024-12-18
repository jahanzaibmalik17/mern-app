import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Col,
  Row,
  Form,
  Button,
  Image,
  Container,
  Tabs,
  Tab,
  Card,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { listProducts } from "../../actions/listing";
import "./AdvanceListing.css";
const HeaderSection = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;
  const [make, setMake] = useState("");
  const [year, setYear] = useState("");
  const [model, setModel] = useState("");

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(make, model, year, pageNumber));
  }, [dispatch, history, pageNumber]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(listProducts(make, model, year, pageNumber));
  };
  

  return (
    <Container>
      <Row>
        <Col lg={3} className="section">
          <Form className="form" onSubmit={submitHandler}>
            <h1>Refine search results</h1>

            <Form.Group controlId="model">
              <Form.Label>Make</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Model"
                value={make}
                onChange={(e) => setMake(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="model">
              <Form.Label>Model</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Row>
              <Button size="sm" variant="warning" id="search-btn" type="submit">
                Search
              </Button>
            </Form.Row>
          </Form>
        </Col>

        <Col lg={9} className="tabs">
          {/* <Row lg={3} md={3} sm={6} xs={6}>
            Search Results{" "}
            <span className="font-weight-bold">“Netherlands”</span> 34 listings
            found.
          </Row> */}

          <Tabs
            defaultActiveKey="list"
            id="uncontrolled-tab-example"
            className="mb-3"
            lg={3}
            md={3}
            sm={6}
            sx={6}
          >
            <Tab
              eventKey="list"
              title={
                <span>
                  <i className="fa fa-list-ul" aria-hidden="true"></i>
                </span>
              }
            >
              <Row className="list-view">
                {products &&
                  products.map((product) => (
                    <Col key={product._id} lg={12} md={12} sm={12} xs={12}>
                      <Card className="product-card">
                        <Row>
                          <Col lg={3} md={3} sm={6} xs={6}>
                            <Image
                              className="product-image"
                              src={product.imagesArray[0]}
                              variant="top"
                              fluid
                            />
                          </Col>

                          <Col lg={3} md={3} sm={4} xs={4}>
                            <Row>
                              <Card.Title as="span" className="card-name">
                                {product.name}
                              </Card.Title>
                            </Row>

                            <Row>
                              <Card.Text as="span" className="card-description">
                                {product.description}
                              </Card.Text>
                            </Row>
                          </Col>
                          <Col lg={6} md={6} sm={2} xs={2} className="">
                            <Row>
                              <Card.Text as="span" className="card-type">
                                <i
                                  className="far fa-heart"
                                  style={{
                                    float: "right",
                                    marginTop: "15px",
                                    marginRight: "13px",
                                  }}
                                ></i>
                              </Card.Text>
                            </Row>
                            <Row>
                              <Card.Text as="span" className="card-description">
                                {product.housingType}
                              </Card.Text>
                            </Row>
                          </Col>
                        </Row>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Tab>
            <Tab
              eventKey="grid"
              title={
                <span>
                  <i className="fa fa-th-large" aria-hidden="true"></i>
                </span>
              }
            >
              <Row className="grid-view">
                {products &&
                  products.map((product) => (
                    <Col key={product._id} lg={4} md={8} sm={12} xs={12}>
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
                          <Card.Title as="span" className="card-name">
                            {product.name}
                          </Card.Title>
                          <Card.Text as="span" className="card-description">
                            {product.description}
                          </Card.Text>
                        </Card.Body>
                        <Card.Body>
                          <Card.Text as="span" className="card-type">
                            {product.housingType}
                            <i
                              className="far fa-heart"
                              style={{ float: "right" }}
                            ></i>
                          </Card.Text>
                          <Card.Text as="span"></Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderSection;
