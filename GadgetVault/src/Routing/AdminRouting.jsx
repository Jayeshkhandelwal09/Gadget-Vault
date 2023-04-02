import React from "react";
import { Route, Routes } from "react-router";
import { About } from "../Pages/Admin/About";
import Add from "../Pages/Admin/Add";
import AdminDashboard from "../Pages/Admin/AdminDashboard";
import Analytics from "../Pages/Admin/Analytics";

export const AdminRouting = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Add />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
};
