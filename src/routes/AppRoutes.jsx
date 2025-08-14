import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Theme from "../pages/Theme";
import PortfolioHomepage from "../pages/home";
import Inquiry from "../pages/Inquiry";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHomepage />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/inquiry" element={<Inquiry />} />
    </Routes>
  );
};

export default AppRoutes;
