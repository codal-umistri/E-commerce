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



const router = createBrowserRouter([
      {
        path: "/",
        element: <Home />,
        loader : ()=> {window.scrollTo(0,0);  return null;}
      },
      {
        path: "/allproducts",
        element: <FilterProducts />,
        loader : ()=> {window.scrollTo(0,0);  return null;}
      },
      {
        path: "/cart",
        element: <Cart />,
        loader : ()=> {window.scrollTo(0,0);  return null;}
      },
      {
        path: "/single-product/:id",
        element: <ProductPreview />,
        loader : ()=> {window.scrollTo(0,0);  return null;}
      },
      {
        path: "/login",
        element: <Login />,
        loader : ()=> {window.scrollTo(0,0);  return null;}
      },
      {
        path: "/register",
        element: <Register />,
        loader : ()=> {window.scrollTo(0,0);  return null;}
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
        loader : ()=> {window.scrollTo(0,0);  return null;}
      },
      {
        path: "/become-seller",
        element: <BecomeSeller />,
        loader : ()=> {window.scrollTo(0,0);  return null;}
      },
    ],
);

const App = () => {
  return (
    <Provider store={brighspaceStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
};
export default App;
