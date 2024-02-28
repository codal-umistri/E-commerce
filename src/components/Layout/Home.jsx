import React from "react";
import { Flex, Spin } from "antd";
import { Suspense, lazy } from "react";
import Section from "../Header/Section";
import Navbar from "../Header/Navbar";
import SimpleSlider from "../Slider/SimpleSlider";
import Dividers from "../Divider/Divders";
import Footer from "../Footer/Footer";
// import GotoTop from "../Scroll/GotoTop";
import SeeAll from "../Constants/SeeAll";
import LongItem from "../Constants/LongItem";
const SingleProductCards = lazy(() => import("../Cards/SingleProductCards"));

function Home() {
  return (
    <React.Fragment>
      {/* <ScrolltoTop/> */}
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
      {/* <GotoTop /> */}
    </React.Fragment>
  );
}
export default Home;
