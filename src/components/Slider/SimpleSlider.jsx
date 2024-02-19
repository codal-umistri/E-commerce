import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BANNERDATA } from "../Constants/Items";
import { RESPONSIVE } from "../Constants/Items";
import { Col, Row, Image } from "antd";

const SimpleSlider = () => {
  return (
    <Row className="slider" justify="space-around">
      <Col span={23}>
        <Carousel
          responsive={RESPONSIVE}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {BANNERDATA.map((data, index) => (
            <div key={index}>
              <Image
                src={data.url}
                alt="banner"
                preview={false}
                style={{ minWidth: "225vh", height: "280px" }}
              />
            </div>
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default SimpleSlider;
