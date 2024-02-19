//

import { Flex, Row, Col } from "antd";
import SingleProductCard from "./SingleProductCard";
import { useEffect, useState } from "react";

const SingleProductCards = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        localStorage.setItem("Allproducts", JSON.stringify(data.products));
        setItems(data.products.slice(0, 12));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const storedItems = localStorage.getItem("Allproducts");
    if (storedItems) {
      setItems(JSON.parse(storedItems).slice(0, 12));
    } else {
      fetchProducts();
    }
  }, []);

  return (
    <>
      <Row style={{ marginTop: "2rem" }}>
        <Col span={24}>
          <Flex justify="space-evenly" wrap="wrap">
            {items.map((item) => (
              <SingleProductCard key={item.id} item={item} />
            ))}
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default SingleProductCards;
