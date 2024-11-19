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
  const [make, setMake] = useState("honda");
  const [imagesArray, setImagesArray] = useState("");
  const [year, setYear] = useState("");
  const [uploading, setUploading] = useState(false);
   const [model, setModel] = useState("");
  const [vin, setVin] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [shippingStatus, setShippingStatus] = useState(true);

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
        setMake(product.make);
        setImagesArray(product.imagesArray);
        setModel(product.model);
        setYear(product.year);
        setVin(product.vin);
        setKeyword(product.keyword);
        setShippingStatus(product.shippingStatus);
      }
    }
  }, [dispatch, history, productId, product, successUpdate]);

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
