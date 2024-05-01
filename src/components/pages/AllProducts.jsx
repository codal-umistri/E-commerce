import React from "react";
import { Col, Flex, Row } from "antd";
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";
import { SearchItemsactions } from "../store/searchitems";
const SingleProductCard = lazy(() => import("../Cards/SingleProductCard"));

const AllProducts = () => {

  const dispatch = useDispatch();
  let Items = useSelector((store) => {
    return store.SearchItems;
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4040/api/v1/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        dispatch(SearchItemsactions.AddAllProdcuts(data));
      } catch (error) {
        console.error("Error fetching data:", error);
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
