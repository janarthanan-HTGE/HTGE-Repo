import { useRef } from "react";
import { RxEnvelopeClosed } from "react-icons/rx";
import useFadeUp from "../../hooks/useFadeup";

const AboutSubHome = () => {
    const fadeRef = useRef(null);
    useFadeUp(fadeRef);

    return (
        <section className="about-wrapper about-2 mx-xl-5 section-padding pt-0">
        <div
            className="bg-image bg-cover "
            style={{ backgroundImage: "url(assets/img/about/01-bg.png)" }}
        ></div>

        <div className="container">
            <div ref={fadeRef} className="about-content fade-up">
            <div className="section-title text-center">
                <div className="sub-title sub-title2">
                <span className="text-white">ABOUT OUR COMPANY</span>
                </div>

                <h2 className="text-white split-text right">
                Technology-Driven IT Solutions for <br /> Business & Community Growth
                </h2>
            </div>

            <p className="text-center">
                In today’s competitive digital world, HTGE Technologies Pvt Ltd delivers efficient, secure, and <br/> 
                cost-effective IT solutions that help businesses grow, innovate, and create long-term value through technology.

            </p>

            <div className="infu text-center d-flex align-items-center justify-content-center">
                <a href="about.html" className="theme-btn">
                Get Started Now
                </a>

                <div className="contact-us d-flex">
                    <a href="">
                        <RxEnvelopeClosed/>
                    </a>

                    <div className="text text-start">
                        <span>Our Gmail</span>
                        <h4>
                        <a href="mailto:info@htge.org" className="text-white">
                            info@htge.org
                        </a>

                        </h4>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default AboutSubHome;