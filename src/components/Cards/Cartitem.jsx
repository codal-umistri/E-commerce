import { Flex, Image, Rate, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BagItemsactions } from "../store/Bagitems";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";

const Cartitem = ({ item }) => {
  const dispatch = useDispatch();

  const bagitems = useSelector((store) => store.BagItems);

  const handleRemoveFromBag = () => {
    dispatch(BagItemsactions.removefromBag(item.id));
  };

  const handleaddQuantity = () => {
    dispatch(BagItemsactions.addQuantity(item.id));
  };

  const handleminusQuantity = () => {
    dispatch(BagItemsactions.minusQuantity(item.id));
  };
  return (
    <div className="cart_container">
      <Flex>
        <div className="image">
          <Image
            preview={false}
            src={item.images[0]}
            height={175}
            width={245}
            style={{
              paddingTop: "7.5px",
              paddingLeft: "10px",
              borderRadius: "15px",
            }}
          />
        </div>
        <div
          className="cart_content"
          style={{ marginLeft: "2rem", marginTop: "0.3rem" }}
        >
          <Flex vertical>
            <span style={{ fontSize: "23px" }}>{item.title}</span>
            <span style={{ fontSize: "17px", marginTop: "0.3rem" }}>
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
                {bagitems.find((Item) => Item.item.id === item.id).quantity}
                <Button
                  onClick={handleminusQuantity}
                  disabled={
                    bagitems.find((Item) => Item.item.id == item.id)
                      .quantity === 0
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
    </div>
  );
};

export default Cartitem;
