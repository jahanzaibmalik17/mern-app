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
  const [housingType, setHousingType] = useState("stable");
  const [imagesArray, setImagesArray] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.userLogin.userInfo);
  if (!userInfo) {
    history.push("/login");
  }

  // const productDetails = useSelector((state) => state.productDetails);
  // console.log('productDetails', productDetails)
  // const { loading, error, product } = productDetails;
  // const productCreate = useSelector((state) => state.productCreate);
  // const {
  //   loading: loadingCreate,
  //   error: errorCreate,
  //   success: successCreate,
  //   product: createdProduct,
  // } = productCreate;

  // useEffect(() => {
  //   if (successCreate) {
  //     dispatch({ type: PRODUCT_CREATE_RESET });
  //     history.push("/");
  //   } else {
  //     setName(product.name);
  //     setHousingType(product.housingType);
  //     setImagesArray(product.imagesArray);
  //     setDescription(product.description);
  //   }
  // }, [dispatch, history, product, successCreate, createdProduct]);

  const handleHousingType = (e) => {
    setHousingType(e.target.value);
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
        housingType,
        imagesArray,
        description,
      })
    );
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center listing-form">
          <Col xs={12} md={6}>
            <h1>Add Listing</h1>
            {/* {loadingCreate && <Loader />}
            {errorCreate && <Message variant="danger">{errorCreate}</Message>}
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : ( */}
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

                <Form.Group controlId="housingType">
                  <Form.Label>Type of housing</Form.Label>
                  <Form.Control onChange={handleHousingType} as="select">
                    <option value="stable">Stable</option>
                    <option value="meadow">Meadow</option>
                    <option value="paddockParadise">Paddock Paradise</option>
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
                  {/* <Form.Control
                  type="file"
                  id="image-file"
                  label="Choose File"
                  custom
                  onChange={uploadFileHandler}
                  multiple
                ></Form.Control> */}
                </Form.Group>

                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Button type="submit" size="lg" id="add-listing-btn">
                  Add
                </Button>
              </Form>
            {/* )} */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddListingScreen;
