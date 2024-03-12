import React, { useContext } from "react";
import { Row, Col } from "antd";
import Catogory from "../Sidebar/Catogory";
import AllProducts from "../pages/AllProducts";
import { StateContext } from "../../App";

const FilterProducts = () => {
  const { setSearchInputValue, searchInputValue } = useContext(StateContext);
  console.log(searchInputValue + " from filtered");

  const clearSearchInput = () => {
    console.log(searchInputValue);
    setSearchInputValue("");
  };

  return (
    <React.Fragment>
      <Row>
        <Col span={5}>
          <Catogory clearSearchInput={clearSearchInput} />
        </Col>
        <Col span={19}>
          <AllProducts />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default FilterProducts;
