import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const ScrolltoTop = () => {
const pathname = useLocation();

  useEffect(() => {
    scroll.scrollToTop();
  }, [pathname.pathname]);
};

export default ScrolltoTop;
