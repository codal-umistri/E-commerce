import { ShopOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { GoPerson } from "react-icons/go";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { TfiSearch } from "react-icons/tfi";
import {
  Dropdown,
  Row,
  Col,
  Image,
  Input,
  Button,
  Flex,
  Typography,
  Badge,
  Layout,
} from "antd";
import { ITEMS, MORE_ITEMS } from "./Constants/Items";

const { Text, Link } = Typography;

const Navbar = () => {
  return (
    <header>
      <Row className="navbar" justify="space-around" align="middle">
        <Col xs={20} sm={16} md={12} lg={8} xl={2} offset={1}>
          <div className="logo">
            <Image src="images/logo1.png" alt="asca" preview={false} />
          </div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={10}>
          <Flex className="search_container">
            <Button className="search-btn">
              <TfiSearch />
            </Button>
            <Input
              className="search-box"
              placeholder="Search for Products, Brands and More"
            />
          </Flex>
        </Col>
        <Col xs={20} sm={16} md={12} lg={4} xl={2}>
          <div className="login" align="center" justify="center">
            <Dropdown overlayStyle={{ width: "250px" }} menu={{ items: ITEMS }}>
              <Link
                className="login_text"
                onClick={(e) => e.preventDefault()}
                to=""
              >
                <Flex align="center" justify="center">
                  <GoPerson style={{ all: "unset" }} /> &nbsp;
                  <Text>Login</Text>
                </Flex>
              </Link>
            </Dropdown>
          </div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={4} xl={2}>
          <Flex className="cart-icon" align="center" justify="center">
            <Badge count={5} className="ant-badge-count">
              <ShoppingCartOutlined />
              &nbsp;
              <Text>Cart</Text>
            </Badge>
          </Flex>
        </Col>
        <Col xs={20} sm={16} md={12} lg={4} xl={3}>
          <Flex className="become-seller" align="center" justify="center">
            <ShopOutlined />
            &nbsp;
            <Text>Become a Seller</Text>
          </Flex>
        </Col>
        <Col xs={20} sm={16} md={12} lg={4} xl={2}>
          <div className="more">
            <Dropdown
              overlayStyle={{ width: "250px" }}
              menu={{ items: MORE_ITEMS }}
            >
              <Link
                onClick={(e) => e.preventDefault()}
                style={{ all: "unset" }}
              >
                <HiOutlineDotsVertical />
              </Link>
            </Dropdown>
          </div>
        </Col>
      </Row>
    </header>
  );
};

export default Navbar;

// <header>
//   <div className="navbar">
//     <div className="logo">
//       <img src="images/logo1.png" alt="asca" />
//     </div>
//     <div className="search">
//       <div className="search_container">
//         <button className="search-btn">
//           <TfiSearch />
//         </button>
//         <input
//           type="text"
//           className="search-box"
//           placeholder="Search for Products, Brands and More"
//         />
//       </div>
//     </div>
//     <div className="login">
//       <Dropdown
//         overlayStyle={{ width: "250px" }}
//         menu={{
//           items,
//         }}
//       >
//         <a onClick={(e) => e.preventDefault()}>
//           <GoPerson /> &nbsp;
//           <span>Login</span>
//         </a>
//       </Dropdown>
//     </div>
//     <div className="cart-icon">
//       <ShoppingCartOutlined />
//       &nbsp;
//       <span>Cart</span>
//     </div>
//     <div className="become-seller">
//       <ShopOutlined />
//       &nbsp;
//       <span>Become a Seller</span>
//     </div>
//     <div className="more">
//       <Dropdown
//         overlayStyle={{ width: "250px" }}
//         menu={{
//           items: more_items,
//         }}
//       >
//         <a onClick={(e) => e.preventDefault()}>
//           <HiOutlineDotsVertical />
//         </a>
//       </Dropdown>
//     </div>
//   </div>
// </header>
