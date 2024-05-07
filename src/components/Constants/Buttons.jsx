import React, { useContext, useState } from "react";
import { Button, ConfigProvider, Image, Modal, notification } from "antd";
import { StateContext } from "../../App";

const Buttons = ({ item }) => {
  const [isModal2Open, setIsModal2Open] = useState(false);
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
      setCart([...cart, resposne.item]);
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

  return (
    <React.Fragment>
      {cart.find((Item) => {
        return Item.id == item.id;
      }) ? (
        <Button
          type="primary"
          htmlType="submit"
          className="form_btn"
          style={{ width: "35%", height: "40px", backgroundColor: "red" }}
          onClick={handleRemoveFromBag}
        >
          remove from cart
        </Button>
      ) : (
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
            style={{ width: "35%", height: "40px" }}
            onClick={handleAddtoBag}
          >
            Add To Cart
          </Button>
        </ConfigProvider>
      )}
    </React.Fragment>
  );
};

export default Buttons;
