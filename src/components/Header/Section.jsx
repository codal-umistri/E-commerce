import { Flex, Image, Typography, Row, Col } from "antd";
import { SECTIONDATA } from "../Constants/Items";
const { Text } = Typography;

const Section = () => {
  return (
    <Row className="section-container" justify="space-around">
      <Col span={23}>
        <Flex
          style={{
            marginTop: "0.72rem",
            backgroundColor: "white",
          }}
          justify="space-evenly"
          align="center"
        >
          {SECTIONDATA.map((item) => {
            return (
              <Flex className="section-item" key={item.id} vertical>
                <Image
                  src={item.url}
                  preview={false}
                  height={66}
                  width={66}
                  className="img"
                />
                <Text>{item.cat_name}</Text>
              </Flex>
            );
          })}
        </Flex>
      </Col>
    </Row>
  );
};

export default Section;
