import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
import { listProductDetails, updateProduct } from "../../actions/listing";
import { PRODUCT_UPDATE_RESET } from "../../constants/productConstants";
import './EditListing.css'

const ProductEditScreen = ({ match, history }) => {
  const productId = match.params.id;

  const [name, setName] = useState("");
  const [housingType, setHousingType] = useState("");
  const [imagesArray, setImagesArray] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [vacant, setVacant] = useState(true);

  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      history.push("/admin/listing");
    } else {
      if (!product.name || product._id !== productId) {
        dispatch(listProductDetails(productId));
      } else {
        setName(product.name);
        setHousingType(product.housingType);
        setImagesArray(product.imagesArray);
        setDescription(product.description);
        setLocation(product.location);
        setRadius(product.radius);
        setKeyword(product.keyword);
        setVacant(product.vacant);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

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
      updateProduct({
        _id: productId,
        name,
        housingType,
        imagesArray,
        description,
        location,
        radius,
        keyword,
        vacant
      })
    );
  };

  return (
    <>
      <Container>
        <Row className="justify-content-md-center listing-form">
          <Col xs={12} md={6}>
            <h1>Edit Product</h1>
            {loadingUpdate && <Loader />}
            {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
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

                <Form.Group controlId="housingType">
                  <Form.Label>Type of housing</Form.Label>
                  <Form.Control onChange={handleHousingType} as="select">
                    {/* <option></option> */}
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
                </Form.Group>

                <div className="col-sm-12">
                  <div id="product-images">
                    <h2>Product images</h2>
                    <div className="row">
                      {imagesArray &&
                        imagesArray.map((image, key) => (
                          
                          <div className="col-sm-3" key={key}>
                            {/* <p>
                              <a
                                data-id={image}
                                className="btn-delete-image btn btn-outline-danger"
                              >
                                delete
                              </a>
                              {console.log(image)}
                              <span className="label label-info"></span>

                              <a
                                data-id={image}
                                className="set-as-main-image btn btn-outline-success"
                              >
                                set main
                              </a>
                            </p> */}
                            <img
                              src={image}
                              className="product-edit-image img-fluid"
                            />
                          </div>
                        ))}
                    </div>
                    <h4 className="text-warning"></h4>
                  </div>
                </div>

                <Form.Group controlId="location">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="radius">
                  <Form.Label>Radius</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter Radius"
                    value={radius}
                    onChange={(e) => setRadius(e.target.value)}
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

                <Form.Group controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="vacant">
                  <Form.Check type="checkbox" label="Vacant" checked={vacant}  onChange={(e) => setVacant(e.target.checked)}/>
                </Form.Group>

                {/* <Form.Group controlId="image">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter image url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  ></Form.Control>
                  <Form.File
                    id="image-file"
                    label="Choose File"
                    custom
                    onChange={uploadFileHandler}
                  ></Form.File>
                  {uploading && <Loader />}
                </Form.Group> */}

                {/* <Form.Group controlId="brand">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="countInStock">
                  <Form.Label>Count In Stock</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Enter countInStock"
                    value={countInStock}
                    onChange={(e) => setCountInStock(e.target.value)}
                  ></Form.Control>
                </Form.Group>

                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  ></Form.Control>
                </Form.Group> */}

                <Button type="submit" variant="primary">
                  Update
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductEditScreen;
