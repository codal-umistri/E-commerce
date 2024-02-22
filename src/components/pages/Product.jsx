import { Flex, Row, Col, Image } from "antd";
import { Rate } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Buttons from "../Constants/Buttons";
import SingleButtons from "../Constants/SingleButtons";
import React from "react";

const Product = () => {
  const { id } = useParams();
  const item = JSON.parse(localStorage.getItem("Allproducts")).filter(
    (item) => {
      return item.id === Number(id);
    }
  );
  const [imgsrc, Setimgsrc] = useState(item[0]?.images[0]);
  const bagitems = useSelector((store) => store.BagItems);

  useEffect(() => {
    Setimgsrc(item[0]?.images[0]);
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
              {item[0]?.images?.map((item,index) => (
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
              {item[0]?.title}
            </span>
            <span style={{ fontSize: "20px", fontWeight: "500" }}>
              {item[0]?.description}
            </span>
            <Flex gap={8}>
              <span>{item[0]?.rating}</span>
              <Rate allowHalf disabled defaultValue={item[0]?.rating} />
            </Flex>
            <Flex align="center" gap={25}>
              <Flex align="center" gap={10}>
                <span style={{ fontSize: "22px", color: "#CC0C39" }}>
                  -{item[0].discountPercentage}%
                </span>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "475",
                    color: "#0F1111",
                  }}
                >
                  {item[0].price} $/-
                </span>
              </Flex>
              <span style={{ fontSize: "18px", color: "#565959" }}>
                <del>
                  {Math.round(
                    (item[0].price * 100) / (100 - item[0].discountPercentage)
                  )}
                  $
                </del>{" "}
                (M.R.P)
              </span>
            </Flex>
            <Flex justify="center" style={{ marginTop: "10px" }}>
              <span
                style={
                  item[0].stock < 35
                    ? { fontSize: "19px", color: "#CC0C39" }
                    : { fontSize: "19px", color: "green" }
                }
              >
                Availabe in stock :- {item[0].stock}
              </span>
            </Flex>
            <Flex
              style={{ marginTop: "25px" }}
              justify={
                bagitems.find((Item) => {
                  return Item.id == item[0].id;
                })
                  ? "center"
                  : "space-around"
              }
            >
              {bagitems.find((Item) => {
                return Item.id == item[0].id;
              }) ? (
                <Buttons item={item[0]} />
              ) : (
                <React.Fragment>
                  <Buttons item={item[0]} />
                  <SingleButtons tag={"Buy Now"} item={item[0]} />
                  </React.Fragment>
              )}
            </Flex>
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};

export default Product;
