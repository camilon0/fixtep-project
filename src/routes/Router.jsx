import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contratistas from "../components/contratistas/Contratistas";
import DetalleContratista from "../components/contratistas/DetalleContratista";
import Home from "../components/home/Home";
import Navbar from "../components/home/Navbar";

import LoginAdmin from "../components/LoginAdmin";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Details" element={<DetalleContratista />} />
        <Route path="/servicios" element={<Contratistas />} />
        <Route path="/Login" element={<LoginAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
