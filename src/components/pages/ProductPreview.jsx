import { Flex, Row, Col } from "antd";
import { useParams } from "react-router-dom";

const ProductPreview = () => {
  const { id } = useParams();
  const item = JSON.parse(localStorage.getItem("Allproducts")).filter(
    (item) => {
      return item.id === Number(id);
    }
  );
  console.log(item);
  return (
    <Flex justify="center">
      <Row style={{ backgroundColor: "white", height: "100vh", width: " 90%" }}>
        <Col span={8}></Col>
        <Col span={12} offset={1}>
          <div className="item_title">{item[0].title}</div>
        </Col>
      </Row>
    </Flex>
  );
};

export default ProductPreview;
