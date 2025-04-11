import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../Pages/Error/NotFound";
import HomeLayout from "../Layout/HomeLaout/HomeLayout";
export default function Router() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
