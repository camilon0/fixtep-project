import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contratistas from "../components/Contratistas";
import DetalleContratista from "../components/DetalleContratista";
import Home from "../components/home/Home";
import Navbar from "../components/home/Navbar";

import LoginAdmin from "../components/LoginAdmin";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetalleContratista />} />
        <Route path="/contratistas" element={<Contratistas />} />
        <Route path="/login" element={<LoginAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
