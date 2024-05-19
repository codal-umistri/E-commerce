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
import { useDispatch, } from "react-redux";
import { useContext } from "react";
import { StateContext } from "../../App";
import { SearchItemsactions } from "../store/searchitems";

const { Text } = Typography;

const Navbar = () => {
  const dispatch = useDispatch();
  const Auth = JSON.parse(localStorage.getItem("Auth"));
  const navigate = useNavigate();
  const location = useLocation();
  // const bagitems = useSelector((store) => store.BagItems);
  // const allproducts = useSelector((store) => store.SearchItems);

  const { setSearchInputValue, searchInputValue, cart , cat , prange } = useContext(StateContext);

  const handleSearch = async() => {
    try {
      let apiUrl = 'http://localhost:4040/api/v1/products?';
      if (cat) {
        apiUrl += `category=${cat}`;
      }
      if (searchInputValue) {
        apiUrl += '&';
      }
      if(searchInputValue)
      {
         apiUrl += `keyword=${searchInputValue}`
      }
      if (prange) {
        apiUrl += '&';
      }
      if (prange) {
        const [minPrice, maxPrice] = prange.split("-");
        apiUrl += `minPrice=${minPrice}&maxPrice=${maxPrice}`;
      }
  
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const res = await response.json();
      dispatch(SearchItemsactions.AddAllProdcuts(res.data));
    } catch (error) {
      console.error("Error fetching products:", error.message);
    }
  };

  const handleChnage = (e) => {
    if (location.pathname !== "/allproducts") {
      navigate("/allproducts");
    }
    setSearchInputValue(e.target.value);
  };

  const limitedBagItems = cart?.slice(0, 4);
  const menu = cart?.length ? (
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
      {cart?.length > 4 && (
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
      <Col xs={24} sm={8} md={6} lg={4} xl={2} offset={1}>
          <div className="logo">
            <Image
              src="/images/logo1.png"
              alt="asca"
              preview={false}
              onClick={() => {
                navigate({ pathname: "/" });
              }}
            />
          </div>
        </Col>
        <Col xs={24} sm={20} md={20} lg={12} xl={12}>
          <Flex className="search_container">
            <Input
              className="search-box"
              placeholder="Search for Products, Brands and More"
              onChange={(e) => handleChnage(e)}
              value={searchInputValue}
            />
            <Button className="search-btn" onClick={() => handleSearch()}>
              <TfiSearch />
            </Button>
          </Flex>
        </Col>
        <Col xs={24} sm={24} md={6} lg={4} xl={2}>
          <div className="login">
            {Auth?.token ? (
              <Dropdown
                overlayStyle={{ width: "250px" }}
                menu={{ items: ITEMS1 }}
              >
                <Link to="/">
                  <Flex align="center" justify="center" className="login_text">
                    <GoPerson style={{ all: "unset" }} /> &nbsp;
                    <Text>{Auth.name}</Text>
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
        <Col xs={24} sm={24} md={6} lg={4} xl={2}>
          <Dropdown overlayStyle={{ width: "250px" }} overlay={menu}>
            <Flex
              className="cart-icon"
              align="center" 
              justify="center"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/cart'
                // navigate({ pathname: "/cart" });
              }}
            >
              <Badge count={cart?.length} className="ant-badge-count">
                <ShoppingCartOutlined />
                &nbsp;
                <Text>Cart</Text>
              </Badge>
            </Flex>
          </Dropdown>
        </Col>
        <Col xs={24} sm={24} md={6} lg={4} xl={3}>
          {Auth?.type === 2 ?
          (<Flex
            className="become-seller"
            align="center"
            justify="center"
            onClick={() => {
              navigate("/become-seller");
            }}
          >
            <ShopOutlined />
            &nbsp;
            <Text>Admin</Text>
          </Flex>) :
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
          }
        
        </Col>
        <Col xs={24} sm={24} md={6} lg={4} xl={2}>
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
