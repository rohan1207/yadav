import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./components/OurTeam";
import ServicesPage from "./pages/ServicePage";
import ServiceDetail from "./pages/ServiceDetail";
import Gallery from "./pages/Gallery";
import ScrollToTop from "./components/ScrollToTop";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/team" element={<OurTeam />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
