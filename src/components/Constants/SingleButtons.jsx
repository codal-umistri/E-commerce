import { Button, ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BagItemsactions } from "../store/Bagitems";

const SingleButtons = ({ tag, item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleAddtoBag = () => {
      dispatch(BagItemsactions.addtoBag(item));
      navigate('/cart')
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
        onClick={handleAddtoBag}
      >
        {tag}
      </Button>
    </ConfigProvider>
  );
};

export default SingleButtons;
