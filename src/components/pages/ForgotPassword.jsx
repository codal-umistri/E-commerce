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
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
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
                Enter the email address associated with your account and we&apos;ll
                send you alink to reset you password
              </span>
            </div>
          </Flex>
          <Form
            name="normal_forgot_password"
            autoComplete="off"
            initialValues={{ remember: true }}
            style={{ marginTop: "30px" }}
            onFinish={(values) => {
              console.log({ values });
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <Form.Item
              name="Email"
              rules={[
                {
                  type: "email",
                  message: "Please Enter Valid 'Email'",
                },
                {
                  required: true,
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Enter Your Email"
                style={{ width: "92%", height: "40px" }}
              />
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
                  Send Reset Link
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

export default ForgotPassword;
