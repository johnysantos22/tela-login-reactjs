import Login from "../login/index.jsx"
import Register from "../registro/index.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react';


export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};
