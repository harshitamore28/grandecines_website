
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Movies from "./pages/Movies";
import Testimonials from "./pages/Testimonials";
import Contactus from "./pages/Contactus";  
import Franchise from "./pages/Franchise";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
      <Footer />
    </Router>
  );
}
