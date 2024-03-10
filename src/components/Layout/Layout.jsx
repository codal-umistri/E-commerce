import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar";
import GotoTop from "../Scroll/GotoTop";

const Layout = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Outlet />
      <GotoTop />
    </React.Fragment>
  );
};

export default Layout;
