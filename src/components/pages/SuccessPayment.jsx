import React from "react";
import { Row, Col, Image, Flex, Button } from "antd";
import { useNavigate } from "react-router-dom";

const SuccessPayment = () => {
  const navigate = useNavigate();

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Row className="success_container">
        <Col span={24} style={{ textAlign: "center" }}>
          <div className="logo_container">
            <Image
              src="images/logo1.png"
              width={140}
              height={85}
              preview={false}
            />
          </div>
          <Flex style={{ marginTop: "14px" }} vertical gap={5}>
            <span
              style={{ fontSize: "32px", fontWeight: "700", color: "#222f3d" }}
            >
              Payment SuccessFull
            </span>
            <span style={{ fontSize: "18px" }}>
              Thank you for your payment!
            </span>
          </Flex>
          <Button
            style={{
              background: "green",
              color: "white",
              marginTop: "27px",
              height: "40px",
              borderRadius: "20px",
            }}
            onClick={() => navigate("/allproducts")}
          >
            Continue Shopping
          </Button>
        </Col>
      </Row>
    </Flex>
  );
};

export default SuccessPayment;
