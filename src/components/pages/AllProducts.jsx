import React, { useContext, useEffect } from "react";
import { Col, Row, Spin } from "antd";
import { Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchItemsactions } from "../store/searchitems";
import { StateContext } from "../../App";

const SingleProductCard = lazy(() => import("../Cards/SingleProductCard"));

const AllProducts = () => {
  const dispatch = useDispatch();
  const Items = useSelector((store) => store.SearchItems);
  const { searchInputValue, cat, prange } = useContext(StateContext);

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
        if (searchInputValue) {
          apiUrl += `keyword=${searchInputValue}`;
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
  }, [dispatch, searchInputValue, cat, prange]);

  return (
    <React.Fragment>
      {Items?.filteredProducts?.length ? (
        <Row style={{ marginTop: "2rem" }}>
          <Col span={24}>
            <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
              <Suspense
                fallback={
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Spin tip="Loading" size="large" />
                  </div>
                }
              >
                {Items?.filteredProducts?.map((item) => (
                  <SingleProductCard key={item.id} item={item} />
                ))}
              </Suspense>
            </div>
          </Col>
        </Row>
      ) : (
        <Row style={{ marginTop: "2rem" }}>
          <Col span={24}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
                <h2>No items found</h2>
            </div>
          </Col>
        </Row>
      )}
    </React.Fragment>
  );
};

export default AllProducts;
