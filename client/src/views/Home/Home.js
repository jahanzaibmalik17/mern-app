import React, { useState, useEffect } from "react";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import FeaturedListing from "../../components/Featured/FeaturedListing";
import Listing from "../../components/Listing/Listing";

const HomeScreen = () => {

  return (
    <React.Fragment>
      <HeaderSection  />
      <FeaturedListing />
      <Listing />
    </React.Fragment>
  );
};

export default HomeScreen;
