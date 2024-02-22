import { Divider } from "antd";

const Dividers = ({ tag }) => {
  return (
    <Divider style={{ borderColor: "#37475a", marginTop: "2rem" }}>
      <h2>{tag}</h2>
    </Divider>
  );
};

export default Dividers;
