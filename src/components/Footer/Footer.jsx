import { useState } from "react";
import { Flex, Typography, List, Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { GrLanguage } from "react-icons/gr";
import { COUNTRYNAMES, FOOTERDATA } from "../Constants/Items";

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
          {FOOTERDATA.map((item, index) => (
            <div className="column" key={item.title}>
              <List>
                <List.Item>
                  <Flex vertical gap={8}>
                    <Text className="foot-Panel_txt">{item.title}</Text>
                    {item.names.map((data, index) => (
                      <Text className="foot-panel_txt">{data}</Text>
                    ))}
                  </Flex>
                </List.Item>
              </List>
            </div>
          ))}
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
              {COUNTRYNAMES.map((item) => (
                <Text className="country_name" key={item.id}>
                  {item.country_name}
                </Text>
              ))}
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
