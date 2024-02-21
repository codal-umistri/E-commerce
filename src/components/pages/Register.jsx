import {
  ConfigProvider,
  Flex,
  Image,
  Row,
  Col,
  Form,
  Input,
  Select,
  Checkbox,
  Button,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Register = () => {
  const validateAgreement = (_, value) => {
    return value
      ? Promise.resolve()
      : Promise.reject(new Error("You need to agree with Terms &Conditions"));
  };

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("Password") == value) {
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

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Row className="register_container">
        <Col span={24} style={{ textAlign: "center" }}>
          <div className="logo_container">
            <Image
              src="images/logo1.png"
              width={140}
              height={80}
              preview={false}
            />
          </div>
          <div className="content" style={{ marginTop: "20px" }}>
            <h1 style={{ color: "#37475a" }}>SignUp With BrightSpace</h1>
          </div>
          <Form
            name="registration_form"
            autoComplete="off"
            initialValues={{ remember: true }}
            onFinish={(values) => {
              console.log({ values });
            }}
            onFinishFailed={(error) => {
              console.log({ error });
            }}
          >
            <Flex justify="space-evenly" style={{ marginTop: "1.2rem" }}>
              <Form.Item
                name="First Name"
                rules={[
                  {
                    required: true,
                  },
                  {
                    whitespace: true,
                  },
                ]}
                hasFeedback
              >
                <Input
                  placeholder="First-Name"
                  style={{ height: "35px", width: "183px" }}
                />
              </Form.Item>
              <Form.Item
                name="Last Name"
                rules={[
                  {
                    required: true,
                  },
                  {
                    whitespace: true,
                  },
                ]}
                hasFeedback
              >
                <Input
                  placeholder="-Name"
                  style={{ height: "35px", width: "183px" }}
                />
              </Form.Item>
            </Flex>
            <Form.Item name="gender" rules={[{ required: true }]} hasFeedback>
              <Select
                style={{ width: "83%", height: "35px" }}
                placeholder="Select your gender"
              >
                <Select.Option value="Male">Male</Select.Option>
                <Select.Option value="Female">Female</Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="Email"
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
                placeholder="   Enter Your Email"
                style={{ width: "83%", height: "35px" }}
              />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[{ validator: validatePassword }]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="    Enter Your Password"
                style={{ width: "83%", height: "35px" }}
              />
            </Form.Item>
            <Form.Item
              name="Confirm_Password"
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
                placeholder="    Confirm Your Password"
                style={{ width: "83%", height: "35px" }}
              />
            </Form.Item>
            <Form.Item
              name="agreement"
              style={{ height: "35px" }}
              valuePropName="checked"
              rules={[
                {
                  validator: validateAgreement,
                },
              ]}
            >
              <Checkbox>
                {" "}
                Agree to Brightspace <a href="">Terms & Conditions</a>
              </Checkbox>
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
                  className="form_btn"
                  style={{ width: "50%", height: "35px" }}
                >
                  Sign Up
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

export default Register;
