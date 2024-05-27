import {
  ConfigProvider,
  Form,
  Input,
  Button,
  Row,
  Col,
  Image,
  Flex,
} from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Otp = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const hash = query.get("hash");
  const [errormsg, SetErrormsg] = useState(null);

  const handleSubmit = async (data) => {
    const response = await fetch("http://localhost:4040/api/v1/check-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data, hash }),
    });

    const res = await response.json();
    if (res.success) {
      navigate(`/confirm-password?hash=${hash}`);
    } else {
      SetErrormsg("Check your Otp again");
    }
  };

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Row className="forgotpassword_container">
        <Col span={17} offset={4}>
          <Flex justify="center">
            <div className="logo_container" style={{ marginRight: "12.7px" }}>
              <Image
                src="images/logo1.png"
                width={140}
                height={82}
                preview={false}
              />
            </div>
          </Flex>
          <Flex justify="center">
            <div
              className="content"
              style={{ marginRight: "12.5px", marginTop: "5px" }}
            >
              <span style={{ fontWeight: "600", color: "#37475a" }}>
                Enter the email address associated with your account and
                we&apos;ll send you alink to reset you password
              </span>
            </div>
          </Flex>
          <Form
            name="normal_forgot_password"
            autoComplete="off"
            initialValues={{ remember: true }}
            style={{ marginTop: "30px" }}
            onFinish={(values) => {
              handleSubmit(values);
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <Form.Item
              name="otp"
              rules={[
                {
                  required: true,
                  message: "Please enter the OTP",
                },
                {
                  len: 5,
                  message: "OTP must be 5 characters",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Enter OTP"  onChange={()=> SetErrormsg(null)} />
              {errormsg && (
              <span className={errormsg ? "showerror" : "notshowerror"}>
                {errormsg}
              </span>
            )}
            </Form.Item>
          
            <Form.Item>
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
                  classNames="form_btn"
                  style={{ width: "55%", height: "35px", marginLeft: "70px" }}
                >
                  Verify OTP
                </Button>
              </ConfigProvider>
            </Form.Item>
          </Form>

          <div style={{ marginTop: "20px", marginLeft: "70px" }}>
            <span>Don&apos;t Have an Account? </span>
            <Link to="/register">Register</Link>
          </div>
        </Col>
      </Row>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#37475a" }}>
          © 2024 BrightSpace. All Rights Reserved.
        </p>
      </div>
    </Flex>
  );
};

export default Otp;
