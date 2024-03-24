import React, { useState } from "react";
import { Row, Col, Image, Flex, Button, Modal } from "antd";

const OfflinePage = ({ Onretry }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    if (navigator.onLine) {
      Onretry();
    } else {
      Modal.warning({
        title: "Internet is  off",
        content: "Please check your internet connection and try again.",
        // centered:true,
        okText: "OK",
        onOk: () => {
          setIsModalOpen(false);
          Onretry();
        },
      });
    }
  };

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Row className="success_container">
        <Col span={24} style={{ textAlign: "center" }}>
          <div className="logo_container">
            <Image
              src="/images/logo1.png"
              width={140}
              height={85}
              preview={false}
            />
          </div>
          <Flex style={{ marginTop: "14px" }} vertical gap={5}>
            <span
              style={{ fontSize: "32px", fontWeight: "700", color: "#222f3d" }}
            >
              Internet is off
            </span>
            <span style={{ fontSize: "18px" }}>
              Check your internet connection and retry below.
            </span>
          </Flex>
          <Button
            style={{
              background: "green",
              color: "white",
              marginTop: "27px",
              height: "40px",
              width: "100px",
              fontWeight: "500",
              borderRadius: "20px",
            }}
            onClick={() => handleClick()}
          >
            Retry
          </Button>
        </Col>
      </Row>
    </Flex>
  );
};

export default OfflinePage;
