import { RxEnvelopeClosed } from "react-icons/rx";

const AboutSubHome = () => {
    return (
        <section className="about-wrapper about-2 mx-xl-5 section-padding pt-0">
        <div
            className="bg-image bg-cover "
            style={{ backgroundImage: "url(assets/img/about/01-bg.png)" }}
        ></div>

        <div className="container">
            <div className="about-content fade-up">
            <div className="section-title text-center">
                <div className="sub-title sub-title2">
                <span className="text-white">ABOUT OUR COMPANY</span>
                </div>

                <h2 className="text-white split-text right">
                Technological Applications <br />
                Play a Role in Improving Our <br />
                Community
                </h2>
            </div>

            <p className="text-center">
                In today's competitive business, the demand for efficient and cost-
                <br />
                effective IT solutions has never been more critical.
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