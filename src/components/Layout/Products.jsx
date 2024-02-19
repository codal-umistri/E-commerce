import { Row, Col } from "antd";
import Navbar from "../Header/Navbar";
import Catogory from "../Sidebar/Catogory";
import AllProducts from "../pages/AllProducts";
 

const Products = () => {
  return (
    <>
      <Navbar />
      <Row>
        <Col span={5}>
          <Catogory />
        </Col>
        <Col span={19}>
        <AllProducts />
        </Col>
      </Row>
     
    </>
  );
};

export default Products;
