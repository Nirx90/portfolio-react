import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Contact from "../pages/Contact";
import Theme from "../pages/Theme";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/theme" element={<Theme />} />
    </Routes>
  );
};

export default AppRoutes;
