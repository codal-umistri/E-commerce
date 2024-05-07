import React, { useContext } from "react";
import { Col, Flex, Row } from "antd";
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";
import { SearchItemsactions } from "../store/searchitems";
import { StateContext } from "../../App";
const SingleProductCard = lazy(() => import("../Cards/SingleProductCard"));

const AllProducts = () => {

  const dispatch = useDispatch();
  let Items = useSelector((store) => {
    return store.SearchItems;
  });

  const {  searchInputValue, cat, prange } = useContext(StateContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let apiUrl = 'http://localhost:4040/api/v1/products?';
        if (cat) {
          apiUrl += `category=${cat}`;
        }
        if (searchInputValue) {
          apiUrl += '&';
        }
        if(searchInputValue)
        {
           apiUrl += `keyword=${searchInputValue}`
        }
        if (prange) {
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
        const res = await response.json();      
        dispatch(SearchItemsactions.AddAllProdcuts(res.data));
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <React.Fragment>
      {Items?.filteredProducts?.length ? (
        <Row style={{ marginTop: "2rem" }}>
          <Col span={24}>
            <Flex justify="space-evenly" wrap="wrap">
              <Suspense
                fallback={
                  <Flex justify="center" align="center">
                    <Spin tip="Loading" size="large" />
                  </Flex>
                }
              >
                {Items?.filteredProducts?.map((item) => {
                  return <SingleProductCard key={item.id} item={item} />;
                })}
              </Suspense>
            </Flex>
          </Col>
        </Row>
      ) : (
        <Flex justify="center" align="center" style={{width:"100%" , height:"100%"}}>
          <h2>No items found</h2>
        </Flex>
      )}
   </React.Fragment>
  );
};

export default AllProducts;
