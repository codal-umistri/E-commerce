import React, { useContext } from "react";
import { Row, Col } from "antd";
import Catogory from "../Sidebar/Catogory";
import AllProducts from "../pages/AllProducts";
import { StateContext } from "../../App";
import Footer from "../Footer/Footer";

const FilterProducts = () => {
  const { setSearchInputValue, searchInputValue } = useContext(StateContext);

  const clearSearchInput = () => {
    setSearchInputValue("");
  };

  return (
    <React.Fragment>
      <Row>
        <Col span={24}>
          <Catogory clearSearchInput={clearSearchInput} />
        </Col>
        </Row>
        <Row>
        <Col span={24} >
          <AllProducts />
        </Col>
      </Row>
      <Footer/>
    </React.Fragment>
  );
};

export default FilterProducts;
