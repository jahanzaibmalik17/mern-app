import { React } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeScreen from "./views/Home/Home";
import LoginScreen from "./views/Login/Login";
import RegisterScreen  from "./views/Register/Register";
import AddListing  from "./views/AddListing/AddListing";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3 header-image" style={{ backgroundPositionX: "right" }}>
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/user/listing" component={AddListing} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
