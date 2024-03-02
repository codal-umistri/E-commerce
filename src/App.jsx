import React from "react";
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

const scrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

const router = createBrowserRouter([
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
    path: "/cart",
    element: <Cart />,
    loader: scrollToTop,
  },
  {
    path: "/single-product/:id",
    element: <ProductPreview />,
    loader: scrollToTop,
  },
  {
    path: "/login",
    element: <Login />,
    loader: scrollToTop,
  },
  {
    path: "/register",
    element: <Register />,
    loader: scrollToTop,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
    loader: scrollToTop,
  },
  {
    path: "/become-seller",
    element: <BecomeSeller />,
    loader: scrollToTop,
  },
]);

const App = () => {
  return (
    <Provider store={brighspaceStore}>
      <RouterProvider router={router} />
    </Provider>
  );
};
export default App;
