import {
  BellOutlined,
  CustomerServiceOutlined,
  DownloadOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsBagCheckFill } from "react-icons/bs";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const ITEMS1 = [
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <IoPersonCircleOutline /> <span>My Profile</span>
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <FaStarOfLife />
        <span>Plus Zone</span>
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <BsBagCheckFill />
        <span>Orders</span>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <CiHeart />
        <span>WishList</span>
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <MdOutlineCardGiftcard />
        <span>Rewards</span>
      </a>
    ),
    key: "5",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="#"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
        onClick={() => {
          localStorage.clear();
        }}
      >
        <LogoutOutlined />
        <span>Logout</span>
      </a>
    ),
    key: "6",
  },
];

export const ITEMS = [
  {
    label: (
      <Link
        rel="noopener noreferrer"
        to="register"
        style={{ fontSize: "17.5px", display: "flex", alignItems: "center" }}
      >
        New Customer ?
        <span style={{ marginLeft: "30px", color: "rgb(4, 50, 137)" }}>
          Sign Up
        </span>
      </Link>
    ),
    key: "0",
  },
  {
    label: <hr />,
    key: "separator",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <IoPersonCircleOutline /> <span>My Profile</span>
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <FaStarOfLife />
        <span>Plus Zone</span>
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <BsBagCheckFill />
        <span>Orders</span>
      </a>
    ),
    key: "3",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <CiHeart />
        <span>WishList</span>
      </a>
    ),
    key: "4",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <MdOutlineCardGiftcard />
        <span>Rewards</span>
      </a>
    ),
    key: "5",
  },
];

export const MORE_ITEMS = [
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "7px",
        }}
      >
        <BellOutlined />
        <span>Notification Preferences</span>
      </a>
    ),
    key: "0",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <CustomerServiceOutlined />
        <span>24x7 Customer Care</span>
      </a>
    ),
    key: "1",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <FaArrowTrendUp />
        <span>Advertise</span>
      </a>
    ),
    key: "2",
  },
  {
    label: (
      <a
        rel="noopener noreferrer"
        href="/"
        style={{
          fontSize: "17.5px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <DownloadOutlined />
        <span>Download App</span>
      </a>
    ),
    key: "3",
  },
];

//For Slider

export const BANNERDATA = [
  {
    id: 1,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/d117a62eb5fbb8e1.jpg?q=50",
  },
  {
    id: 2,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/57267a180af306fe.jpg?q=50",
  },
  {
    id: 3,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/ae9966569097a8b7.jpg?q=50",
  },
  {
    id: 4,
    url: "https://rukminim1.flixcart.com/flap/3376/560/image/f6202f13b6f89b03.jpg?q=50",
  },
  {
    id: 5,
    url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/739ed527dbf977fe.jpg?q=20",
  },
  {
    id: 6,
    url: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/ed12b7707a04473c.jpg?q=20",
  },
];

export const RESPONSIVE = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
  
  
export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 3000, min: 0 },
    items: 3,
    slidesToSlide: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 800 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 800, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const SIMPLECARDDATA = [
  {
    id: 1,
    title: "Bluetooth Calling Smartwatch starts at ₹1,999",
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg",
  },
  {
    id: 2,
    title: "Starting ₹99 | Air-purifying plants",
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/MSO_May/compressed_379x304_compressed._SY304_CB592193370_.jpg",
  },
  {
    id: 3,
    title: "Starting ₹99 | Start your fitness journey",
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg",
  },
];

export const CARDDATA = [
  {
    id: 1,
    title: "Get the perfect screen size | TVs Starting ₹6,999",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Jan/PC/Shopbysize/118/32._SY116_CB584962515_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Jan/PC/Shopbysize/118/32._SY116_CB584962515_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Jan/PC/Shopbysize/118/32._SY116_CB584962515_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Jan/PC/Shopbysize/118/32._SY116_CB584962515_.jpg",
    ],
    desc: [
      "Budget TVs | Up to 60% off",
      "Budget TVs | Up to 60% off",
      "Budget TVs | Up to 60% off",
      "Budget TVs | Up to 60% off",
    ],
  },
  {
    id: 2,
    title: "Up to 60% off | Styles for men & boys",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-1-186-116._SY116_CB636110853_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-2-186-116._SY116_CB636110853_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-3-186-116._SY116_CB636110853_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PF_MF/MF-4-186-116._SY116_CB636110853_.jpg",
    ],
    desc: ["Clothing", "Footwear", "Watches", "Bags & wallets"],
  },
  {
    id: 3,
    title: "Starting ₹199 | Brightspace Brands & more",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/1x_Desktop_Quad_card_w_title_-_Card_1._SY116_CB572041232_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_QC_186x116__Kitchen_WK52_001._SY116_CB586255880_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_QC_186x116_1_WK04._SY116_CB583034021_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img22/AmazonBrands/Bikram/Bikram1/PC_QC_186x116_1_Kitchen_Week52_2._SY116_CB571434851_.jpg",
    ],
    desc: [
      "Starting ₹199 | Water bottles",
      "Starting ₹279 | Storage containers",
      "Starting ₹299 | Kitchen tools",
      "Starting ₹399 | Racks & holders",
    ],
  },
  {
    id: 4,
    title: "Revamp your home in style with Brightspace",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg",
    ],
    desc: [
      "Cushion covers, bedsheets & more",
      "Figurines, vases and more",
      "Home storage",
      "Lighting solutions",
    ],
  },
];

export const ALTERNATEDATA = [
  {
    id: 1,
    complex: true,
    title: "Get the perfect screen size | TVs Starting ₹6,999",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Jan/PC/Shopbysize/118/32._SY116_CB584962515_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Jan/PC/Shopbysize/118/32._SY116_CB584962515_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Jan/PC/Shopbysize/118/32._SY116_CB584962515_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG23/Suma/MSO/Jan/PC/Shopbysize/118/32._SY116_CB584962515_.jpg",
    ],
    desc: [
      "Budget TVs | Up to 60% off",
      "Budget TVs | Up to 60% off",
      "Budget TVs | Up to 60% off",
      "Budget TVs | Up to 60% off",
    ],
  },
  {
    id: 2,
    complex: false,
    title: "Bluetooth Smartwatch starts at ₹1,999",
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/PC_CategoryCard_379X304_1._SY304_CB614835787_.jpg",
  },
  {
    id: 5,
    complex: false,
    title: "Starting ₹99 | Air-purifying plants",
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img18/Lawn_Garden/Ud/MSO_May/compressed_379x304_compressed._SY304_CB592193370_.jpg",
  },
  {
    id: 3,
    complex: true,
    title: "Revamp your home in style with Brightspace",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_furnishings_2._SY116_CB584596691_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_decor_1._SY116_CB584596691_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_storage_1._SY116_CB584596691_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/Gateway/BTFGW/PCQC/186x116_Home_lighting_2._SY116_CB584596691_.jpg",
    ],
    desc: [
      "Cushion covers, bedsheets & more",
      "Figurines, vases and more",
      "Home storage",
      "Lighting solutions",
    ],
  },
  {
    id: 4,
    complex: true,
    title: "Fly high, pay less | Deals on flight tickets",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/P1/Delhi_PC_QC_186x116._SY116_CB583610851_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/P1/Jaipur_PC_QC_186x116._SY116_CB583610851_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/P1/Mumbai_PC_QC_186x116._SY116_CB583610851_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/P1/Accessory_186x116._SY116_CB583610851_.jpg",
    ],
    desc: [
      "Fly to Delhi starting ₹2,499",
      "Fly to jaipur starting ₹2,299",
      "Fly to Mumbai starting ₹3,499",
      "Travel needs",
    ],
  },
  {
    id: 3,
    complex: false,
    title: "Starting ₹99 | Start your fitness journey",
    url: "https://images-eu.ssl-images-amazon.com/images/G/31/img19/Sports/GW_Desktop/1199101_379x304_Compressed._SY304_CB448278349_.jpg",
  },
  {
    id: 3,
    complex: false,
    title: "Starting ₹2,999 | Start your boat journey",
    url: "https://m.media-amazon.com/images/G/31/img21/Boat_ultimaselect/978x900._CB583962823_.gif",
  },
  {
    id: 6,
    complex: true,
    title: "Minimum 50% off | Top styles for him",
    images: [
      "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/MA/1_1X._SY116_CB618756929_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/MA/1_1X._SY116_CB618756929_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/MA/3_1X._SY116_CB618756929_.jpg",
      "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/kids/WRS_Dec22/PC_QC/MA/4_1X._SY116_CB618756929_.jpg",
    ],
    desc: [
      "Sweatshirts & hoodies",
      "Jackets",
      "T-shirts, Polos & more",
      "Jeans",
    ],
  },
];

export const SECTIONDATA = [
  {
    id: 1,
    cat_name: "Grocery",
    url: "https://rukminim2.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
  },
  {
    id: 2,
    cat_name: "Mobiles",
    url: "https://rukminim2.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
  },
  {
    id: 3,
    cat_name: "Fashion",
    url: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
  },
  {
    id: 4,
    cat_name: "Electronics",
    url: "https://rukminim2.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
  },
  {
    id: 5,
    cat_name: "Home & Furniture",
    url: "https://rukminim2.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
  },
  {
    id: 6,
    cat_name: "Appliances",
    url: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=10",
  },
  {
    id: 7,
    cat_name: "AirLine",
    url: "https://rukminim2.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
  },
  {
    id: 8,
    cat_name: "Beauty,Toys& More",
    url: "https://rukminim2.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    id: 9,
    cat_name: "Two Wheelers",
    url: "https://rukminim2.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
  },
];

export const COUNTRYNAMES = [
  { id: 1, country_name: "Australia" },
  {
    id: 2,
    country_name: "Brazil",
  },
  {
    id: 3,
    country_name: "Canada",
  },
  {
    id: 4,
    country_name: "China",
  },
  {
    id: 5,
    country_name: "France",
  },
  {
    id: 6,
    country_name: "Germany",
  },
  {
    id: 7,
    country_name: "Italy",
  },
  {
    id: 8,
    country_name: "Japan",
  },
  {
    id: 9,
    country_name: "Mexico",
  },
  {
    id: 10,
    country_name: "Netherlands",
  },
  {
    id: 11,
    country_name: "Poland",
  },
  {
    id: 12,
    country_name: "Singapore",
  },
  {
    id: 13,
    country_name: "Spain",
  },
  {
    id: 14,
    country_name: "Turkey",
  },
  {
    id: 15,
    country_name: "United Arab Emirates",
  },
  {
    id: 16,
    country_name: "United Kingdom",
  },
  {
    id: 17,
    country_name: "United States",
  },
];

export const FOOTERDATA = [
  {
    id: 1,
    title: "Get to Know Us",
    names: ["About Us", "Careers", "Press Releases", "Brightspace Science"],
  },
  {
    id: 2,
    title: "Connect with Us",
    names: ["Facebook", "Twitter", "Instagram"],
  },
  {
    id: 3,
    title: "Make Money with Us",
    names: [
      "Sell on brightspace",
      "Sell under Brightspace Accelerator",
      "Protect and Build Your Brand",
      "Brightspace Global Selling",
      "Become an Affiliate",
      "Fulfilment by Brightspace",
      "Advertise Your Products",
      "Brightspace Pay on Merchants",
    ],
  },
  {
    id: 4,
    title: "Let us Help You",
    names: [
      "COVID-19 and Amazon",
      "Your Account",
      "Returns Centre",
      "100% Purchashe Protection",
      "Brightspace App Download",
      "Fulfilment by Brightspace",
      "Help",
    ],
  },
];

export const STATES = [
  {
    value: "AP",
    label: "Andhra Pradesh",
    cities: [
      "Visakhapatnam",
      "Vijayawada",
      "Guntur",
      "Nellore",
      "Kurnool",
      "Rajahmundry",
    ],
  },
  {
    value: "AR",
    label: "Arunachal Pradesh",
    cities: ["Itanagar", "Naharlagun", "Pasighat", "Roing", "Tezu", "Ziro"],
  },
  {
    value: "AS",
    label: "Assam",
    cities: [
      "Guwahati",
      "Silchar",
      "Dibrugarh",
      "Jorhat",
      "Nagaon",
      "Tinsukia",
    ],
  },
  {
    value: "BR",
    label: "Bihar",
    cities: [
      "Patna",
      "Gaya",
      "Bhagalpur",
      "Muzaffarpur",
      "Purnia",
      "Darbhanga",
    ],
  },
  {
    value: "CG",
    label: "Chhattisgarh",
    cities: ["Raipur", "Bhilai", "Bilaspur", "Korba", "Raigarh", "Jagdalpur"],
  },
  {
    value: "GA",
    label: "Goa",
    cities: [
      "Panaji",
      "Vasco da Gama",
      "Margao",
      "Mapusa",
      "Ponda",
      "Bicholim",
    ],
  },
  {
    value: "GJ",
    label: "Gujarat",
    cities: [
      "Ahmedabad",
      "Surat",
      "Vadodara",
      "Rajkot",
      "Bhavnagar",
      "Jamnagar",
    ],
  },
  {
    value: "HR",
    label: "Haryana",
    cities: [
      "Faridabad",
      "Gurgaon",
      "Panipat",
      "Ambala",
      "Yamunanagar",
      "Rohtak",
    ],
  },
  {
    value: "HP",
    label: "Himachal Pradesh",
    cities: ["Shimla", "Solan", "Dharamshala", "Mandi", "Kullu", "Chamba"],
  },
  {
    value: "JK",
    label: "Jammu and Kashmir",
    cities: [
      "Srinagar",
      "Jammu",
      "Anantnag",
      "Baramulla",
      "Kathua",
      "Udhampur",
    ],
  },
  {
    value: "JH",
    label: "Jharkhand",
    cities: [
      "Ranchi",
      "Jamshedpur",
      "Dhanbad",
      "Bokaro Steel City",
      "Deoghar",
      "Phusro",
    ],
  },
  {
    value: "KA",
    label: "Karnataka",
    cities: [
      "Bangalore",
      "Hubli-Dharwad",
      "Mysore",
      "Belgaum",
      "Mangalore",
      "Gulbarga",
    ],
  },
  {
    value: "KL",
    label: "Kerala",
    cities: [
      "Thiruvananthapuram",
      "Kochi",
      "Kozhikode",
      "Thrissur",
      "Kollam",
      "Palakkad",
    ],
  },
  {
    value: "MP",
    label: "Madhya Pradesh",
    cities: ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar"],
  },
  {
    value: "MH",
    label: "Maharashtra",
    cities: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad"],
  },
  {
    value: "MN",
    label: "Manipur",
    cities: [
      "Imphal",
      "Thoubal",
      "Kakching",
      "Mayang Imphal",
      "Churachandpur",
      "Bishnupur",
    ],
  },
  {
    value: "ML",
    label: "Meghalaya",
    cities: [
      "Shillong",
      "Tura",
      "Nongstoin",
      "Jowai",
      "Baghmara",
      "Williamnagar",
    ],
  },
  {
    value: "MZ",
    label: "Mizoram",
    cities: ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib", "Serchhip"],
  },
  {
    value: "NL",
    label: "Nagaland",
    cities: [
      "Kohima",
      "Dimapur",
      "Mokokchung",
      "Tuensang",
      "Wokha",
      "Zunheboto",
    ],
  },
  {
    value: "OR",
    label: "Odisha",
    cities: [
      "Bhubaneswar",
      "Cuttack",
      "Rourkela",
      "Brahmapur",
      "Sambalpur",
      "Puri",
    ],
  },
  {
    value: "PB",
    label: "Punjab",
    cities: [
      "Ludhiana",
      "Amritsar",
      "Jalandhar",
      "Patiala",
      "Bathinda",
      "Mohali",
    ],
  },
  {
    value: "RJ",
    label: "Rajasthan",
    cities: ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur"],
  },
  {
    value: "SK",
    label: "Sikkim",
    cities: [
      "Gangtok",
      "Namchi",
      "Mangan",
      "Gyalshing",
      "Jorethang",
      "Ravangla",
    ],
  },
  {
    value: "TN",
    label: "Tamil Nadu",
    cities: [
      "Chennai",
      "Coimbatore",
      "Madurai",
      "Tiruchirappalli",
      "Salem",
      "Tirunelveli",
    ],
  },
  {
    value: "TG",
    label: "Telangana",
    cities: [
      "Hyderabad",
      "Warangal",
      "Nizamabad",
      "Karimnagar",
      "Ramagundam",
      "Khammam",
    ],
  },
  {
    value: "TR",
    label: "Tripura",
    cities: [
      "Agartala",
      "Udaipur",
      "Dharmanagar",
      "Kailasahar",
      "Belonia",
      "Ambassa",
    ],
  },
  {
    value: "UP",
    label: "Uttar Pradesh",
    cities: ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut"],
  },
  {
    value: "UK",
    label: "Uttarakhand",
    cities: [
      "Dehradun",
      "Haridwar",
      "Roorkee",
      "Haldwani",
      "Rudrapur",
      "Kashipur",
    ],
  },
  {
    value: "WB",
    label: "West Bengal",
    cities: [
      "Kolkata",
      "Asansol",
      "Siliguri",
      "Durgapur",
      "Bardhaman",
      "Malda",
    ],
  },
];

 export const COUPENCODE = [
  {
    Code: "ABC",
    discountPercentage: 25,
  },
  {
    Code: "BCD",
    discountPercentage: 15,
  },
  {
    Code: "CDE",
    discountPercentage: 10,
  },
  {
    Code: "XYZ",
    discountPercentage: 5,
  },
];
