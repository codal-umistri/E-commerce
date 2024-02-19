import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Header/Navbar";
import Section from "./components/Header/Section";
import SimpleSlider from "./components/Slider/SimpleSlider";
import GotoTop from "./components/Scroll/GotoTop";
import LongItem from "./components/Slider/LongItem";
import Dividers from "./components/Divider/Divders";
import SeeAll from "./components/pages/SeeAll";
import { Flex, Spin } from "antd";
import { Suspense, lazy } from "react"; 
import { useSelector } from "react-redux";
const SingleProductCards = lazy(() => import("./components/Cards/SingleProductCards"));

function App() {

  // const item = useSelector((store)=> store.Items);

  // console.log(item + " from main layout")
  return (
    <>
      <Navbar />
      <Section />
      <SimpleSlider />
      <Dividers tag={"Top Products"} />
      <Flex justify="space-evenly" wrap="wrap">
            <Suspense
              fallback={
                <Flex justify="center" align="center">
                  <Spin tip="Loading" size="large" />
                </Flex>
              }
            >
              <SingleProductCards />
            </Suspense>
          </Flex>
      <SeeAll />
      <LongItem />
      <Footer />
      <GotoTop />
    </>
  );
}
export default App;
