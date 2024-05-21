import { Flex, Row, Col, Image } from "antd";
import { Rate } from "antd";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Buttons from "../Constants/Buttons";
import SingleButtons from "../Constants/SingleButtons";
import React from "react";
import { StateContext } from "../../App";

const Product = () => {
  const { id } = useParams();
  const { cart } = useContext(StateContext);
  const [imgsrc, Setimgsrc] = useState();
  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:4040/api/v1/getproduct?id=${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setItem(data.item);

        Setimgsrc(data.item.images[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <Flex justify="center">
      <Row className="preview_product">
        <Col xs={24} md={24} lg={24} xl={11}>
          <div className="preview_part" style={{ overflow: "hidden" }}>
            <div className="preview_container">
              <Image
                className="preview_image"
                src={imgsrc}
                preview={{
                  mask: <div />,
                }}
              />
            </div>
            <div className="more_images">
              {item.images?.map((item, index) => (
                <Image
                  src={item}
                  onMouseOver={() => Setimgsrc(item)}
                  preview={false}
                  className="more_image"
                  key={index}
                ></Image>
              ))}
            </div>
          </div>
        </Col>
        <Col
          xs={24}
          md={24}
          lg={24}
          xl={10}
          style={{ marginTop: "18px", marginLeft: "15px" }}
        >
          <div className="item_content">
            <span className="product_details">Product Details</span>
            <span className="preview_title">{item.title}</span>
            <span className="preview_description">{item.description}</span>
            <Flex gap={8} align="center">
              <span className="preview_rating">{item.rating}</span>
              {item.rating && (
                <Rate
                  className="preview_rate"
                  allowHalf
                  disabled
                  defaultValue={parseInt(item.rating)}
                />
              )}
            </Flex>
            <Flex align="center" gap={25}>
              <Flex align="center" gap={10}>
                <span className="preview_discount">
                  -{item.discountPercentage}%
                </span>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "475",
                    color: "#0F1111",
                  }}
                  className="preview_price"
                >
                  {item.price} $/-
                </span>
              </Flex>
              <span className="preview_discounted_price">
                <del>
                  {Math.round(
                    (item.price * 100) / (100 - item.discountPercentage)
                  )}
                  $
                </del>{" "}
                (M.R.P)
              </span>
            </Flex>
            <Flex justify="center" style={{ marginTop: "10px" }}>
              <span
                style={
                  item.stock < 35
                    ? { fontSize: "22px", color: "#CC0C39" }
                    : { fontSize: "22px", color: "green" }
                }
              >
                Availabe in stock :- {item.stock}
              </span>
            </Flex>
            {item.id && (
              <Flex
                justify={
                  cart.find((Item) => {
                    return Item.id == item.id;
                  })
                    ? "center"
                    : "space-around"
                }
              >
                {cart.find((Item) => {
                  return Item.id == item.id;
                }) ? (
                  <Buttons item={item} />
                ) : (
                  <React.Fragment>
                    <Buttons item={item} />
                    <SingleButtons tag={"Buy Now"} item={item} />
                  </React.Fragment>
                )}
              </Flex>
            )}
          </div>
        </Col>
      </Row>
    </Flex>
  );
};

export default Product;
