import "./assets/styles.css";
import Navbar from "./components/Navbar/Navbar";
import { useState, React } from "react";

import Home from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./pages/HomePage";
import BandPage from "./pages/BandPage";
import NotFoundPage from "./pages/NotFoundPage";
import BandMember from "./pages/BandMember";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import CounterPage from "./pages/CounterPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Band" element={<BandPage />} />
          <Route path="/member/:id" element={<BandMember />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<ProductPage />}></Route>
          <Route path="/login" element={<LoginPage />}>
            {" "}
          </Route>
          <Route path="/counter" element={<CounterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
