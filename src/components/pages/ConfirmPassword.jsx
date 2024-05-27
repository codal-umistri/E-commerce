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
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const CofirmPassword = () => {
  const navigate = useNavigate();
  const query = useQuery();
  const hash = query.get("hash");

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("password") == value) {
        return Promise.resolve();
      }
      return Promise.reject("The two passwords that you entered do not match.");
    },
  });

  const validatePassword = (_, value) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    const hasUppercase = uppercaseRegex.test(value);
    const hasLowercase = lowercaseRegex.test(value);
    const hasSpecialChar = specialCharRegex.test(value);

    if (!value) {
      return Promise.reject(new Error("Please Enter Your 'Password'"));
    } else if (!hasUppercase) {
      return Promise.reject(
        new Error("Password must contain atleast one 'Uppercase' letter")
      );
    } else if (!hasLowercase) {
      return Promise.reject(
        new Error("Password must contain atleast one 'Lowercase' letter")
      );
    } else if (!hasSpecialChar) {
      return Promise.reject(
        new Error("Password must contain atleast one 'Special-character'")
      );
    } else if (value.length < 12) {
      return Promise.reject(new Error("Password must be 12-character long"));
    }

    return Promise.resolve();
  };

  const handleSubmit = async (data) => {
    const response = await fetch(
      "http://localhost:4040/api/v1/forgot-password",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, hash }),
      }
    );
    const res = await response.json();
    if (res.success) {
      navigate("/login");
    } else {
      console.log("error while updated password");
    }
  };

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Row className="confirmpassword_container">
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
                Enter your new password and confirm it below.
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
              name="password"
              rules={[{ validator: validatePassword }]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="    Enter Your New Password"
                style={{ width: "89%", height: "40px" }}
              />
            </Form.Item>
            <Form.Item
              name="confirm_password"
              rules={[
                {
                  required: true,
                },
                validateConfirmPassword,
              ]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="  Confirm Your New Password"
                style={{ width: "89%", height: "40px" }}
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
                  style={{ width: "35%", height: "40px", marginLeft: "95px" }}
                >
                  Save
                </Button>
              </ConfigProvider>
            </Form.Item>
          </Form>
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

export default CofirmPassword;
