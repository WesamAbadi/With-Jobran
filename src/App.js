import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Checkout from "./components/Checkout";
import Home from "./components/Home";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

import "./styles.css";
import "./app.css"
export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="success" element={<Success />} />
          <Route path="cancel" element={<Cancel />} />
        </Routes>
      </Router>
    </div>
  );
}
