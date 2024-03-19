import React from "react";
import { Row, Col, Image, Flex, Button } from "antd";

const OfflinePage = () => {



   const handleClick = ()=>
   {
     if(navigator.online)
     {
      window.location.reload();  
     }   
      else{
        alert('plz check your internt connetion')      }
   }
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
              style={{ fontSize: "18px", fontWeight: "700", color: "#222f3d" }}
            >
              Sorry, it looks like you’re unable to connect to the internet.
            Check your internet connection 
            </span>
            {/* <span style={{ fontSize: "18px" }}>
                Please turn on your Intentet-Connection
            </span> */}
          </Flex>
        </Col>
      </Row>
    </Flex>
  );
};

export default OfflinePage;
