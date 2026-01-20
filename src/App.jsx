import { useEffect } from "react";
import { initTheme, loader } from "./utils/main-js";
import HeroSection from "./components/Home/herosection";
import Header from "./components/layout/header/Header";
import Feature from "./components/home/Feature";
import AboutHome from "./components/home/Abouthome";
import ServiceHome from "./components/home/Servicehome";
import ChooseUsHome from "./components/home/chooseushome";
import AboutSubHome from "./components/home/Aboutsubhome";

function App() {
  useEffect(() => {
    initTheme();
    loader();
  }, []);

  return(
    <>
    <Header/>
    <HeroSection/>
    <Feature/>
    <AboutHome/>
    <ServiceHome/>
    <AboutSubHome/>
    <ChooseUsHome/>
    </>
  )
}

export default App;
