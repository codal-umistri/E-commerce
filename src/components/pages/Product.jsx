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
      <Row
        style={{
          backgroundColor: "white",
          height: "fit-content",
          minHeight: "fit-content",
          width: "90%",
          marginTop: "15px",
          border: "2px solid black",
        }}
      >
        <Col span={13}>
          <Flex gap={13} vertical style={{ overflow: "hidden" }}>
            <div
              style={{
                overflow: "hidden",
                marginLeft: "25px",
                marginTop: "25px",
                borderRadius: "15px",
              }}
            >
              <Image
                src={imgsrc}
                width={620}
                height={520}
                preview={{
                  mask: <div />,
                }}
                style={{ border: "1px solid black", borderRadius: "15px" }}
              />
            </div>
            <Flex
              style={{
                width: "620px",
                marginTop: "15px",
                marginLeft: "15px",
                marginBottom: "15px",
              }}
              justify="space-evenly"
              align="center"
            >
              {item.images?.map((item, index) => (
                <Image
                  height={85}
                  width={85}
                  src={item}
                  onMouseOver={() => Setimgsrc(item)}
                  preview={false}
                  style={{
                    border: "1px solid black",
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                  key={index}
                ></Image>
              ))}
            </Flex>
          </Flex>
        </Col>
        <Col span={10} style={{ marginTop: "18px" }}>
          <Flex className="item_content" vertical gap={13}>
            <h1 style={{ color: "#37475a" }}>Product Details</h1>
            <span style={{ fontSize: "27px", fontWeight: "500" }}>
              {item.title}
            </span>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>
              {item.description}
            </span>
            <Flex gap={8}>
              <span>{item.rating}</span>
              {item.rating && (
                <Rate allowHalf disabled  defaultValue={parseInt(item.rating)} />
              )}
            </Flex>
            <Flex align="center" gap={25}>
              <Flex align="center" gap={10}>
                <span style={{ fontSize: "22px", color: "#CC0C39" }}>
                  -{item.discountPercentage}%
                </span>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "475",
                    color: "#0F1111",
                  }}
                >
                  {item.price} $/-
                </span>
              </Flex>
              <span style={{ fontSize: "18px", color: "#565959" }}>
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
                    ? { fontSize: "19px", color: "#CC0C39" }
                    : { fontSize: "19px", color: "green" }
                }
              >
                Availabe in stock :- {item.stock}
              </span>
            </Flex>
            {item.id &&
            <Flex
              style={{ marginTop: "25px" }}
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
}
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};

export default Product;
