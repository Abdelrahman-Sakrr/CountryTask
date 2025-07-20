import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import OneCountry from "../Components/OneCountry";

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<OneCountry />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
}
