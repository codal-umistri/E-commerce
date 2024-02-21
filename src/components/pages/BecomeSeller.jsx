import React, { useState } from "react";
import {
  Flex,
  Row,
  Col,
  Image,
  Form,
  Input,
  Button,
  Select,
  Checkbox,
  ConfigProvider,
} from "antd";
import { STATES } from "../Constants/Items";
import FormItem from "antd/es/form/FormItem";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useForm } from "antd/es/form/Form";

const BecomeSeller = () => {
  const [form] = useForm();
  const [SelectedState, SetSelectedState] = useState(false);
  const [citySelected, setCitySelected] = useState(false);
  const [cities, setCities] = useState([]);

  const handleCityChange = (selectedCity) => {
    if (selectedCity) {
      setCitySelected(true);
    } else {
      setCitySelected(false);
    }
  };

  const handleStateChange = (selectedState) => {
    SetSelectedState(selectedState ? true : false);
    const selectedStateObject = STATES.find(
      (state) => state.value === selectedState
    );
    const selectedStateCities = selectedStateObject
      ? selectedStateObject.cities
      : [];
    setCities(selectedStateCities);
  };

  const validateFirstName = (_, value) => {
    const pattern = /[^a-zA-Z]/;
    if (!value || value.trim() === "") {
      return Promise.reject("'First-Name' is required");
    } else if (value && value.trim() !== value) {
      return Promise.reject("Whitespace is not allowed");
    } else if (pattern.test(value)) {
      return Promise.reject("First-Name only contains Alphabets!");
    }

    return Promise.resolve();
  };

  const validateLastName = (_, value) => {
    const pattern = /[^a-zA-Z]/;
    if (!value || value.trim() === "") {
      return Promise.reject("'Last-Name' is required");
    } else if (value && value.trim() !== value) {
      return Promise.reject("Whitespace is not allowed");
    } else if (pattern.test(value)) {
      return Promise.reject("Last-Name only contains Alphabets!");
    }

    return Promise.resolve();
  };

  const validateBusinessName = (_, value) => {
    const pattern = /[^a-zA-Z]/;
    if (!value || value.trim() === "") {
      return Promise.reject("'Business-Name' is required");
    } else if (value && value.trim() !== value) {
      return Promise.reject("Whitespace is not allowed");
    } else if (pattern.test(value)) {
      return Promise.reject("Business-Name only contains Alphabets!");
    } else if (value.length < 6) {
      return Promise.reject("Business-Name must 6 charcters Long!");
    }

    return Promise.resolve();
  };

  const validateGSTNumber = (_, value) => {
    const regex = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/;
    if (!value || value.trim() === "") {
      return Promise.reject("'Gst-no' is required");
    } else if (value && value.trim() !== value) {
      return Promise.reject("Whitespace is not allowed");
    } else if (value.length !== 15) {
      return Promise.reject("'Gst-no' must be 15 characters long");
    } else if (!regex.test(value)) {
      return Promise.reject("Invalid format");
    }

    return Promise.resolve();
  };

  const validatePinCode = (_, value) => {
    const regex = /[a-zA-Z]/;
    const pattern = /^\d{6}$/;

    if (!value || value.trim() === "") {
      return Promise.reject("'Pin-Code' is required");
    } else if (value && value.trim() !== value) {
      return Promise.reject("Whitespace is not allowed");
    } else if (value.length !== 6) {
      return Promise.reject("'Pin-Code' must be 6 digits long");
    } else if (regex.test(value)) {
      return Promise.reject("Pin-Code should not contain Alphabets");
    } else if (!pattern.test(value)) {
      return Promise.reject("Invalid Pin-Code");
    }

    return Promise.resolve();
  };

  const validatePhoneNo = (_, value) => {
    if (!value || value.trim() === "") {
      return Promise.reject("'Phone-No' is required");
    } else if (value && value.trim() !== value) {
      return Promise.reject("Whitespace is not allowed");
    } else if (value.length !== 10) {
      return Promise.reject("'Phone-No' must be 10 digits long");
    }
    return Promise.resolve();
  };

  const validateStreetAdress = (_, value) => {
    if (!value || value.trim() === "") {
      return Promise.reject("'Street-Address' is required");
    } else if (value && value.trim() !== value) {
      return Promise.reject("Whitespace is not allowed");
    }
    return Promise.resolve();
  };

  const validateAdditionalAdress = (_, value) => {
    if (!value || value.trim() === "") {
      return Promise.reject("'Additional-Address' is required");
    } else if (value && value.trim() !== value) {
      return Promise.reject("Whitespace is not allowed");
    }
    return Promise.resolve();
  };

  const validateConfirmPassword = ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue("Password") == value) {
        return Promise.resolve();
      }
      return Promise.reject("'Password' that you entered do not match.");
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
      return Promise.reject(new Error("'Password' is required"));
    } else if (!hasUppercase) {
      return Promise.reject(
        new Error("'Password' must contain atleast one 'Uppercase' letter")
      );
    } else if (!hasLowercase) {
      return Promise.reject(
        new Error("'Password' must contain atleast one 'Lowercase' letter")
      );
    } else if (!hasSpecialChar) {
      return Promise.reject(
        new Error("'Password' must contain atleast one 'Special-character'")
      );
    } else if (value.length < 12) {
      return Promise.reject(new Error("'Password' must be 12-character long"));
    }

    return Promise.resolve();
  };

  const validateAgreement = (_, value) => {
    return value
      ? Promise.resolve()
      : Promise.reject(new Error("You need to agree with Terms &Conditions"));
  };

  return (
    <Flex justify="center" align="center" style={{ minHeight: "100vh" }}>
      <Row className="seller_container">
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
            <h1 style={{ color: "#37475a" }}>Become Seller With Birghtspace</h1>
          </div>
          <Form
            form={form}
            name="seller_form"
            autoComplete="off"
            initialValues={{ remember: true }}
            style={{ marginTop: "20px" }}
            onFinish={(values) => {
              console.log({ values });
              console.log(form.getFieldValue("City"));
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
                    validator: validateFirstName,
                  },
                ]}
                hasFeedback
              >
                <Input
                  placeholder="First-Name"
                  style={{ height: "37px", width: "13.5rem" }}
                />
              </Form.Item>
              <Form.Item
                name="Last Name"
                rules={[
                  {
                    validator: validateLastName,
                  },
                ]}
                hasFeedback
              >
                <Input
                  placeholder="Last-Name"
                  style={{ height: "37px", width: "13.5rem" }}
                />
              </Form.Item>
            </Flex>
            <Form.Item
              name="Business-name"
              rules={[
                {
                  validator: validateBusinessName,
                },
              ]}
              hasFeedback
            >
              <Input
                placeholder="Enter Your Business Name"
                style={{ height: "37px", width: "530px" }}
              />
            </Form.Item>
            <Form.Item
              name="Gst-no"
              rules={[{ validator: validateGSTNumber }]}
              hasFeedback
            >
              <Input
                placeholder="Enter Your GSTIN"
                style={{ height: "37px", width: "530px" }}
              />
            </Form.Item>
            <Flex justify="space-evenly">
              <Form.Item name="State" rules={[{ required: true }]} hasFeedback>
                <Select
                  showSearch
                  style={{
                    width: "13.5rem",
                    height: "37px",
                  }}
                  placeholder="Select Your State"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.label).includes(input)
                  }
                  onChange={(value) => handleStateChange(value)}
                  options={STATES}
                />
              </Form.Item>
              <FormItem
                name="City"
                rules={[SelectedState ? { required: true } : {}]}
                hasFeedback={SelectedState && citySelected}
              >
                <Select
                  disabled={!SelectedState ? true : false}
                  style={{
                    width: "13.5rem",
                    height: "37px",
                  }}
                  placeholder="Select Your City"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    (option?.value).includes(input)
                  }
                  options={cities.map((city) => ({ value: city }))}
                  onChange={handleCityChange}
                />
              </FormItem>
            </Flex>
            <Flex justify="space-evenly">
              <FormItem
                name="PIN-Code"
                rules={[{ validator: validatePinCode }]}
                hasFeedback
              >
                <Input
                  placeholder="PIN-Code"
                  style={{
                    width: "13.5rem",
                    height: "37px",
                  }}
                />
              </FormItem>
              <FormItem
                name="Mobile-no"
                rules={[{ validator: validatePhoneNo }]}
                hasFeedback
              >
                <Input
                  style={{
                    width: "13.5rem",
                    height: "37px",
                  }}
                  placeholder="+91|  xxxxxxxxxx"
                />
              </FormItem>
            </Flex>
            <FormItem
              name="Street-Address"
              rules={[{ validator: validateStreetAdress }]}
              hasFeedback
            >
              <Input
                placeholder="Address Line - #1  (Street-Address)"
                style={{ height: "37px", width: "530px" }}
              ></Input>
            </FormItem>
            <FormItem
              name="Additional-Address"
              rules={[{ validator: validateAdditionalAdress }]}
              hasFeedback
            >
              <Input
                placeholder="Address Line - #2  (Additional-Address Information)"
                style={{ height: "37px", width: "530px" }}
              ></Input>
            </FormItem>
            <Flex justify="space-evenly">
              <FormItem
                name="GST-Upload"
                rules={[{ required: true }]}
                hasFeedback
              >
                <Flex vertical>
                  <label htmlFor="GstInput">GST Certificate:-</label>
                  <Input
                    id="GstInput"
                    type="file"
                    style={{
                      width: "13.6rem",
                      height: "37px",
                      padding: "6.5px 14px",
                    }}
                    accept=".pdf"
                  />
                </Flex>
              </FormItem>
              <FormItem
                name="AadharCard-Upload"
                rules={[{ required: true }]}
                hasFeedback
              >
                <Flex vertical>
                  <label htmlFor="AadharInput">AadharCard:-</label>
                  <Input
                    id="AadharInput"
                    type="file"
                    style={{
                      width: "13.6rem",
                      height: "37px",
                      padding: "6.5px 14px",
                    }}
                    accept=".pdf"
                  />
                </Flex>
              </FormItem>
            </Flex>
            <Flex justify="space-evenly">
              <FormItem
                name="AddresProof-Upload"
                rules={[{ required: true }]}
                hasFeedback
              >
                <Flex vertical>
                  <label htmlFor="AddressInput">AddressProof:-</label>
                  <Input
                    id="AddressInput"
                    type="file"
                    style={{
                      width: "13.6rem",
                      height: "37px",
                      padding: "6.5px 14px",
                    }}
                    accept=".pdf"
                  />
                </Flex>
              </FormItem>
              <FormItem
                name="PanCard-Upload"
                rules={[{ required: true }]}
                hasFeedback
              >
                <Flex vertical>
                  <label htmlFor="PanCardInput">PanCard:-</label>
                  <Input
                    id="PanCardInput"
                    type="file"
                    style={{
                      width: "13.6rem",
                      height: "37px",
                      padding: "6.5px 14px",
                    }}
                    accept=".pdf"
                  />
                </Flex>
              </FormItem>
            </Flex>
            <FormItem
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
                placeholder="    Enter Your Email"
                style={{ height: "37px", width: "530px" }}
              ></Input>
            </FormItem>
            <Form.Item
              name="Password"
              rules={[{ validator: validatePassword }]}
              hasFeedback
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="    Enter Your Password"
                style={{ height: "37px", width: "530px" }}
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
                style={{ height: "37px", width: "530px" }}
              />
            </Form.Item>
            <Form.Item
              name="agreement"
              rules={[
                {
                  validator: validateAgreement,
                },
              ]}
              style={{ height: "35px" }}
              valuePropName="checked"
              hasFeedback
            >
              <Checkbox>
                {" "}
                Agree to Brightspace <a href="#">Terms & Conditions</a>
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
    </Flex>
  );
};

export default BecomeSeller;
