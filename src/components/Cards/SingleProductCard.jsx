import React, { useState } from "react";
import { Card, Image, Button, Flex, notification, Modal } from "antd";
import { Rate } from "antd";
import { FaDollarSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { BagItemsactions } from "../store/Bagitems";
import { useNavigate } from "react-router-dom";

const SingleProductCard = ({ item }) => {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const dispatch = useDispatch();
  const bagitems = useSelector((store) => store.BagItems);
  const navigate = useNavigate();

  const openNotification = (type, message, item) => {
    notification[type]({
      message: message,
      description: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            src={item.images[0]}
            width={50}
            height={50}
            style={{ marginRight: 10 }}
          />
          <span>{item.title}</span>
        </div>
      ),
      placement: "bottomRight",
    });
  };

  const handleAddtoBag = () => {
    if (localStorage.getItem("Auth")) {
      dispatch(BagItemsactions.addtoBag({ item: item, quantity: 1 }));
      openNotification("success", "Item added to cart", item);
    } else {
      Modal.warning({
        title: "Unauthorized",
        content: "You are not Authenticated",
        centered:true,
        okText: "OK",
        onOk: () => {
          setIsModal1Open(false);
        },
      })
    }
  };

  const handleRemoveFromBag = () => {
    if (localStorage.getItem("Auth")) {
      dispatch(BagItemsactions.removefromBag(item.id));
      openNotification("error", "Item removed from cart", item);
    } else {
      Modal.warning({
        title: "Unauthorized",
        content: "You are not Authenticated",
        centered:true,
        okText: "OK",
        onOk: () => {
          setIsModal2Open(false);
        },
      })
    }
  };

  const handleClick = () => {
    navigate({
      pathname: `/single-product/${item.id}`,
    });
  };

  return (
    <React.Fragment>
      <Card
        title={item.title}
        bordered={true}
        style={{
          width: 370,
          height: 415,
          marginTop: 13,
          boxShadow: "4px 8px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          border: "2px solid #37475a",
        }}
        cover={
          <div style={{ padding: "13px" }}>
            <Image
              alt="example"
              src={item.images[0]}
              preview={false}
              style={{
                borderRadius: "0",
                width: 250,
                height: 120,
                marginLeft: "50px",
              }}
              onClick={() => {
                handleClick();
              }}
            />
          </div>
        }
      >
        <div className="discription">{item.description.slice(0, 35)}</div>
        <div className="rating">
          <Rate allowHalf disabled defaultValue={item.rating} />
        </div>
        <div className="price">
          <Flex justify="center" align="center">
            {item.price} <FaDollarSign />
          </Flex>
        </div>
        <Flex align="center" justify="center" className="card">
          {bagitems.find((Item) => {
            return Item.item.id == item.id;
          }) ? (
            <Button
              type="primary"
              htmlType="submit"
              className="form_btn"
              style={{
                width: "50%",
                height: "35px",
                backgroundColor: "red",
              }}
              onClick={handleRemoveFromBag}
            >
              remove from cart
            </Button>
          ) : (
            <Button
              type="primary"
              htmlType="submit"
              className="form_btn"
              style={{ width: "50%", height: "35px" }}
              onClick={handleAddtoBag}
            >
              Add To Cart
            </Button>
          )}
        </Flex>
      </Card>
    </React.Fragment>
  );
};

export default SingleProductCard;
