import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/Contact";
import Theme from "../pages/Theme";
import PortfolioHomepage from "../pages/Home";
import Inquiry from "../pages/Inquiry";
import Profile from "../pages/Profile";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PortfolioHomepage />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
