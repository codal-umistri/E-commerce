import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Section from "./components/Header/Section";
import SimpleSlider from "./components/Slider/SimpleSlider";
import GotoTop from "./components/Scroll/GotoTop";
import LongItem from "./components/Slider/LongItem";
import AlternateCard from "./components/Cards/AlternateCards";
import SingleProductCards from "./components/Cards/SingleProductCards";
import MultipleProductCards from "./components/Cards/MultipleProductCards";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import BecomeSeller from "./components/pages/BecomeSeller";
import ForgotPassword from "./components/pages/ForgotPassword";
import Home from "./components/Layout/Home";

function App() {
  return (
    <>
    <Navbar/>
    <Section/>
    <SimpleSlider />
    <MultipleProductCards />
    <LongItem />
    <Footer />
    </>
  );
}
export default App;
