import { Card, Image, Button, Flex, ConfigProvider } from "antd";
import { Rate } from "antd";
import { FaDollarSign } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { BagItemsactions } from "../store/Bagitems";

const SingleProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const bagitems = useSelector((store) => store.BagItems);

  const handleAddtoBag = () => {
    dispatch(BagItemsactions.addtoBag(item));
  };
  const handleRemoveFromBag = () => {
    dispatch(BagItemsactions.removefromBag(item.id));
  };

  return (
    <>
      <Card
        title={item.title}
        bordered={true}
        style={{
          width: 370,
          height: 415,
          borderRadius: "0",
          marginTop: 13,
          boxShadow: "4px 8px 8px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          border:"2px solid #37475a "
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
            return Item.id == item.id;
          }) ? (
            <Button
              type="primary"
              htmlType="submit"
              className="form_btn"
              style={{ width: "50%", height: "35px", backgroundColor: "red" }}
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
                style={{ width: "50%", height: "35px" }}
                onClick={handleAddtoBag}
              >
                Add To Cart
              </Button>
            </ConfigProvider>
          )}
        </Flex>
      </Card>
    </>
  );
};

export default SingleProductCard;
