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
    <div className="main-navbar">
      <div className="logo-and-search">
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
      </div>
      <div className="other-elements">
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
        <div className="cart-icon">
          <Dropdown overlayStyle={{ width: "250px" }} overlay={menu}>
            <Flex
              align="center"
              justify="center"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/cart';
              }}
            >
              <Badge count={cart?.length} className="ant-badge-count">
                <ShoppingCartOutlined />
                &nbsp;
                <Text>Cart</Text>
              </Badge>
            </Flex>
          </Dropdown>
        </div>
        <div className="become-seller">
          <Flex
            align="center"
            justify="center"
            onClick={() => {
              navigate(Auth?.type === 2 ? "/" : "/become-seller");
            }}
          >
            <ShopOutlined />
            &nbsp;
            <Text>{Auth?.type === 2 ? "Admin" : "Become a Seller"}</Text>
          </Flex>
        </div>
        <div className="more">
          <Dropdown
            overlayStyle={{ width: "250px" }}
            menu={{ items: MORE_ITEMS }}
          >
            <Link onClick={(e) => e.preventDefault()} style={{ all: "unset" }}>
              <HiOutlineDotsVertical />
            </Link>
          </Dropdown>
        </div>
      </div>
    </div>
  </header>
  );
};

export default Navbar;
