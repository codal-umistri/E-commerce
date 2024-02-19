import { Col, Row, Flex, ConfigProvider, Button } from "antd";
import Navbar from "../Header/Navbar";
import { useSelector } from "react-redux";
import Cartitem from "../Cards/Cartitem";
import Footer from "../Footer/Footer";

const Cart = () => {
  const bagitems = useSelector((store) => store.BagItems);

  return (
    <>
      <Navbar />
      <Row style={{ marginTop: "1rem", backgroundColor: "transparent" }}>
        <Col span={15}>
          {bagitems.map((item, index) => (
            <>
              <Cartitem item={item} />
            </>
          ))}
        </Col>
        <Col span={7} offset={1} className="price_container">
          <Flex justify="center">
            <span
              style={{
                fontSize: "18px",
                fontWeight: "500",
                padding: "10px 0px",
                color: "#007185",
                opacity: 0.8,
              }}
            >
              PRICE DETAILS
            </span>
          </Flex>
          <hr />
          <Flex style={{ margin: "10px 0px" }} justify="space-around">
            <Flex vertical gap={20}>
              <span style={{ fontSize: "18px" }}>
                Price ({bagitems.length} items)
              </span>

              <span style={{ fontSize: "18px" }}>Discount</span>

              <span style={{ fontSize: "18px" }}>Delivery Charges</span>
            </Flex>
            <Flex vertical gap={20}>
              <span style={{ fontSize: "18px" }}>
                {bagitems.reduce((acc, cul) => {
                  return (acc = acc + cul.price);
                }, 0)}
                $/-
              </span>

              <span
                style={{
                  fontSize: "18px",
                  color: "green",
                  marginRight: "10px",
                }}
              >
                -
                {bagitems.reduce((acc, cul) => {
                  const price = (cul.price * cul.discountPercentage) / 100;
                  return (acc = acc + Math.round(price));
                }, 0)}
                $/-
              </span>
              <span style={{ fontSize: "18px", color: "green" }}>Free</span>
            </Flex>
          </Flex>
          <div class="horizontal-line"></div>
          <Flex gap={10} style={{ margin: "15px 0px" }}>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "650",
                marginLeft: "60px",
              }}
            >
              Total Amount
            </span>
            <span
              style={{
                fontSize: "18px",
                marginLeft: "113px",
                fontWeight: "600",
              }}
            >
              {bagitems.reduce((acc, cul) => {
                return (acc = acc + cul.price);
              }, 0) -
                bagitems.reduce((acc, cul) => {
                  const price = (cul.price * cul.discountPercentage) / 100;
                  return (acc = acc + Math.round(price));
                }, 0)}{" "}
              $/-
            </span>
          </Flex>
          <div class="horizontal-line"></div>
          <Flex justify="center" style={{ margin: "16px 0px" }}>
            <ConfigProvider
              theme={{
                components: {
                  Button: {
                    colorPrimaryHover: "green",
                  },
                },
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="form_btn"
                style={{ width: "50%", height: "35px" }}
              >
                PLACE ORDER
              </Button>
            </ConfigProvider>
          </Flex>
        </Col>
      </Row>
      <Footer />
    </>
  );
};

export default Cart;
