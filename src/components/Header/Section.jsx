import { Flex, Image, Typography, Row, Col } from "antd";
import {
  SECTIONDATA,
  responsive,
  responsiveforsection,
} from "../Constants/Items";
import Carousel from "react-multi-carousel";
const { Text } = Typography;

const Section = () => {
  return (
    <Row className="section-container" justify="space-around">
      <Col span={22}>
        <Flex justify="center" className="section">
          <Carousel
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={5000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop"]}
            responsive={responsiveforsection}
            arrows={false}
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
          </Carousel>
        </Flex>
      </Col>
    </Row>
  );
};

export default Section;
