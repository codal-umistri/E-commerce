import { Flex, Row, Col } from "antd";
import { SIMPLECARDDATA } from "../Constants/Items";
import SingleProductCard from "./SingleProductCard";
import { useState, useEffect } from "react";

const SingleProductCards = () => {
  const [Carddata, SetCarddata] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://fakestoreapi.com/products?limit=8", { signal })
      .then((res) => res.json())
      .then((data) => SetCarddata(data));

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <Row style={{ marginTop: "2rem" }}>
        <Col span={24}>
          <Flex justify="space-evenly" wrap="wrap">
            {Carddata.length &&
              Carddata?.map((item) => {
                return <SingleProductCard key={item.id} item={item} />;
              })}
          </Flex>
        </Col>
      </Row>
    </>
  );
};

export default SingleProductCards;
