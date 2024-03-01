import React from "react";
import { Row, Col } from "antd";
import Navbar from "../Header/Navbar";
import Catogory from "../Sidebar/Catogory";
import AllProducts from "../pages/AllProducts";
import { useState } from "react";

const FilterProducts = () => {
  const [searchInputValue, setSearchInputValue] = useState("");

  const clearSearchInput = () => {
    console.log(searchInputValue);
    setSearchInputValue("");
  };
  return (
    <React.Fragment>
      <Navbar
        searchInputValue={searchInputValue}
        setSearchInputValue={setSearchInputValue}
      />
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
