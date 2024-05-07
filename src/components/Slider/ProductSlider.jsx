import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row } from "antd";
import SingleProductCard from "../Cards/SingleProductCard";
import { responsive } from "../Constants/Items";
import { useEffect, useState } from "react";

const ProductSlider = () => {
  const [items, setItems] = useState([]);
  // let items = JSON.parse(localStorage.getItem("Allproducts"));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:4040/api/v1/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const res = await response.json();
        setItems(res.data.slice(0, 10));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
          fetchProducts();
  }, []);
  
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
