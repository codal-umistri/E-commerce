import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import SimpleSlider from "./components/Slider/SimpleSlider";
import GotoTop from "./components/Scroll/GotoTop";
import LongItem from "./components/LongItem";
import AlternateCard from "./components/Cards/AlternateCards";
import SingleProductCards from "./components/Cards/SingleProductCards";
import MultipleProductCards from "./components/Cards/MultipleProductCards";

function App() {
  return (
    <>
      <Navbar />
      <Section />
      <SimpleSlider />
      <MultipleProductCards />
      <LongItem />
      {/* <AlternateCard /> */}
      <SingleProductCards />
       <Footer />
      <GotoTop />
    </> 
  );
}
export default App;
