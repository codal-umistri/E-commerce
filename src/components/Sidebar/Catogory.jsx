import { Flex } from "antd";
import { Radio } from "antd";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { SearchItemsactions } from "../store/searchitems";
import { StateContext } from "../../App";

const Catogory = ({clearSearchInput}) => {
  const [cat, Setcat] = useState("");
  const [prange, Setprange] = useState(0);
  const { setSearchInputValue, searchInputValue } = useContext(StateContext);

  const dispatch = useDispatch();

  const filteredproduct = async () => {
    try {
      let apiUrl = 'http://localhost:4040/api/v1/products?';
      if (cat) {
        apiUrl += `category=${cat}`;
      }
      if (cat && prange) {
        apiUrl += '&';
      }
      if (prange) {
        const [minPrice, maxPrice] = prange.split("-");
        apiUrl += `minPrice=${minPrice}&maxPrice=${maxPrice}`;
      }
  
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      dispatch(SearchItemsactions.AddAllProdcuts(data));
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

  return (
    <div
      className="fliters"
      style={{
        backgroundColor: "white",
        height: "87.7vh",
        marginTop: "2.8rem",
        borderTopRightRadius: "0.5rem",
        borderBottomRightRadius: "0.5rem",
        top: 90,
        position: "sticky",
      }}
    >
      <Flex
        justify="center"
        style={{ paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
      >
        <h2>Categories</h2>
      </Flex>

      <hr />

      <Flex style={{ marginTop: "0.5rem" }} align="center" vertical>
        <Radio.Group onChange={oncatChange} value={cat}>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"smartphones"}>Smartphones</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"laptops"}>laptops</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"fragrances"}>fragrances</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"skincare"}>skincare</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"home-decoration"}>home-decoration</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"furniture"}>furniture</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"motorcycle"}>motorcycle</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"sunglasses"}>sunglasses</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"lighting"}>lighting</Radio>
          </Flex>
        </Radio.Group>
      </Flex>

      <Flex
        justify="center"
        style={{ paddingTop: "0.9rem", paddingBottom: "0.5rem" }}
      >
        <h2>Price Range</h2>
      </Flex>
      <hr />

      <Flex
        style={{ marginTop: "0.5rem", marginRight: "2.4rem" }}
        align="center"
        vertical
      >
        <Radio.Group onChange={onpriceChange} value={prange}>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"0-100"}>0 - 100 $</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"100-500"}>100 - 500 $</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"500-1000"}>500 - 1000 $</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"1000-1500"}>1000 - 1500 $</Radio>
          </Flex>
          <Flex style={{ marginTop: "0.5rem" }}>
            <Radio value={"1500-2000"}>1500 - 2000 $</Radio>
          </Flex>
        </Radio.Group>
      </Flex>
    </div>
  );
};

export default Catogory;
