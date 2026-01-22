
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NowShowing from "./pages/NowShowing";
import Upcoming from "./pages/Upcoming";
import Franchise from "./pages/Franchise";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/now-showing" element={<NowShowing />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/franchise" element={<Franchise />} />
      </Routes>
      <Footer />
    </Router>
  );
}
