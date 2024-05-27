import "./App.css";
import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Login from "./components/pages/Login.jsx";
import Register from "./components/pages/Register.jsx";
import ForgotPassword from "./components/pages/ForgotPassword.jsx";
import BecomeSeller from "./components/pages/BecomeSeller.jsx";
import brighspaceStore from "./components/store/index.js";
import Cart from "./components/pages/Cart.jsx";
import ProductPreview from "./components/Layout/ProductPreview.jsx";
import FilterProducts from "./components/Layout/FilterProducts.jsx";
import Home from "./components/Layout/Home.jsx";
import SuccessPayment from "./components/pages/SuccessPayment.jsx";
import CancelPayment from "./components/pages/CancelPayment.jsx";
import Layout from "./components/Layout/Layout.jsx";
import OfflinePage from "./components/pages/oflinePage.jsx";
import TokenExpirationChecker from "./components/pages/TokenExpirationChecker.jsx";
import Otp from "./components/pages/Otp.jsx";
import ConfirmPassword from "./components/pages/ConfirmPassword.jsx";

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
  {
    path:'/otp',
    element: <Otp />,
  },
  {
    path:'/confirm-password',
    element: <ConfirmPassword/>,

  }
]);

export const StateContext = createContext({
  searchInputValue: "",
  setSearchInputValue: () => {},
  cart: [],
  setCart: () => {},
});

const App = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [cart, setCart] = useState([]);
  const [cat, Setcat] = useState("");
  const [prange, Setprange] = useState(0);
  const [online, setOnline] = useState(navigator.onLine);
  // const [token, setToken] = useState(null);
  const token = JSON.parse(localStorage.getItem("Auth"));

  useLayoutEffect(() => {
    handleOnlineStatus();
    window.addEventListener("offline", handleOnlineStatus);

    return () => {
      window.removeEventListener("offline", handleOnlineStatus);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:4040/api/v1/getproducts", {
          mode:"cors",
          headers: {
            Authorization: `Bearer ${token.token}`,
          },
        });
        const response = await res.json();
        setCart([...response.item]);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };

    fetchData();
  }, []);

  const handleOnlineStatus = () => {
    setOnline(navigator.onLine);
  };
  // console.log(cart);
  return (
    <React.Fragment>
      <Provider store={brighspaceStore}>
        <StateContext.Provider
          value={{
            searchInputValue,
            setSearchInputValue,
            cart,
            setCart,
            cat,
            Setcat,
            prange,
            Setprange,
          }}
        >
          {/* <TokenExpirationChecker /> */}
          {online ? (
            <RouterProvider router={router} />
          ) : (
            <OfflinePage Onretry={handleOnlineStatus} />
          )}
        </StateContext.Provider>
      </Provider>
    </React.Fragment>
  );
};

export default App;
