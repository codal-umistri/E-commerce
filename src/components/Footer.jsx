import { useState } from "react";
import { Flex, Typography, List, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { GrLanguage } from "react-icons/gr";

const { Text } = Typography;

const Footer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleLanguageChange = ({ key }) => {
    setSelectedLanguage(key);
  };
  return (
    <footer>
      <Flex className="foot-panel1" align="center" justify="center">
        <Text className="foot-panel1_txt">Go With Us</Text>
      </Flex>
      <div className="foot-panel2">
        <Flex className="columns" justify="center">
          <div className="column">
            <List>
              <List.Item>
                <Flex vertical gap={8}>
                  <Text className="foot-Panel_txt">Get to Know Us</Text>
                  <Text className="foot-panel_txt">About Us</Text>
                  <Text className="foot-panel_txt">Careers</Text>
                  <Text className="foot-panel_txt">Press Releases</Text>
                  <Text className="foot-panel_txt">Brightspace Science</Text>
                </Flex>
              </List.Item>
            </List>
          </div>
          <div className="column">
            <List>
              <List.Item>
                <Flex vertical gap={8}>
                  <Text className="foot-Panel_txt">Connect with Us</Text>
                  <Text className="foot-panel_txt">Facebook</Text>
                  <Text className="foot-panel_txt">Twitter</Text>
                  <Text className="foot-panel_txt">Instagram</Text>
                </Flex>
              </List.Item>
            </List>
          </div>
          <div className="column">
            <List>
              <List.Item>
                <Flex vertical gap={8}>
                  <Text className="foot-Panel_txt">Make Money with Us</Text>
                  <Text className="foot-panel_txt">Sell on brightspace</Text>
                  <Text className="foot-panel_txt">
                    Sell under Brightspace Accelerator
                  </Text>
                  <Text className="foot-panel_txt">
                    Protect and Build Your Brand
                  </Text>
                  <Text className="foot-panel_txt">
                    Brightspace Global Selling
                  </Text>
                  <Text className="foot-panel_txt">Become an Affiliate</Text>
                  <Text className="foot-panel_txt">
                    Fulfilment by Brightspace
                  </Text>
                  <Text className="foot-panel_txt">
                    Advertise Your Products
                  </Text>
                  <Text className="foot-panel_txt">
                    Brightspace Pay on Merchants
                  </Text>
                </Flex>
              </List.Item>
            </List>
          </div>
          <div className="column">
            <List>
              <List.Item>
                <Flex vertical gap={8}>
                  <Text className="foot-Panel_txt">Let us Help You</Text>
                  <Text className="foot-panel_txt">COVID-19 and Amazon</Text>
                  <Text className="foot-panel_txt">Your Account</Text>
                  <Text className="foot-panel_txt">Returns Centre</Text>
                  <Text className="foot-panel_txt">
                    100% Purchashe Protection
                  </Text>
                  <Text className="foot-panel_txt">
                    Brightspace App Download
                  </Text>
                  <Text className="foot-panel_txt">
                    Fulfilment by Brightspace
                  </Text>
                  <Text className="foot-panel_txt">Help</Text>
                </Flex>
              </List.Item>
            </List>
          </div>
        </Flex>
      </div>
      <div className="foot-panel3">
        <Flex vertical align="center">
          <Flex
            justify="center"
            gap={50}
            align="center"
            className="language_logo"
          >
            <div className="logo1"></div>
            <div className="button">
              <Dropdown.Button
                icon={<DownOutlined />}
                overlay={
                  <Menu onClick={handleLanguageChange}>
                    <Menu.Item key="English">English</Menu.Item>
                    <Menu.Item key="Hindi">Hindi</Menu.Item>
                    <Menu.Item key="Gujrati">Gujrati</Menu.Item>
                  </Menu>
                }
              >
                <Flex justify="center" align="center" gap={4}>
                  <GrLanguage />
                  <Text>{selectedLanguage}</Text>
                </Flex>
              </Dropdown.Button>
            </div>
          </Flex>
          <div className="country">
            <Flex gap={12}>
              <Text className="country_name">Australia</Text>
              <Text className="country_name">Brazil</Text>
              <Text className="country_name">Canada</Text>
              <Text className="country_name">China</Text>
              <Text className="country_name">France</Text>
              <Text className="country_name">Germany</Text>
              <Text className="country_name">Italy</Text>
              <Text className="country_name">Japan</Text>
              <Text className="country_name">Mexico</Text>
              <Text className="country_name">Netherlands</Text>
              <Text className="country_name">Poland</Text>
              <Text className="country_name">Singapore</Text>
              <Text className="country_name">Spain</Text>
              <Text className="country_name">Turkey</Text>
              <Text className="country_name">United Arab Emirates</Text>
            </Flex>
          </div>
          <div className="country">
            <Flex gap={12}>
              <Text className="country_name">United Kingdom</Text>
              <Text className="country_name">United States</Text>
            </Flex>
          </div>
        </Flex>
      </div>

      <div className="foot-panel4">
        <Flex className="pages" justify="center" gap={15}>
          <Text className="txt">Conditions of Use & Sale</Text>
          <Text className="txt">Privacy Notice</Text>
          <Text className="txt">Interest-Based Ads</Text>
        </Flex>
        <Flex className="copyright" justify="center">
          @ 1996-2023, Brightspace.com, Inc. or its affiliates
        </Flex>
      </div>
    </footer>
  );
};

export default Footer;
