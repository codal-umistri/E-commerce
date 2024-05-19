import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BANNERDATA } from "../Constants/Items";
import { RESPONSIVE } from "../Constants/Items";
import { Col, Row, Image} from "antd";

const SimpleSlider = () => {
  return (
    <Row className="slider" justify="center">
      <Col span={24}>
        <Carousel
          responsive={RESPONSIVE}
          showDots={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          infinite={true}
        >
          {BANNERDATA.map((data, index) => (
            <div key={index}>
              <Image
              className="slider-image"
                src={data.url}
                alt="banner"
                preview={false}
              />
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default SimpleSlider;
