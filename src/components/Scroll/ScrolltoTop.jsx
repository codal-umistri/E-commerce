import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const ScrolltoTop = () => {
  const pathname = useLocation();

  useLayoutEffect(() => {
    scroll.scrollToTop();
  }, [pathname.pathname]);
};

export default ScrolltoTop;
