import { Button, ConfigProvider, Image, Modal, notification } from "antd";
import { useContext, useState } from "react";
import { StateContext } from "../../App";

const SingleButtons = ({ tag, item }) => {
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
      window.location.href = "/cart";
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
        onClick={() => handleAddtoBag()}
      >
        {tag}
      </Button>
    </ConfigProvider>
  );
};

export default SingleButtons;
