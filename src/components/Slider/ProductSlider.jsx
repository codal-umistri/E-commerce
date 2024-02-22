import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row } from "antd";
import SingleProductCard from "../Cards/SingleProductCard";
import { responsive } from "../Constants/Items";

const ProductSlider = () => {
  let items = JSON.parse(localStorage.getItem("Allproducts"));
  items = items.slice(0, 10);
  return (
    <Row className="slider" justify="space-around">
      <Col span={24}>
        <Carousel
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={5000}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "superLargeDesktop"]}
          responsive={responsive}
        >
          {items.map((item) => (
            <SingleProductCard key={item.id} item={item} />
          ))}
        </Carousel>
      </Col>
    </Row>
  );
};

export default ProductSlider;
