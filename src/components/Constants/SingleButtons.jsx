import { Button, ConfigProvider } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BagItemsactions } from "../store/Bagitems";

const SingleButtons = ({ tag, item}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  
    const handleAddtoBag = () => {
      dispatch(BagItemsactions.addtoBag({item: item, quantity:1}));
      navigate({pathname:'/cart'})
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
        onClick={()=> handleAddtoBag()}
      >
        {tag}
      </Button>
    </ConfigProvider>
  );
};

export default SingleButtons;
