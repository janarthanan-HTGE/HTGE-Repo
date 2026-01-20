
import HeroSection from "./components/Home/herosection";
import Header from "./components/layout/header/Header";
import Feature from "./components/home/Feature";
import AboutHome from "./components/home/Abouthome";
import ServiceHome from "./components/home/Servicehome";
import ChooseUsHome from "./components/home/chooseushome";
import AboutSubHome from "./components/home/Aboutsubhome";
import BrandSection from "./components/home/Brandsection";
import TestimonialSection from "./components/home/Testimonialsection";

function App() {

  return(
    <>
    <Header/>
    <HeroSection/>
    <Feature/>
    <AboutHome/>
    <ServiceHome/>
    <AboutSubHome/>
    <ChooseUsHome/>
    <BrandSection/>
    <TestimonialSection/>
    </>
  )
}

export default App;
