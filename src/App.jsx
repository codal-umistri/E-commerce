import React, { createContext, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/pages/Login.jsx";
import Register from "./components/pages/Register.jsx";
import ForgotPassword from "./components/pages/ForgotPassword.jsx";
import BecomeSeller from "./components/pages/BecomeSeller.jsx";
import { Provider } from "react-redux";
import brighspaceStore from "./components/store/index.js";
import Cart from "./components/pages/Cart.jsx";
import ProductPreview from "./components/Layout/ProductPreview.jsx";
import FilterProducts from "./components/Layout/FilterProducts.jsx";
import "./App.css";
import Home from "./components/Layout/Home.jsx";
import SuccessPayment from "./components/pages/SuccessPayment.jsx";
import CancelPayment from "./components/pages/CancelPayment.jsx";
import Layout from "./components/Layout/Layout.jsx";

const scrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: scrollToTop,
      },
      {
        path: "/allproducts",
        element: <FilterProducts />,
        loader: scrollToTop,
      },
      {
        path: "/allproducts/:serach",
        element: <FilterProducts />,
        loader: scrollToTop,
      },
      { path: "/cart", element: <Cart />, loader: scrollToTop },
      {
        path: "/single-product/:id",
        element: <ProductPreview />,
        loader: scrollToTop,
      },
    ],
  },
  {
    path: "/become-seller",
    element: <BecomeSeller />,
    loader: scrollToTop,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/success",
    element: <SuccessPayment />,
  },
  {
    path: "/cancel",
    element: <CancelPayment />,
  },
]);

export const StateContext = createContext();

const App = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <Provider store={brighspaceStore}>
      <StateContext.Provider value={{ searchInputValue, setSearchInputValue }}>
        <RouterProvider router={router} />
      </StateContext.Provider>
    </Provider>
  );
};
export default App;
