import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/home/Footer";

//Importing components
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import NavigationBar from "./components/home/NavigationBar";
import Services from "./components/Services";

const App = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
