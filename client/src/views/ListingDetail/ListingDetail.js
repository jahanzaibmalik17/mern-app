import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  Form,
  Container,
} from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import { listProductDetails } from "../../actions/listing";
import './ListingDetail.css'

const ListingDetail = ({ history, match }) => {
  const productId = match.params.id;

  const [imagesArray, setImagesArray] = useState("");

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (!product._id || product._id !== productId) {
      dispatch(listProductDetails(productId));
    } else {
      setImagesArray(product.imagesArray);
    }
  }, [dispatch, productId]);


  return (
    <>
      <Container className="list-detail">
        <Row>
          <Col lg={8} md={8} sm={12} xs={12}>
            <Card>
              <Col lg={12} md={12} sm={12} xs={12}>
                <Row>
                  <h1>Practical</h1>
                </Row>
                <Row>
                  <Col lg={8}>
                    <Row>
                      <Card.Title as="span">Availability</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">
                        {" "}
                        No, we still have a spot available!
                      </Card.Text>
                    </Row>
                  </Col>
                  <Col lg={4}>
                    <Row>
                      <Card.Title as="span">Ski Slope</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span"> Outdoor track</Card.Text>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col lg={8}>
                    <Row>
                      <Card.Title as="span">Grazing</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">
                        2 hours/day of possible grazing
                      </Card.Text>
                    </Row>
                  </Col>
                  <Col lg={2}>
                    <Row>
                      <Card.Title as="span">Storage</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">
                      Saddle box
                      </Card.Text>
                    </Row>
                  </Col>
                  <Col lg={2}>
                    <Row>
                      <Card.Title as="span">Care</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">
                      Laundry room
                      </Card.Text>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Row>
                      <Card.Title as="span">Cafetaria</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">Possibility to eat</Card.Text>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Card.Title as="span">Discipline</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">Breeding</Card.Text>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Card.Title as="span">Offer</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">
                        Group lessons equestrian center horses
                      </Card.Text>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Card>
          </Col>
        </Row>


        <Row className="pt-5">
          <Col lg={8} md={8} sm={12} xs={12}>
            <Card>
              <Col lg={12} md={12} sm={12} xs={12}>
                <Row>
                  <h1>Extra Info</h1>
                </Row>
                <Row>
                  <Col lg={3}>
                    <Row>
                      <Card.Title as="span">Feed</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">
                        {" "}
                        2 times/day
                      </Card.Text>
                    </Row>
                  </Col>
                  <Col lg={3}>
                    <Row>
                      <Card.Title as="span">Bedding</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">Straw</Card.Text>
                    </Row>
                  </Col>
                  <Col lg={6}>
                    <Row>
                      <Card.Title as="span">Does the customer manure themselves?</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">No</Card.Text>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <Col >
                    <Row>
                      <Card.Title as="span">Facebook</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">
                      <i class="fa fa-facebook" aria-hidden="true"></i>www.facebook.com/mijinpaardzoekt
                      </Card.Text>
                    </Row>
                  </Col>
    
                </Row>

                <Row>
                  <Col>
                    <Row>
                      <Card.Title as="span">Bedding</Card.Title>
                    </Row>
                    <Row>
                      <Card.Text as="span">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</Card.Text>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ListingDetail;
