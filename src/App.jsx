// import React, { createContext, useEffect, useState } from "react";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import Login from "./components/pages/Login.jsx";
// import Register from "./components/pages/Register.jsx";
// import ForgotPassword from "./components/pages/ForgotPassword.jsx";
// import BecomeSeller from "./components/pages/BecomeSeller.jsx";
// import { Provider } from "react-redux";
// import brighspaceStore from "./components/store/index.js";
// import Cart from "./components/pages/Cart.jsx";
// import ProductPreview from "./components/Layout/ProductPreview.jsx";
// import FilterProducts from "./components/Layout/FilterProducts.jsx";
// import "./App.css";
// import Home from "./components/Layout/Home.jsx";
// import SuccessPayment from "./components/pages/SuccessPayment.jsx";
// import CancelPayment from "./components/pages/CancelPayment.jsx";
// import Layout from "./components/Layout/Layout.jsx";


// const scrollToTop = () => {
//   window.scrollTo(0, 0);
//   return null;
// };

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//         loader: scrollToTop,
//       },
//       {
//         path: "/allproducts",
//         element: <FilterProducts />,
//         loader: scrollToTop,
//       },
//       {
//         path: "/allproducts/:serach",
//         element: <FilterProducts />,
//         loader: scrollToTop,
//       },
//       { path: "/cart", element: <Cart />, loader: scrollToTop },
//       {
//         path: "/single-product/:id",
//         element: <ProductPreview />,
//         loader: scrollToTop,
//       },
//     ],
//   },
//   {
//     path: "/become-seller",
//     element: <BecomeSeller />,
//     loader: scrollToTop,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/forgot-password",
//     element: <ForgotPassword />,
//   },
//   {
//     path: "/success",
//     element: <SuccessPayment />,
//   },
//   {
//     path: "/cancel",
//     element: <CancelPayment />,
//   },
// ]);

// export const StateContext = createContext();

// const App = () => {
//   const [searchInputValue, setSearchInputValue] = useState("");
//   const [online, setOnline] = useState(navigator.onLine);

//   useEffect(() => {
//     const handleOnlineStatus = () => {
//       setOnline(navigator.onLine);
//     };

//     window.addEventListener("online", handleOnlineStatus);
//     window.addEventListener("offline", handleOnlineStatus);

//     return () => {
//       window.removeEventListener("online", handleOnlineStatus);
//       window.removeEventListener("offline", handleOnlineStatus);
//     };
//   }, []);

//   return (
//     <>
//       <Provider store={brighspaceStore}>
//         <StateContext.Provider value={{ searchInputValue, setSearchInputValue }}>
//           {online ? (
//             <RouterProvider router={router} />
//           ) : (
//             <div>
//             <h1>Offline</h1>
//             <center><p>You are currently offline.</p></center>
//           </div>
//           )}
//         </StateContext.Provider>
//       </Provider>
//     </>
//   );
// };

// export default App;



import React, { createContext, useEffect, useLayoutEffect, useState } from "react";
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
import OfflinePage from "./components/pages/oflinePage.jsx";

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
  const [online, setOnline] = useState(navigator.onLine);

  useLayoutEffect(() => {
    const handleOnlineStatus = () => {
      setOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatus);
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("online", handleOnlineStatus);
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  return (
    <>
      <Provider store={brighspaceStore}>
        <StateContext.Provider value={{ searchInputValue, setSearchInputValue }}>
          {online ? (
            <RouterProvider router={router} />
          ) : (
            <OfflinePage />
          )}
        </StateContext.Provider>
      </Provider>
    </>
  );
};

export default App;
