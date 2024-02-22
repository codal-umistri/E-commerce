import React from "react";
import { Flex, Row, Col } from "antd";
import { ALTERNATEDATA } from "../Constants/Items";
import MultipleProductCard from "./MultipleProductCard";
import SingleProductCard from "./SingleProductCard";

const AlternateCard = () => {
  return (
    <React.Fragment>
      <Row style={{ marginTop: "0.8rem" }}>
        <Col span={24}>
          <Flex justify="space-around" wrap="wrap">
            {ALTERNATEDATA.map((item) => {
              return item.complex === true ? (
                <MultipleProductCard key={item.id} item={item} />
              ) : (
                <SingleProductCard key={item.id} item={item} />
              );
            })}
          </Flex>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default AlternateCard;
