import {
  ConfigProvider,
  Form,
  Input,
  Button,
  Row,
  Col,
  Image,
  Flex,
  Checkbox,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const validatePassword = (_, value) => {
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    const hasUppercase = uppercaseRegex.test(value);
    const hasLowercase = lowercaseRegex.test(value);
    const hasSpecialChar = specialCharRegex.test(value);

    if (!value) {
      return Promise.reject(new Error("Please Enter Your Password"));
    } else if (!hasUppercase) {
      return Promise.reject(
        new Error("Password must contain atleast one Uppercase letter")
      );
    } else if (!hasLowercase) {
      return Promise.reject(
        new Error("Password must contain atleast one Lowercase letter")
      );
    } else if (!hasSpecialChar) {
      return Promise.reject(
        new Error("Password must contain atleast one Special-character")
      );
    } else if (value.length < 12) {
      return Promise.reject(new Error("Password must be 12 character long"));
    }

    return Promise.resolve();
  };

  const handleLogin = async (data) => {
    const response = await fetch("http://localhost:4040/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    if (res.auth) {
      localStorage.setItem("Auth", JSON.stringify(res.auth));
      navigate("/");
    } else {
      console.log("no user found")
    }
  };
  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Row className="login_container">
        <Col span={24} style={{ textAlign: "center" }}>
          <div className="logo_container">
            <Image
              src="images/logo1.png"
              width={140}
              height={80}
              preview={false}
            />
          </div>
          <div
            className="content"
            style={{ marginTop: "20px", margin: "auto" }}
          >
            <h1 style={{ color: "#37475a" }}>Login to BrightSpace</h1>
          </div>
          <Form
            name="login_form"
            autoComplete="off"
            initialValues={{ remember: true }}
            style={{ marginTop: "30px" }}
            onFinish={(values) => {
              // localStorage.clear();
              // const dataToStore = {
              //   Email: values.Email,
              //   Password: values.Password,
              //   loginstatus: true,
              // };
              // localStorage.setItem("logindata", JSON.stringify(dataToStore));
              // navigate({pathname:'/'});
              localStorage.clear();
              handleLogin(values);
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                },
                {
                  type: "email",
                  message: "Please Enter Valid 'Email'",
                },
              ]}
              hasFeedback
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Enter Your Email"
                style={{ width: "82%", height: "40px" }}
              />
            </Form.Item>
            <Form.Item
              name="password"
              style={{ all: "unset" }}
              rules={[{ validator: validatePassword }]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                type="password"
                placeholder=" Enter Your Password"
                style={{ width: "82%", height: "40px" }}
              />
            </Form.Item>
            <Flex
              style={{ marginTop: "0.3rem" }}
              gap={80}
              justify="space-around"
            >
              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <Form.Item name="forgot_password">
                <Link to="/forgot-password">Forgot Password?</Link>
              </Form.Item>
            </Flex>
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
                  className="form_btn"
                  style={{ width: "50%", height: "35px" }}
                >
                  Log in
                </Button>
              </ConfigProvider>
            </Form.Item>
          </Form>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
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

export default Login;
