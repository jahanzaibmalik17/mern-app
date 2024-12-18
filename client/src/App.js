import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./views/Home/Home";
import LoginScreen from "./views/Login/Login";
import RegisterScreen  from "./views/Register/Register";
import AddListing  from "./views/AddListing/AddListing";
import ViewListing  from "./views/ViewListing/ViewListing";
import EditListing  from "./views/EditListing/EditListing";
import AdvanceListing  from "./views/AdvanceListing/AdvanceListing";
import ListingDetail  from "./views/ListingDetail/ListingDetail";

const App = () => {
  const [headerImageClass, setHeaderImageClass] = useState('');

  // useEffect(() => {
  //   if(window.location.pathname === '/' || window.location.pathname === '') {
  //     setHeaderImageClass('header-image')
  //   }else {
  //     setHeaderImageClass('')
  //   }
  // }, [window.location.pathname]);

  return (
    <Router>
      <Header  />
      <main className={`py-3 ${headerImageClass}`} style={{ backgroundPositionX: "right" , backgroundSize: '900px'}}>
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/admin/addlisting" component={AddListing} />
          <Route path="/admin/listing" component={ViewListing} exact/>
          <Route path='/admin/listing/:id/edit' component={EditListing} />
          <Route path="/" component={AdvanceListing} exact />
          <Route path='/listing/:id' component={ListingDetail} />
          <Route path="/advance-search" component={AdvanceListing} exact />
          <Route path='/page/:pageNumber' component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
