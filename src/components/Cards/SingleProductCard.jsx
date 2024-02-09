import React from "react";
import { Card, Image, Button, Flex, Typography } from "antd";

const { Text } = Typography;

const SingleProductCard = ({ item }) => {
  return (
    <Card
      title={item.title}
      bordered={true}
      style={{
        width: 370,
        height: 415,
        borderRadius: "0",
        marginTop: 13,
      }}
      cover={
        <div style={{ padding: "13px" }}>
          <Image
            alt="example"
            src={item.image}
            preview={false}
            style={{ borderRadius: "0", width: 345, height: 276 }}
          />
        </div>
      }
    >
      <Flex align="center" className="card">
        <Button className="btn" style={{ all: "unset" }}>
          <Text className="btn_txt">See more</Text>
        </Button>
      </Flex>
    </Card>
  );
};

export default SingleProductCard;
