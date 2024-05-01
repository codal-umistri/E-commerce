import React from "react";
import { Flex, Row, Col } from "antd";
import SingleProductCard from "./SingleProductCard";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {SearchItemsactions} from "../store/searchitems"

const SingleProductCards = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4040/api/v1/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        dispatch(SearchItemsactions.AddAllProdcuts(data));
        setItems(data.slice(0, 12));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
          fetchProducts();
  }, []);

  return (
    <React.Fragment>
      <Row style={{ marginTop: "2rem" }}>
        <Col span={24}>
          <Flex justify="space-evenly" wrap="wrap">
            {items.map((item) => (
              <SingleProductCard key={item.id} item={item} />
            ))}
          </Flex>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SingleProductCards;
