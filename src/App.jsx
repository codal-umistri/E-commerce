import "./App.css";
import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Section from "./components/Header/Section";
import SimpleSlider from "./components/Slider/SimpleSlider";
import GotoTop from "./components/Scroll/GotoTop";
import LongItem from "./components/Constants/LongItem";
import Dividers from "./components/Divider/Divders";
import SeeAll from "./components/Constants/SeeAll";
import { Flex, Spin } from "antd";
import { Suspense, lazy } from "react";
import ScrolltoTop from "./components/Scroll/ScrolltoTop";
const SingleProductCards = lazy(() =>
  import("./components/Cards/SingleProductCards")
);

function App() {
  return (
    <React.Fragment>
      <ScrolltoTop/>
      <Navbar />
      <Section />
      <SimpleSlider />
      <Dividers tag={"Top Products"} />
      <Flex justify="space-evenly" wrap="wrap">
        <Suspense
          fallback={
            <Flex justify="center" align="center">
              <Spin tip="Loading" size="large" />
            </Flex>
          }
        >
          <SingleProductCards />
        </Suspense>
      </Flex>
      <SeeAll />
      <LongItem />
      <Footer />
      <GotoTop />
    </React.Fragment>
  );
}
export default App;
