import { Flex } from "antd";
import { Radio } from "antd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchItemsactions } from "../store/searchitems";

const Catogory = () => {
  const [cat, Setcat] = useState(0);
  const [prange, Setprange] = useState(0);

  const dispatch = useDispatch();
  const allproducts = useSelector((store) => store.SearchItems);

  const oncatChange = (e) => {
    Setcat(e.target.value);
  };

  const onpriceChange = (e) => {
    Setprange(e.target.value);
    const lvalue = parseInt(e.target.value.split("-")[0]);
    const rvalue = parseInt(e.target.value.split("-")[1]);
    //Get Products from Store
    dispatch(
      SearchItemsactions.AddAllProdcuts(
        allproducts.filter((item) => {
          console.log(item.price);
          return item.price > lvalue && item.price < rvalue;
        })
      )
    );
  };

  const filteredproduct = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/category/${cat}`
    );
    if (!response.ok) {
      console.error("error");
    } else {
      const data = await response.json();
      dispatch(SearchItemsactions.AddAllProdcuts(data.products));
    }
  };

  useEffect(() => {
    if (cat === 0) {
      return;
    } else {
      filteredproduct();
    }
  }, [cat]);

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
