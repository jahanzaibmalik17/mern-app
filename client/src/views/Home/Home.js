import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import FeaturedListing from "../../components/Featured/FeaturedListing";
import Listing from "../../components/Listing/Listing";
import axios from "axios";
import './Home.css'
const HomeScreen = ({ match }) => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await axios.get(`/api/product?pageNumber=${page}`);
        setProducts([...products, ...response.data.products]);
      } catch (error) {
        throw Error("Error while loading data. Try again later.");
      }
    };

    loadProducts();
  }, [dispatch, page]);


  const loadMore = () => {
    setPage((page) => page + 1);
  };

  return (
    <React.Fragment>
      <HeaderSection />
      <FeaturedListing products={products} />
      <Listing products={products} />
         <div className="text-center pagination-wrapper">
          <button onClick={loadMore} className="btn-grad" id="load-more-btn">
          Load More
        </button>
        </div>
 
    </React.Fragment>
  );
};

export default HomeScreen;
