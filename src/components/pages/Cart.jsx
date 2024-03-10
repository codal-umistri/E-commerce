import React from "react";
import { Col, Row, Flex, ConfigProvider, Button, Input, Alert } from "antd";
import { useSelector } from "react-redux";
import Cartitem from "../Cards/Cartitem";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { COUPENCODE } from "../Constants/Items";
import { loadStripe } from "@stripe/stripe-js";

const Cart = () => {
  const bagitems = useSelector((store) => store.BagItems);
  const [input, setinput] = useState(null);
  const [promoCode, setPromoCode] = useState(null);
  const [coupenndiscount, setcoupendiscount] = useState([]);

  const cancelPromoCode = () => {s
    setinput("");
    setPromoCode(null);
    setcoupendiscount([]);
  };

  const applyPromoCode = () => {
    setPromoCode(input);
    const discount = COUPENCODE.find((item) => item.Code === input);
    discount
      ? setcoupendiscount([discount])
      : (setcoupendiscount([]),
        setPromoCode(null),
        alert("There is no such Coupen-code"));
  };

  const handlePlaceOrder = async () => {
    const stripe = await loadStripe(
      import.meta.env.VITE_APP_KEY
    );
    console.log(bagitems);

    const response = await fetch(
      "http://localhost:4040/api/v1/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          products: bagitems,
          promoCode: promoCode,
        }),
      }
    );

    const session = await response.json();

    const result = stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      alert(result.error);
    }
  };

  return (
    <React.Fragment>
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
          <Flex vertical>
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
                  Price (
                  {bagitems.reduce((acc, cul) => {
                    return (acc = acc + cul.quantity);
                  }, 0)}{" "}
                  items)
                </span>
                <span style={{ fontSize: "18px" }}>Discount</span>
                <span
                  className={
                    bagitems.reduce((acc, cul) => {
                      return (acc = acc + cul.quantity);
                    }, 0)
                      ? "showdelivery"
                      : "notshowcoupen"
                  }
                >
                  Delivery Charges
                </span>
                <span
                  style={{
                    fontSize: "20px",
                    fontWeight: "650",
                  }}
                >
                  Total Price
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
                  {bagitems.reduce((acc, cul) => {
                    const price =
                      (cul.item.price *
                        cul.quantity *
                        cul.item.discountPercentage) /
                      100;
                    return (acc = acc + Math.round(price));
                  }, 0)}
                  $/-
                </span>
                <span
                  style={{ color: "green" }}
                  className={
                    bagitems.reduce((acc, cul) => {
                      return (acc = acc + cul.quantity);
                    }, 0)
                      ? "showdelivery"
                      : "notshowcoupen"
                  }
                >
                  Free
                </span>
                <Flex justify="center">
                  {promoCode == null ? (
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        marginRight: "10px",
                      }}
                    >
                      {bagitems.reduce((acc, cul) => {
                        return (acc = acc + cul.item.price * cul.quantity);
                      }, 0) -
                        bagitems.reduce((acc, cul) => {
                          const price =
                            (cul.item.price *
                              cul.quantity *
                              cul.item.discountPercentage) /
                            100;
                          return (acc = acc + Math.round(price));
                        }, 0)}
                      $/-
                    </span>
                  ) : (
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        marginRight: "10px",
                      }}
                    >
                      {bagitems.reduce((acc, cul) => {
                        return (acc = acc + cul.item.price * cul.quantity);
                      }, 0) -
                        bagitems.reduce((acc, cul) => {
                          const price =
                            (cul.item.price *
                              cul.quantity *
                              cul.item.discountPercentage) /
                            100;
                          return (acc = acc + Math.round(price));
                        }, 0) -
                        ((bagitems.reduce((acc, cul) => {
                          return (acc = acc + cul.item.price * cul.quantity);
                        }, 0) -
                          bagitems.reduce((acc, cul) => {
                            const price =
                              (cul.item.price *
                                cul.quantity *
                                cul.item.discountPercentage) /
                              100;
                            return (acc = acc + Math.round(price));
                          }, 0)) *
                          coupenndiscount[0]?.discountPercentage) /
                          100}
                      $/-
                    </span>
                  )}
                </Flex>
              </Flex>
            </Flex>
            <Flex align="center" justify="center" gap={3}>
              <span
                className={promoCode !== null ? "showcoupen" : "notshowcoupen"}
                style={{ color: "green" }}
              >
                {coupenndiscount[0]?.discountPercentage}%{" "}
              </span>
              {
                <span
                  className={promoCode !== null ? "showbadge" : "notshowcoupen"}
                  style={{ color: "green" }}
                >
                  Discount
                </span>
              }
            </Flex>
          </Flex>
          <Flex justify="space-evenly" style={{ margin: "16px 0px" }}>
            <Input
              placeholder="Enter Promo Code"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              disabled={
                bagitems.reduce((acc, cul) => {
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
                  return (acc = acc + cul.quantity);
                }, 0) === 0
                  ? true
                  : false
              }
              style={{ height: "35px", backgroundColor: "green" }}
            >
              Apply
            </Button>
            <Button
              type="primary"
              onClick={cancelPromoCode}
              disabled={
                promoCode == null ||
                bagitems.reduce((acc, cul) => {
                  return (acc = acc + cul.quantity);
                }, 0) === 0
                  ? true
                  : false
              }
              style={{ height: "35px", backgroundColor: "green" }}
            >
              Cancel
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
                onClick={() => handlePlaceOrder()}
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
