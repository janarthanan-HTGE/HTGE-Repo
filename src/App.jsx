
import HeroSection from "./components/Home/herosection";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Feature from "./components/home/Feature";
import AboutHome from "./components/home/Abouthome";
import ServiceHome from "./components/home/Servicehome";
import ChooseUsHome from "./components/home/chooseushome";
import AboutSubHome from "./components/home/Aboutsubhome";
import BrandSection from "./components/home/Brandsection";
import TestimonialSection from "./components/home/Testimonialsection";
import CtaSection from "./components/home/Ctasection";

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
    <CtaSection/>
    <Footer/>
    </>
  )
}

export default App;
