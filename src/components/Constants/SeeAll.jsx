import { Button, ConfigProvider, Flex } from "antd";
import { useNavigate } from "react-router-dom";

const SeeAll = () => {
  const navigate = useNavigate();
  return (
    <Flex
      className="seeallproducts"
      justify="center"
      style={{ marginTop: "15px" }}
    >
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
          style={{ width: "25%", height: "35px" }}
          onClick={() => navigate({pathname:'/allproducts'})}
        >
          See All Products
        </Button>
      </ConfigProvider>
    </Flex>
  );
};

export default SeeAll;
