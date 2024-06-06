import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import {
  Home,
  Checkout,
  Success,
  Cancel,
  About,
  Contact,
  Admin,
} from "./pages";
import NavBar from "./components/navBar";

import "./styles/styles.css";
import "./styles/app.css";
import "./assets/styles/home.css";

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
