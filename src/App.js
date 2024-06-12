import { Suspense, lazy } from "react";
import "@stripe/stripe-js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ChakraProvider } from "@chakra-ui/react";
const NavBar = lazy(() => import("./components/NavBar"));
const Home = lazy(() => import("./pages/Home"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Success = lazy(() => import("./pages/Success"));
const Cancel = lazy(() => import("./pages/Cancel"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Admin = lazy(() => import("./pages/Admin"));

import "./styles/styles.css";
import "./styles/app.css";
import "./assets/styles/home.css";

export default function App() {
  return (
    <HelmetProvider>
      <ChakraProvider>
        <div className="App">
          <Router>
            <Suspense fallback={<div>Loading...</div>}>
              <header>
                {/* <NavBar /> */}
              </header>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="success" element={<Success />} />
                <Route path="cancel" element={<Cancel />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="admin" element={<Admin />} />
              </Routes>
              <footer>
                <p>&copy; 2024 My Website</p>
              </footer>
            </Suspense>
          </Router>
        </div>
      </ChakraProvider>
    </HelmetProvider>
  );
}
