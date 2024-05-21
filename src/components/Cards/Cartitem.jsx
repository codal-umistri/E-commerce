import { useContext, useState } from "react";
import { Flex, Image, Rate, Button, notification, Modal } from "antd";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../App";

const Cartitem = ({ item }) => {
  const navigate = useNavigate();
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [expiredModalVisible, setExpiredModalVisible] = useState(false);
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
      //  Filter out the item with the same product_id from the cart
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

  const handleaddQuantity = async () => {
    if (localStorage.getItem("Auth")) {
      const res = await fetch("http://localhost:4040/api/v1/add-quantity", {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const resposne = await res.json();
      if (resposne.error_code == "Expired") {
        setExpiredModalVisible(true);
      } else {
        const updatedCart = cart.map((cartItem) => {
          if (cartItem.id === resposne.item.product_id) {
            return { ...cartItem, quantity: resposne.item.quantity };
          }
          return cartItem;
        });
        setCart(updatedCart);
      }
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

  const handleminusQuantity = async () => {
    if (localStorage.getItem("Auth")) {
      const res = await fetch("http://localhost:4040/api/v1/minus-quantity", {
        method: "PATCH",
        headers: {
          authorization: `Bearer ${token.token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      });
      const resposne = await res.json();
      if (resposne.error_code == "Expired") {
        setExpiredModalVisible(true);
      } else {
        const updatedCart = cart.map((cartItem) => {
          if (cartItem.id === resposne.item.product_id) {
            return { ...cartItem, quantity: resposne.item.quantity };
          }
          return cartItem;
        });
        setCart(updatedCart);
      }
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
  const handleModalOk = () => {
    setExpiredModalVisible(false);
    window.location.href = "/login";
  };

  return (
    <div className="cart_container">
      <Flex>
        <div className="image">
          <Image
           className="cart_image"
            preview={false}
            src={item.images[0]}
            height={175}
            width={245}
            style={{
              paddingTop: "7.5px",
              paddingLeft: "10px",
              borderRadius: "15px",
            }}
            onClick={() => {
              handleClick();
            }}
          />
        </div>
        <div
          className="cart_content"
          style={{ marginLeft: "2rem", marginTop: "0.3rem" }}
        >
          <Flex vertical>
            <span className="item_title" style={{ fontSize: "23px" }}>{item.title}</span>
            <span  className="item_description" style={{ fontSize: "17px", marginTop: "0.3rem" }}>
              {item.description.slice(0, 85)}
            </span>
            <Flex className="rating" vertical>
              <Rate allowHalf disabled defaultValue={item.rating} />
              <span>{Number(item.rating).toFixed(2)}</span>
            </Flex>
            <Flex align="center" gap={12}>
              <span style={{ fontSize: "22px", marginTop: "0.3rem" }}>
                {item.price} $/-
              </span>
              <span
                style={{
                  fontSize: "15px",
                  marginTop: "0.3rem",
                  fontWeight: "500",
                  color: "green",
                }}
              >
                {item.discountPercentage}% Off
              </span>
            </Flex>
            <Flex gap={40}>
              <Button
                type="primary"
                htmlType="submit"
                className="form_btn"
                style={{
                  width: "200px",
                  height: "35px",
                  backgroundColor: "red",
                  marginTop: "10px",
                }}
                onClick={handleRemoveFromBag}
              >
                remove from cart
              </Button>
              <Flex
                style={{ marginTop: "8px", fontSize: "17px" }}
                align="center"
                gap={20}
              >
                <Button onClick={handleaddQuantity}>
                  <PlusCircleOutlined />
                </Button>
                {cart.find((Item) => Item.id === item.id).quantity}
                <Button
                  onClick={handleminusQuantity}
                  disabled={
                    cart.find((Item) => Item.id === item.id).quantity === 1
                      ? true
                      : false
                  }
                >
                  <MinusCircleOutlined />
                </Button>
              </Flex>
            </Flex>
          </Flex>
        </div>
      </Flex>
      <Modal
        title="Session Expired"
        visible={expiredModalVisible}
        centered
        onOk={handleModalOk}
        okText="OK"
        cancelButtonProps={{ style: { display: "none" } }}
      >
        <p>Your session has expired. You need to log in again.</p>
      </Modal>
    </div>
  );
};

export default Cartitem;
