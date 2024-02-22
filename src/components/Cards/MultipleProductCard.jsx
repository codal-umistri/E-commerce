import { Row, Col, Typography, Image, Flex, Button } from "antd";

const { Text } = Typography;

const MultipleProductCard = ({ item }) => {
  const firstFourImages = item.images.slice(0, 4);

  return (
    <div className="Cards">
      <div className="card_container">
        <Row justify="space-around">
          <Col span={20}>
            <Text className="txt">{item.title}</Text>
          </Col>
        </Row>
      </div>
      <div className="Card_container">
        <Row justify="space-evenly">
          {firstFourImages.length &&
            firstFourImages?.map((Item, index) => (
              <Col span={10} style={{ padding: "7px" }} key={index}>
                <Flex vertical key={index}>
                  <Image
                  key={index}
                    preview={false}
                    src={Item}
                    height={102}
                    width={150}
                  ></Image>
                  <Text
                    className="Container_txt"
                    style={{ all: "unset", fontSize: "14px" }}
                  >
                    {item.category}
                  </Text>
                </Flex>
              </Col>
            ))}
        </Row>
      </div>
      <div className="_container">
        <Flex justify="flex-start" style={{ marginLeft: "20px" }}>
          <Button className="btn" style={{ all: "unset" }}>
            <Text className="Btn_txt">See more</Text>
          </Button>
        </Flex>
      </div>
    </div>
  );
};

export default MultipleProductCard;
