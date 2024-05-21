  import { Button, ConfigProvider, Flex } from "antd";
  import { useNavigate } from "react-router-dom";

  const SeeAll = () => {
    const navigate = useNavigate();
    return (
      <div className="seeallproducts">
      {/* <Flex
        justify="center"
        style={{ marginTop: "15px" }}
      > */}
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
            className="form_btn_see_all"
            // style={{ width: "150px", height: "55px" }}
            onClick={() => navigate({pathname:'/allproducts'})}
          >
            See All Products
          </Button>
        </ConfigProvider>
      {/* </Flex> */}
      </div>
    );
  };

  export default SeeAll;
