import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "antd";

const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <section className="section-wrapper">
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <Button  className="responsive-button" style={{ all: "unset" }}>
            <FaArrowUp className="top-btn--icon" />
          </Button>
        </div>
      )}
    </section>
  );
};

export default GotoTop;
