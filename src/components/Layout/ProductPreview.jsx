import React from "react";
import Navbar from "../Header/Navbar";
import ProductSlider from "../Slider/ProductSlider";
import Dividers from "../Divider/Divders";
import Footer from "../Footer/Footer";
import { Suspense, lazy } from "react";
import { Flex, Spin } from "antd";
import GotoTop from "../Scroll/GotoTop";
import ScrolltoTop from "../Scroll/ScrolltoTop";
const Product = lazy(() => import("../pages/Product"));

const ProductPreview = () => {
  return (
    <React.Fragment>
      <ScrolltoTop />
      <Navbar />
      <Suspense
        fallback={
          <Flex justify="center" align="center">
            <Spin tip="Loading" size="large" />
          </Flex>
        }
      >
        <Product />
      </Suspense>
      <Dividers tag={"New Arrivals"} />
      <ProductSlider />
      <GotoTop />
      <Footer />
    </React.Fragment>
  );
};

export default ProductPreview;
