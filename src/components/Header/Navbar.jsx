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
  Menu,
} from "antd";
import { ITEMS, MORE_ITEMS, ITEMS1 } from "../Constants/Items";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { SearchItemsactions } from "../store/searchitems";

const { Text } = Typography;

const Navbar = ({ searchInputValue, setSearchInputValue }) => {
  const dispatch = useDispatch();
  const storedData = JSON.parse(localStorage.getItem("logindata"));
  const navigate = useNavigate();
  const location = useLocation();
  const inputref = useRef(null);
  const bagitems = useSelector((store) => store.BagItems);
  const allproducts = useSelector((store) => store.SearchItems);

  //  console.log(location.pathname);

  const handleSearch = (e) => {
    location.pathname == "/allproducts"
      ? (setSearchInputValue(e.target.value),
        !inputref.current.input.value
          ? dispatch(SearchItemsactions.AddAllProdcuts(allproducts.allProducts))
          : dispatch(
              SearchItemsactions.filterProductsBySearch({
                input: inputref.current.input.value,
              })
            ))
      : null;
  };

  const limitedBagItems = bagitems.slice(0, 4);
  const menu = bagitems.length ? (
    <Menu>
      {limitedBagItems.map((item) => (
        <Menu.Item key={item.id}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={item.images[0]}
              alt={item.name}
              style={{ width: "30px", marginRight: "10px" }}
            />
            <div>
              <div>{item.title}</div>
            </div>
          </div>
        </Menu.Item>
      ))}
      {bagitems.length > 4 && (
        <Menu.Item key="see-more" style={{ textAlign: "center" }}>
          <Link to="/cart" style={{ color: "blue" }}>
            See More
          </Link>
        </Menu.Item>
      )}
    </Menu>
  ) : (
    <Menu>
      <Menu.Item key="see-more" style={{ textAlign: "center" }}>
        <Text style={{ color: "blue" }}>Select item</Text>
      </Menu.Item>
    </Menu>
  );

  return (
    <header>
      <Row className="navbar" justify="space-around" align="middle">
        <Col xs={20} sm={16} md={12} lg={8} xl={2} offset={1}>
          <div className="logo">
            <Image
              src="/images/logo1.png"
              alt="asca"
              preview={false}
              onClick={() => {
                navigate({pathname:'/'});
              }}
            />
          </div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8} xl={10}>
          <Flex className="search_container">
            <Button className="search-btn">
              <TfiSearch />
            </Button>
            <Input
              className="search-box"
              ref={inputref}
              placeholder="Search for Products, Brands and More"
              onChange={(e) => handleSearch(e)}
              value={searchInputValue}
            />
          </Flex>
        </Col>
        <Col xs={20} sm={16} md={12} lg={4} xl={2}>
          <div className="login" >
            {storedData?.loginstatus ? (
              <Dropdown
                overlayStyle={{ width: "250px" }}
                menu={{ items: ITEMS1 }}
              >
                <Link to="/">
                  <Flex align="center" justify="center" className="login_text">
                    <GoPerson style={{ all: "unset" }} /> &nbsp;
                    <Text>{storedData.Email.split("@")[0]}</Text>
                  </Flex>
                </Link>
              </Dropdown>
            ) : (
              <Dropdown
                overlayStyle={{ width: "250px" }}
                menu={{ items: ITEMS }}
              >
                <Link to="/login">
                  <Flex align="center" justify="center" className="login_text">
                    <GoPerson style={{ all: "unset" }} /> &nbsp;
                    <Text>Login</Text>
                  </Flex>
                </Link>
              </Dropdown>
            )}
          </div>
        </Col>
        <Col xs={20} sm={16} md={12} lg={4} xl={2}>
          <Dropdown overlayStyle={{ width: "250px" }} overlay={menu}>
            <Flex
              className="cart-icon"
              align="center"
              justify="center"
              onClick={(e) => {
                e.preventDefault();
                navigate({pathname:'/cart'});
              }}
            >
              <Badge count={bagitems.length} className="ant-badge-count">
                <ShoppingCartOutlined />
                &nbsp;
                <Text>Cart</Text>
              </Badge>
            </Flex>
          </Dropdown>
        </Col>
        <Col xs={20} sm={16} md={12} lg={4} xl={3}>
          <Flex
            className="become-seller"
            align="center"
            justify="center"
            onClick={() => {
              navigate("/become-seller");
            }}
          >
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
