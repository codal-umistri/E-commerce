import {
  BellOutlined,
  CustomerServiceOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import { IoPersonCircleOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { BsBagCheckFill } from "react-icons/bs";
import { MdOutlineCardGiftcard } from "react-icons/md";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa6";

export const ITEMS = [
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
        style={{ fontSize: "17.5px", display: "flex", alignItems: "center" }}
      >
        New Customer ?
        <span style={{ marginLeft: "30px", color: "rgb(4, 50, 137)" }}>
          Sign Up
        </span>
      </a>
    ),
    key: "0",
  },
  {
    label: <div style={{ borderTop: "1px solid #ccc", marginTop: "4.5px" }} />,
    key: "separator",
  },
  {
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
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
        target="_blank"
        rel="noopener noreferrer"
        href="#"
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
        target="_blank"
        rel="noopener noreferrer"
        href="#"
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
        target="_blank"
        rel="noopener noreferrer"
        href="#"
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
        target="_blank"
        rel="noopener noreferrer"
        href="#"
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
        target="_blank"
        rel="noopener noreferrer"
        href="#"
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
        target="_blank"
        rel="noopener noreferrer"
        href="#"
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
        target="_blank"
        rel="noopener noreferrer"
        href="#"
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
        target="_blank"
        rel="noopener noreferrer"
        href="#"
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
