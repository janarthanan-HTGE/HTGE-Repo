import AboutHome from "../home/Abouthome"
import AboutSubHome from "../home/Aboutsubhome"
import BrandSection from "../home/Brandsection"
import ChooseUsHome from "../home/Chooseus"
import CtaSection from "../home/Ctasection"
import Feature from "../home/Feature"
import HeroSection from "../home/Hero"
import ServiceHome from "../home/Servicehome"
import TestimonialSection from "../home/Testimonialsection"

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