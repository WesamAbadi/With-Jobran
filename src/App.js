import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import NavBar from "./components/navBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";

import "./styles.css";
import "./app.css";
import "./style/home.css";

export default function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="success" element={<Success />} />
            <Route path="cancel" element={<Cancel />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="admin" element={<Admin />} />
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}
