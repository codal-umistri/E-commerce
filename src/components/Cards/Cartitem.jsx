import { Flex, Image, Rate, Button } from "antd";
import { useDispatch } from "react-redux";
import { BagItemsactions } from "../store/Bagitems";

const Cartitem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveFromBag = () => {
    dispatch(BagItemsactions.removefromBag(item.id));
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
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default Cartitem;
