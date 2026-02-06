import AboutChooseUs from "../components/about/Chooseus";
import MarqueeSection from "../components/about/Textsider";
import AboutVid from "../components/about/videosection";
import AboutHome from "../components/home/Abouthome";
import BreadCrumb from "../components/overlay/Firstsection";


const About = () => {
    return(
        <>
        <BreadCrumb/>
        <AboutHome/>
        <MarqueeSection/>
        <AboutChooseUs/>
        <AboutVid/>
      
        </>
       
      
    )
}

export default About;