import React, { useContext, useEffect, useState } from "react";
import { Drawer, Radio, Space, Button, Flex } from "antd";
import { useDispatch } from "react-redux";
import { SearchItemsactions } from "../store/searchitems";
import { StateContext } from "../../App";
import { BsFilterLeft } from "react-icons/bs";

const Catogory = ({ clearSearchInput }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

  const { searchInputValue, cat, Setcat, prange, Setprange } =
    useContext(StateContext);

  const filteredproduct = async () => {
    try {
      let apiUrl = "http://localhost:4040/api/v1/products?";
      if (cat) {
        apiUrl += `category=${cat}`;
      }
      if (searchInputValue) {
        apiUrl += "&";
      }
      if (searchInputValue) {
        apiUrl += `keyword=${searchInputValue}`;
      }
      if (prange) {
        apiUrl += "&";
      }
      if (prange) {
        const [minPrice, maxPrice] = prange.split("-");
        apiUrl += `minPrice=${minPrice}&maxPrice=${maxPrice}`;
      }

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const res = await response.json();
      dispatch(SearchItemsactions.AddAllProdcuts(res.data));
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const oncatChange = (e) => {
    Setcat(e.target.value);
    clearSearchInput();
  };

  const onpriceChange = (e) => {
    Setprange(e.target.value);
  };

  useEffect(() => {
    filteredproduct();
  }, [cat, prange]);

  const showDefaultDrawer = () => {
    setSize("default");
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button type="primary" onClick={showDefaultDrawer} style={{marginTop:'15px', marginLeft:'15px'}}>
        <Flex>
        <BsFilterLeft style={{ fontSize: "20px", marginRight: "8px" }} />
        <span> Filters</span> 
        </Flex>
      </Button>
      <Drawer
        className="drawer"
        title={" Sortby"}
        placement="left"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            {/* <Button onClick={onClose}>Cancel</Button> */}
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <div className="filters">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "18px",
            }}
          >
            <h2>Categories</h2>
          </div>
          <hr />
          <div
            style={{
              marginTop: "0.5rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Radio.Group onChange={oncatChange} value={cat}>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"smartphones"} style={{ fontSize: "16px" }}>
                  Smartphones
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"laptops"} style={{ fontSize: "16px" }}>
                  Laptops
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"fragrances"} style={{ fontSize: "16px" }}>
                  Fragrances
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"skincare"} style={{ fontSize: "16px" }}>
                  Skincare
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"home-decoration"} style={{ fontSize: "16px" }}>
                  Home Decoration
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"furniture"} style={{ fontSize: "16px" }}>
                  Furniture
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"motorcycle"} style={{ fontSize: "16px" }}>
                  Motorcycle
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"sunglasses"} style={{ fontSize: "16px" }}>
                  Sunglasses
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"lighting"} style={{ fontSize: "16px" }}>
                  Lighting
                </Radio>
              </div>
            </Radio.Group>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "0.9rem",
              paddingBottom: "0.5rem",
              fontSize: "18px",
            }}
          >
            <h2>Price Range</h2>
          </div>
          <hr />
          <div
            style={{
              marginTop: "0.5rem",
              marginRight: "2.4rem",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Radio.Group onChange={onpriceChange} value={prange}>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"0-100"} style={{ fontSize: "16px" }}>
                  0 - 100 $
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"100-500"} style={{ fontSize: "16px" }}>
                  100 - 500 $
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"500-1000"} style={{ fontSize: "16px" }}>
                  500 - 1000 $
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"1000-1500"} style={{ fontSize: "16px" }}>
                  1000 - 1500 $
                </Radio>
              </div>
              <div style={{ marginTop: "0.5rem" }}>
                <Radio value={"1500-2000"} style={{ fontSize: "16px" }}>
                  1500 - 2000 $
                </Radio>
              </div>
            </Radio.Group>
          </div>
        </div>
      </Drawer>
    </React.Fragment>
  );
};

export default Catogory;
