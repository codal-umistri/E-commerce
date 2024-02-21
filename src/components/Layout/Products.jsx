import { Row, Col } from "antd";
import Navbar from "../Header/Navbar";
import Catogory from "../Sidebar/Catogory";
import AllProducts from "../pages/AllProducts";
import { useState } from "react";

const Products = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  console.log(searchInputValue);

  const clearSearchInput = () => {
    console.log(searchInputValue);
    setSearchInputValue("");
  };
  return (
    <>
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
    </>
  );
};

export default Products;
