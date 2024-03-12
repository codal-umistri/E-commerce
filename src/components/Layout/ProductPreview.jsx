import React from "react";
import ProductSlider from "../Slider/ProductSlider";
import Dividers from "../Divider/Divders";
import Footer from "../Footer/Footer";
import { Suspense, lazy } from "react";
import { Flex, Spin } from "antd";
const Product = lazy(() => import("../pages/Product"));

const ProductPreview = () => {
  return (
    <React.Fragment>
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
      <Footer />
    </React.Fragment>
  );
};

export default ProductPreview;
