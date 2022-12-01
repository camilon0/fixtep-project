import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetalleContratista from "../components/contratistas/DetalleContratista";
import Contratistas from "../components/contratistas/Contratistas";
import Home from "../components/home/Home";

import LoginAdmin from "../components/LoginAdmin";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DetalleContratista />} />
        <Route path="/servicios" element={<Contratistas />} />
        <Route path="/Login" element={<LoginAdmin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
