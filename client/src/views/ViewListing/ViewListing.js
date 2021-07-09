import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/Message/Message";
import Loader from "../../components/Loader/Loader";
// import Paginate from '../components/Paginate'
import { listProducts, deleteProduct } from "../../actions/listing";
import './ViewListing.css'

const ProductListScreen = ({ history, match }) => {
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = productDelete;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    // if (!userInfo || !userInfo.isAdmin) {
    //   history.push('/login')
    // }
    dispatch(listProducts("", pageNumber));
  }, [dispatch, history, userInfo, successDelete, pageNumber]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      dispatch(deleteProduct(id));
    }
  };

  const createProductHandler = () => {
    history.push(`/admin/product/add`);
  };

  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Products</h1>
        </Col>
        <Col className="text-right">
          <Button className="my-3" onClick={createProductHandler}>
            <i className="fas fa-plus"></i> Create Product
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Table striped bordered hover responsive="sm md lg xl">
            <thead>
              <tr>
                <th></th>
                <th>Id</th>
                <th>Name</th>
                <th>Housing Type</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <Image
                      className="listing-image"
                      src={product.imagesArray[0]}
                      variant="top"
                      fluid
                    />
                  </td>
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.housingType}</td>
                  <td>{product.description}</td>
                  <td>
                    <LinkContainer to={`/admin/addlisting/${product._id}/edit`}>
                      <Button variant="light" className="btn-sm">
                        <i className="fas fa-edit"></i>
                      </Button>
                    </LinkContainer>
                    <Button
                      variant="danger"
                      className="btn-sm"
                      onClick={() => deleteHandler(product._id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
        </>
      )}
    </>
  );
};

export default ProductListScreen;
