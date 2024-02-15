import Navbar from "../Header/Navbar";
import Section from "../Header/Section";
import MultipleProductCards from "../Cards/MultipleProductCards";
import LongItem from "../Slider/LongItem";
import Footer from "../Footer/Footer";
import  Slider  from "../Slider/SimpleSlider";


const Home = ()=>
{
    return <>
    <Navbar/>
    <Section/>
    <Slider />
    <MultipleProductCards />
    <LongItem />
    <Footer />
    </>

}


export default Home;