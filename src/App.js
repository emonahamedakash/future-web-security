import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/home/Footer";

//Importing components
import Header from "./components/home/Header";
import Home from "./components/home/Home";
import NavigationBar from "./components/home/NavigationBar";

const App = () => {
  return (
    <div>
      <Header />
      <NavigationBar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
