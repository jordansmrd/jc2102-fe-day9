import "./assets/styles.css";
import Navbar from "./components/Navbar/Navbar";
import { useState, React, useEffect } from "react";

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
import { useDispatch, useSelector } from "react-redux";
import user_types from "./redux/reducers/user/types";
import ProtectedPage from "./pages/ProtectedPage";
import NavbarAdmin from "./components/Navbar/NavbarAdmin";
import NavbarUser from "./components/Navbar/NavbarUser";
function App() {
  const dispatch = useDispatch();

  const savedDataUser = localStorage.getItem("user_data");

  if (savedDataUser) {
    const parseDataUser = JSON.parse(savedDataUser);

    dispatch({
      type: user_types.USER_LOGIN,
      payload: parseDataUser,
    });
  }
  const userSelector = useSelector((state) => state.auth);

  const routes = [
    {
      path: "/",
      element: <HomePage />,
      navbar: <NavbarAdmin />,
    },
    {
      path: "/band",
      element: (
        <ProtectedPage needLogin={true}>
          <BandPage />
        </ProtectedPage>
      ),
      navbar: <NavbarUser />,
    },
    {
      path: "/member/:id",
      element: <BandMember />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
    {
      path: "/class",
      element: <Home />,
    },
    {
      path: "/products",
      element: (
        <ProtectedPage authRoles={["admin"]}>
          <ProductPage />
        </ProtectedPage>
      ),
      navbar: <NavbarAdmin />,
    },
    {
      path: "/login",
      element: (
        <ProtectedPage guestOnly={true}>
          <LoginPage />
        </ProtectedPage>
      ),
    },
    {
      path: "/counter",
      element: <CounterPage />,
    },
  ];

  return (
    <>
      <BrowserRouter>
        {/* {userSelector?.role === "admin" ? (
          <NavbarAdmin />
        ) : userSelector?.role === "user" ? (
          <NavbarUser />
        ) : (
          <Navbar />
        )} */}
        <Routes>
          {routes.map((route) => {
            return <Route path={route.path} element={route.navbar}></Route>;
          })}
        </Routes>

        <Routes>
          {routes.map((route) => {
            return <Route path={route.path} element={route.element}></Route>;
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// jika belum Login
// navbar hanya Home,contact , Login

// setelah Login
// user
// navbar Home,Band, username, logout

// admin
// navbar Home,Band, Product, username, logout
