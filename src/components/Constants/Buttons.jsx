import React from "react";
import { Button, ConfigProvider } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BagItemsactions } from "../store/Bagitems";

const Buttons = ({ item }) => {
  const dispatch = useDispatch();
  const bagitems = useSelector((store) => store.BagItems);

  // console.log(item.id);
  const handleAddtoBag = () => {
    dispatch(BagItemsactions.addtoBag({item: item, quantity:1}));
  };
  const handleRemoveFromBag = () => {
    dispatch(BagItemsactions.removefromBag(item.id));
  };

  return (
    <React.Fragment>
      {bagitems.find((Item) => {
        return Item.item.id == item.id;
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
