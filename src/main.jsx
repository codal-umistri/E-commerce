import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/pages/Login.jsx";
import Register from "./components/pages/Register.jsx";
import ForgotPassword from "./components/pages/ForgotPassword.jsx";
import BecomeSeller from "./components/pages/BecomeSeller.jsx";
import { Provider } from "react-redux";
import brighspaceStore from "./components/store/index.js";
import Products from "./components/Layout/products.jsx";
import Cart from "./components/pages/Cart.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/become-seller",
    element: <BecomeSeller />,
  },
  {
    path:"/allproducts",
    element : <Products />
  },
  {
    path:"/cart",
    element : <Cart />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={brighspaceStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
