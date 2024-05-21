import React, { useContext } from "react";
import { Col, Row, Flex, ConfigProvider, Button, Input, Modal } from "antd";
import Cartitem from "../Cards/Cartitem";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import { COUPENCODE } from "../Constants/Items";
import { loadStripe } from "@stripe/stripe-js";
import { StateContext } from "../../App";

const Cart = () => {
  // const cart = useSelector((store) => store.cart);
  const [input, setinput] = useState(null);
  const [promoCode, setPromoCode] = useState(null);
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [coupenndiscount, setcoupendiscount] = useState([]);
  const token = JSON.parse(localStorage.getItem("Auth"));

  const { cart } = useContext(StateContext);

  const cancelPromoCode = () => {
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
        Modal.warning({
          title: "Invalid Coupon Code",
          content: "The coupon code you entered is invalid or not applicable.",
          okText: "OK",
          onOk: () => {
            setIsModal1Open(false);
            // eslint-disable-next-line no-undef
            Onretry();
          },
        }));
  };

  const handlePlaceOrder = async () => {
    if (!localStorage.getItem("Auth")) {
      Modal.warning({
        title: "Unauthorized",
        content: "You are not Authenticated",
        okText: "OK",
        onOk: () => {
          setIsModal2Open(false);
          // eslint-disable-next-line no-undef
          Onretry();
        },
      });
    } else {
      const stripe = await loadStripe(import.meta.env.VITE_APP_KEY);

      const response = await fetch(
        "http://localhost:4040/api/v1/create-checkout-session",
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            products: cart,
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
    }
  };

  return (
    <React.Fragment>
      <Row
        style={{ marginTop: "1rem", backgroundColor: "transparent" }}
        className="row"
      >
        <Col xs={24} md={24} lg={17} xl={16} className="cart_item">
          {cart?.length ? (
            cart.map((item) => <Cartitem item={item} key={item.id} />)
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
        <Col xs={24} md={24} lg={6} xl={6}>
          <div className="price_container">
            <Flex vertical>
              <Flex justify="center">
                <span
                  className="price_details"
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
                  <span style={{ fontSize: "18px" }} className="price_info">
                    Price (
                    {cart.reduce((acc, cul) => {
                      return (acc = acc + cul.quantity);
                    }, 0)}{" "}
                    items)
                  </span>
                  <span style={{ fontSize: "18px" }} className="discount">
                    Discount
                  </span>
                  <span
                    className={
                      cart.reduce((acc, cul) => {
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
                    className="total_price"
                  >
                    Total Price
                  </span>
                </Flex>
                <Flex vertical gap={20}>
                  <span style={{ fontSize: "18px" }} className="price_info">
                    {cart.reduce((acc, cul) => {
                      return (acc = acc + cul.price * cul.quantity);
                    }, 0)}
                    $/-
                  </span>
                  <span
                    style={{
                      fontSize: "18px",
                      color: "green",
                      marginRight: "10px",
                    }}
                    className="discount"
                  >
                    -
                    {cart.reduce((acc, cul) => {
                      const price =
                        (cul.price * cul.quantity * cul.discountPercentage) /
                        100;
                      return (acc = acc + Math.round(price));
                    }, 0)}
                    $/-
                  </span>
                  <span
                    style={{ color: "green" }}
                    className={
                      cart.reduce((acc, cul) => {
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
                        className="total_price"
                      >
                        {cart.reduce((acc, cul) => {
                          return (acc = acc + cul.price * cul.quantity);
                        }, 0) -
                          cart.reduce((acc, cul) => {
                            const price =
                              (cul.price *
                                cul.quantity *
                                cul.discountPercentage) /
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
                        className="total_price"
                      >
                        {cart.reduce((acc, cul) => {
                          return (acc = acc + cul.price * cul.quantity);
                        }, 0) -
                          cart.reduce((acc, cul) => {
                            const price =
                              (cul.price *
                                cul.quantity *
                                cul.discountPercentage) /
                              100;
                            return (acc = acc + Math.round(price));
                          }, 0) -
                          ((cart.reduce((acc, cul) => {
                            return (acc = acc + cul.price * cul.quantity);
                          }, 0) -
                            cart.reduce((acc, cul) => {
                              const price =
                                (cul.price *
                                  cul.quantity *
                                  cul.discountPercentage) /
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
                  className={
                    promoCode !== null ? "showcoupen" : "notshowcoupen"
                  }
                  style={{ color: "green" }}
                >
                  {coupenndiscount[0]?.discountPercentage}%{" "}
                </span>
                {
                  <span
                    className={
                      promoCode !== null ? "showbadge" : "notshowcoupen"
                    }
                    style={{ color: "green" }}
                  >
                    Discount
                  </span>
                }
              </Flex>
            </Flex>
            <div className="promo_code">
              <Input
                placeholder="Enter Promo Code"
                value={input}
                onChange={(e) => setinput(e.target.value)}
                disabled={
                  cart.reduce((acc, cul) => {
                    return (acc = acc + cul.quantity);
                  }, 0) === 0
                    ? true
                    : false
                }
                style={{ marginRight: "10px", width: "200px" }}
              />
              <Button
                type="primary"
                className="apply"
                onClick={applyPromoCode}
                disabled={
                  cart.reduce((acc, cul) => {
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
                className="cancel"
                onClick={cancelPromoCode}
                disabled={
                  promoCode == null ||
                  cart.reduce((acc, cul) => {
                    return (acc = acc + cul.quantity);
                  }, 0) === 0
                    ? true
                    : false
                }
                style={{ height: "35px", backgroundColor: "green" }}
              >
                Cancel
              </Button>
            </div>
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
                  disabled={
                    cart.reduce((acc, cul) => {
                      return (acc = acc + cul.quantity);
                    }, 0) === 0
                      ? true
                      : false
                  }
                  style={{ width: "50%", height: "35px" }}
                  onClick={() => handlePlaceOrder()}
                >
                  PLACE ORDER
                </Button>
              </ConfigProvider>
            </Flex>
          </div>
        </Col>
      </Row>
      <Footer />
    </React.Fragment>
  );
};

export default Cart;
