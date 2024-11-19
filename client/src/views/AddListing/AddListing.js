import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { createProduct } from "../../actions/listing";
import { PRODUCT_CREATE_RESET } from "../../constants/productConstants";
import "./AddListing.css";

const AddListingScreen = ({ match, history }) => {
  const [name, setName] = useState("");
  const [make, setMake] = useState("honda");
  const [imagesArray, setImagesArray] = useState("");
  const [year, setYear] = useState("");
  const [uploading, setUploading] = useState(false);
   const [model, setModel] = useState("");
  const [vin, setVin] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [shippingStatus, setShippingStatus] = useState(true);

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userLogin.userInfo);
  if (!userInfo) {
    history.push("/login");
  }

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;



  const handleMake = (e) => {
    setMake(e.target.value);
  };

  const uploadFileHandler = async (e) => {
    const files = e.target.files;
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append(`imagesArray`, files[i]);
    }
    setUploading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post("/api/upload", formData, config);

      setImagesArray(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct({
        name,
        make,
        imagesArray,
        model,
        year,
        vin,
        keyword,
        shippingStatus
      })
    );
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center listing-form">
          <Col xs={12} md={6}>
            <h1>Add Listing</h1>
            {loadingCreate && <Loader />}
            {errorCreate && <Message variant="danger">{errorCreate}</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Form onSubmit={submitHandler}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="make">
                  <Form.Label>Type of Car</Form.Label>
                  <Form.Control onChange={handleMake} as="select">
                    {/* <option></option> */}
                    <option value="honda">Honda</option>
                    <option value="suzuki">Suzuki</option>
                    <option value="toyota">Toyota</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="imagesArray">
                  <Form.Label>Image</Form.Label>
                  <Form.File
                    id="image-file"
                    label="Choose File"
                    custom
                    onChange={uploadFileHandler}
                    multiple
                  ></Form.File>
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

                <Form.Group controlId="keyword">
                  <Form.Label>Keyword</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Keyword"
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="vin">
                  <Form.Label>VIN</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter VIN"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                 <Form.Group controlId="shipping_status">
                  <Form.Check type="checkbox" label="shippingStatus" checked={shippingStatus}  onChange={(e) => setShippingStatus(e.target.checked)}/>
                </Form.Group> 

                <Button type="submit" size="lg" id="add-listing-btn">
                  Add
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddListingScreen;
