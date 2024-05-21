import { Flex, Typography, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

const LongItem = () => {
  const navigate = useNavigate();
  return (
    <Row>
      <Col span={24}>
        <div className="page_container">
        <div className="long_container">
          <div className="Container">
            <Flex vertical>
              <Text className="txt_1">Collecting is self-</Text>
              <Text className="txt_1">love</Text>
              <Text className="txt_2">Grow your collection with LEGO® and</Text>
              <Text className="txt_2">toys on Brighspace</Text>
              <button
                className="btn"
                onClick={() => navigate({ pathname: "/allproducts" })}
              >
                Find Your favs
              </button>
            </Flex>
          </div>
        </div>
        </div>
      </Col>
    </Row>
  );
};

export default LongItem;
