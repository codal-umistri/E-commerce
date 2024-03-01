import React from "react";
import { Col, Row, Flex, ConfigProvider, Button, Input } from "antd";
import Navbar from "../Header/Navbar";
import { useSelector } from "react-redux";
import Cartitem from "../Cards/Cartitem";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { COUPENCODE } from "../Constants/Items";

const Cart = () => {
  const coupenCode = useRef(null);
  const bagitems = useSelector((store) => store.BagItems);
  const [promoCode, setPromoCode] = useState(null);
  const [coupenndiscount, setcoupendiscount] = useState([]);

  const applyPromoCode = () => {
    const code = coupenCode.current.input.value;
    setPromoCode(code);
    const discount = COUPENCODE.find((item) => item.Code === code);
    discount
      ? setcoupendiscount([discount])
      : (setcoupendiscount([]),
        setPromoCode(null),
        alert("There is no such Coupen-code"));
  };

  return (
    <React.Fragment>
      <Navbar />
      <Row style={{ marginTop: "1rem", backgroundColor: "transparent" }}>
        <Col span={15}>
          {bagitems.length ? (
            bagitems.map((item) => (
              <Cartitem item={item.item} key={item.item.id} />
            ))
          ) : (
            <Flex justify="center" align="center" style={{ height: "100%" }}>
              <Link
                to="/allproducts"
                style={{
                  fontSize: "20px",
                  fontWeight: "650",
                  marginLeft: "60px",
                  textDecoration: "underline",
                }}
              >
                Select Item...
              </Link>
            </Flex>
          )}
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
              <span
                className={
                  promoCode !== null && bagitems.length
                    ? "showcoupen"
                    : "notshowcoupen"
                }
              >
                Coupen`&quot;`{coupenndiscount[0]?.Code}`&quot;` is Applied
              </span>
            </Flex>
            <Flex vertical gap={20}>
              <span style={{ fontSize: "18px" }}>
                {bagitems.reduce((acc, cul) => {
                  return (acc = acc + cul.item.price * cul.quantity);
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
                {bagitems
                  .filter((item) => item.quantity > 0)
                  .reduce((acc, cul) => {
                    const price =
                      (cul.item.price * cul.item.discountPercentage) / 100;
                    return (acc = acc + Math.round(price));
                  }, 0)}
                $/-
              </span>
              <span style={{ fontSize: "18px", color: "green" }}>Free</span>
              <Flex align="center" gap={3}>
                <span
                  className={
                    promoCode !== null && bagitems.length
                      ? "showcoupen"
                      : "notshowcoupen"
                  }
                  style={{ color: "green" }}
                >
                  {coupenndiscount[0]?.discountPercentage}%{" "}
                </span>
                {
                  <span
                    className={
                      promoCode !== null && bagitems.length
                        ? "showbadge"
                        : "notshowcoupen"
                    }
                    style={{ color: "green" }}
                  >
                    Discount
                  </span>
                }
              </Flex>
            </Flex>
          </Flex>
          <div className="horizontal-line"></div>
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
            {promoCode == null ? (
              <span
                style={{
                  fontSize: "18px",
                  marginLeft: "113px",
                  fontWeight: "600",
                }}
              >
                {bagitems
                  .filter((item) => item.quantity > 0)
                  .reduce((acc, cul) => {
                    return (acc = acc + cul.item.price);
                  }, 0) -
                  bagitems
                    .filter((item) => item.quantity > 0)
                    .reduce((acc, cul) => {
                      const price =
                        (cul.item.price * cul.item.discountPercentage) / 100;
                      return (acc = acc + Math.round(price));
                    }, 0)}
                $/-
              </span>
            ) : (
              <span
                style={{
                  fontSize: "18px",
                  marginLeft: "113px",
                  fontWeight: "600",
                }}
              >
                {((bagitems
                  .filter((item) => item.quantity > 0)
                  .reduce((acc, cul) => {
                    return (acc = acc + cul.item.price);
                  }, 0) -
                  bagitems
                    .filter((item) => item.quantity > 0)
                    .reduce((acc, cul) => {
                      const price =
                        (cul.item.price * cul.item.discountPercentage) / 100;
                      return (acc = acc + Math.round(price));
                    }, 0)) *
                  coupenndiscount[0]?.discountPercentage) /
                  100}
                $/-
              </span>
            )}
          </Flex>
          <div className="horizontal-line"></div>
          <Flex justify="center" style={{ margin: "16px 0px" }}>
            <Input
              placeholder="Enter Promo Code"
              ref={coupenCode}
              disabled={
                bagitems.reduce((acc, cul) => {
                  console.log(cul.quantity);
                  return (acc = acc + cul.quantity);
                }, 0) === 0
                  ? true
                  : false
              }
              style={{ marginRight: "10px", width: "200px" }}
            />
            <Button
              type="primary"
              onClick={applyPromoCode}
              disabled={
                bagitems.reduce((acc, cul) => {
                  console.log(cul.quantity);
                  return (acc = acc + cul.quantity);
                }, 0) === 0
                  ? true
                  : false
              }
              style={{ height: "35px", backgroundColor: "green" }}
            >
              Apply
            </Button>
          </Flex>
          <Flex justify="center" style={{ margin: "24px 0px" }}>
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
    </React.Fragment>
  );
};

export default Cart;
