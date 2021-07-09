import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import FeaturedListing from "../../components/Featured/FeaturedListing";
import Listing from "../../components/Listing/Listing";
import { listProducts } from "../../actions/listing";
const HomeScreen = () => {

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);

  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <React.Fragment>
      <HeaderSection  />
      <FeaturedListing  products={products} />
      <Listing products={products}  />
    </React.Fragment>
  );
};

export default HomeScreen;
