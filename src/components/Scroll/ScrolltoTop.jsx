import { useLayoutEffect } from "react";
import {
  NavigationType,
  Outlet,
  useLocation,
  useNavigationType,
} from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const ScrolltoTop = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    console.log("Location", location.pathname);
    scroll.scrollToTop();
  }, [location.pathname]);

  return <Outlet />;
};

export default ScrolltoTop;
