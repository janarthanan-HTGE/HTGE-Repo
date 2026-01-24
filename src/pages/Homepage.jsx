import AboutHome from "../components/home/Abouthome"
import AboutSubHome from "../components/home/Aboutsubhome"
import BrandSection from "../components/home/Brandsection"
import ChooseUsHome from "../components/home/Chooseus"
import CtaSection from "../components/home/Ctasection"
import Feature from "../components/home/Feature"
import HeroSection from "../components/home/Hero"
import ServiceHome from "../components/home/Servicehome"
import TestimonialSection from "../components/home/Testimonialsection"


const Home = () => {
    return (
        <>
        <HeroSection/>
        <Feature/>
        <AboutHome/>
        <ServiceHome/>
        <AboutSubHome/>
        <ChooseUsHome/>
        <BrandSection/>
        <TestimonialSection/>
        <CtaSection/>
        </>
    )
}
export default Home;