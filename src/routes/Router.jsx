import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contratistas from "../components/Contratistas";
import DetalleContratista from "../components/DetalleContratista";
import Home from "../components/home/Home";

import LoginAdmin from "../components/LoginAdmin";

const Router = () => {
  return (
    <BrowserRouter>
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
