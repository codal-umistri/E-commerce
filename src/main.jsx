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
import Cart from "./components/pages/Cart.jsx";
import ProductPreview from "./components/Layout/ProductPreview.jsx";
import FilterProducts from "./components/Layout/FilterProducts.jsx";
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
    path: "/allproducts",
    element: <FilterProducts />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/single-product/:id",
    element: <ProductPreview />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={brighspaceStore}>
      <RouterProvider router={router} >
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
