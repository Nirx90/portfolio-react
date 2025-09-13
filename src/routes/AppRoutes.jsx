import React from "react";
import { Routes, Route } from "react-router-dom";
import Theme from "../pages/Theme";
import Inquiry from "../pages/Inquiry";
import Profile from "../pages/Profile";
import Home from "../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/theme" element={<Theme />} />
      <Route path="/inquiry" element={<Inquiry />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AppRoutes;
