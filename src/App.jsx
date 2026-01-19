import { useEffect } from "react";
import { initTheme, loader } from "./utils/main-js";
import HeroSection from "./components/Home/herosection";
import Header from "./components/layout/header/Header";
import Feature from "./components/home/Feature";
import AboutHome from "./components/home/Abouthome";
import ServiceHome from "./components/home/Servicehome";

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
    </>
  )
}

export default App;
