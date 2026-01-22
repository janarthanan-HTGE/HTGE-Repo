import { FaInstagram ,FaYoutube,FaLinkedin,FaCircle  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";

const FooterSec = () => {
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="footer-widgets-1 footer-padding">
                <div className="row g-5">
                    <div
                    className="col-xl-4 col-lg-6 fade-up"
                    >
                    <div className="single-footer-widget me-xxl-5 pe-xxl-4">
                        <div className="widget-head">
                        <a href="index.html">
                            <img
                            src="https://htge.org/wp-content/uploads/2025/03/HTGE-Logo.jpg"
                            alt="logo-img"
                            width="80"
                            />
                        </a>
                        </div>

                        <div className="footer-content">
                        <p>
                            Mauris ut enim sit amet lacus ornare <br />
                            ullamcorper. Praesent placerat neque eu <br />
                            purus rhoncus
                        </p>

                        <div className="social-icon d-flex align-items-center">
                            <a href="#">
                            <FaInstagram />
                            </a>
                            <a href="#">
                            <FaXTwitter />
                            </a>
                            <a href="#">
                            <FaYoutube />
                            </a>
                            <a href="#">
                            <FaLinkedin />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div
                    className="col-xl-2 col-lg-6 fade-up"
                    >
                    <div className="single-footer-widget ms-xxl-2">
                        <div className="widget-head">
                        <h4>Useful Links</h4>
                        </div>

                        <ul className="list-area">
                        <li>
                            <a href="about.html">
                            <FaCircle size={4} />
                            About Us
                            </a>
                        </li>
                        <li>
                            <a href="services.html">
                            <FaCircle size={4} />
                            Our Services
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                            <FaCircle size={4} />
                            Careers
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div
                    className="col-xl-3 col-lg-6 fade-up"
                    >
                    <div className="single-footer-widget ms-xxl-4 ps-xxl-3">
                        <div className="widget-head">
                        <h4>Our Services</h4>
                        </div>

                        <ul className="list-area">
                        <li>
                            <a href="contact.html">
                            <FaCircle size={4} />
                            Blockchain technology
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                            <FaCircle size={4} />
                            Advanced Technology
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                            <FaCircle size={4} />
                            Infrastructure Technology
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                            <FaCircle size={4} />
                            Data Management
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                            <FaCircle size={4} />
                            Security Management
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>

                    <div
                    className="col-xl-3 col-lg-6 fade-up"
                    >
                    <div className="single-footer-widget ms-xxl-3">
                        <div className="widget-head">
                        <h4>Contact Us</h4>
                        </div>

                        <div className="footer-content">
                        <div className="contact-info-area">
                            <div className="contact">
                            <a href="#">
                                <PiEnvelopeSimpleLight />
                            </a>
                            <div className="contact-infu">
                                <span>Mail Us</span>
                                <h5><a href="mailto:info@htge.org" className="text-black">info@htge.org</a></h5>
                            </div>
                            </div>

                            <div className="contact">
                            <a href="#">
                                <GrLocation />
                            </a>
                            <div className="contact-infu">
                            <span>Address:</span>
                                <h5 className="text-lowercase">
                                3770 Hidden Meadow Drive Venturia, ND 58489
                                </h5>
                            </div>
                            </div>

                            <div className="contact">
                            <a href="#">
                                <BsTelephone />
                            </a>
                            <div className="contact-infu">
                                <span>Phone:</span>
                                <h5>(704) 555-0127</h5>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="footer-bottom section-bg-2">
                <div className="container">
                <div className="footer-bottom-wrapper">
                    <p className="text-center">
                    &copy; Copyright 2025 HTGE All Rights Reserved
                    </p>
                </div>
                </div>
            </div>
            </footer>


    )
}

export default FooterSec;  