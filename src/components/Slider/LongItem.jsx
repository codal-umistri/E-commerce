import { Flex, Typography, Row, Col } from "antd";

const { Text } = Typography;

const LongItem = () => {
  return (
    <Row justify="space-around">
      <Col span={21}>
        <div className="long_container">
          <div className="Container">
            <Flex vertical>
              <Text className="txt_1">Collecting is self-</Text>
              <Text className="txt_1">love</Text>
              <Text className="txt_2">Grow your collection with LEGO® and</Text>
              <Text className="txt_2">toys on Brighspace</Text>
              <button className="btn">Find Your favs</button>
            </Flex>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default LongItem;
