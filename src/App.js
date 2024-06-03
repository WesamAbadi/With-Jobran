import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import NavBar from "./components/navBar";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./styles.css";
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar active="home" />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar active="home" />
                <Home />
              </>
            }
          />
          <Route
            path="checkout"
            element={
              <>
                <NavBar />
                <Checkout />
              </>
            }
          />
          <Route
            path="success"
            element={
              <>
                <NavBar />
                <Success />
              </>
            }
          />
          <Route
            path="cancel"
            element={
              <>
                <NavBar />
                <Cancel />
              </>
            }
          />
          <Route
            path="about"
            element={
              <>
                <NavBar active="about" />
                <About />
              </>
            }
          />
          <Route
            path="contact"
            element={
              <>
                <NavBar active="contact" />
                <Contact />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
