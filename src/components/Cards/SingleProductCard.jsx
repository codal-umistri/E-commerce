import React, { useContext, useState } from "react";
import { Card, Image, Button, Flex, notification, Modal } from "antd";
import { Rate } from "antd";
import { FaDollarSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../App";

const SingleProductCard = ({ item }) => {
  const [isModal2Open, setIsModal2Open] = useState(false);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("Auth"));
  const { cart, setCart } = useContext(StateContext);

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

  const handleAddtoBag = async () => {
    if (localStorage.getItem("Auth")) {
      const res = await fetch("http://localhost:4040/api/v1/addproductincart", {
        method: "POST",
        headers: {
          authorization: `Bearer ${token.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });

      const resposne = await res.json();
      console.log(resposne);
      cart ? setCart([...cart, resposne.item]) : setCart([resposne.item]);
      openNotification("success", "Item added to cart", item);
    } else {
      Modal.warning({
        title: "Unauthorized",
        content: "You are not Authenticated",
        centered: true,
        okText: "OK",
        onOk: () => {
          setIsModal2Open(false);
        },
      });
    }
  };

  const handleRemoveFromBag = async () => {
    if (localStorage.getItem("Auth")) {
      const res = await fetch(
        "http://localhost:4040/api/v1/removeproductfromcart",
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${token.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      const resposne = await res.json();
      console.log(resposne);
      // Filter out the item with the same product_id from the cart
      //  const updatedCart = cart.filter(cartItem => cartItem.id !== item.id);
      const updatedCart = cart.filter(
        (cartItem) => cartItem.id !== resposne.item.product_id
      );
      setCart(updatedCart);
      openNotification("error", "Item removed from cart", item);
    } else {
      Modal.warning({
        title: "Unauthorized",
        content: "You are not Authenticated",
        centered: true,
        okText: "OK",
        onOk: () => {
          setIsModal2Open(false);
        },
      });
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
          {cart?.find((Item) => {
            // console.log(Item)
            return Item.id === item.id;
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
