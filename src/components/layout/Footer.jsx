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
                            src="/public/assets/img/logo/black-logo.png"
                            alt="logo"
                            width="100"
                            />
                        </a>
                        </div>

                        <div className="footer-content">
                        <p>
                            Become our client and experience expert IT services that drive growth
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
                            Software Development
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                            <FaCircle size={4} />
                            Website Development
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                            <FaCircle size={4} />
                            Mobile App Development
                            </a>
                        </li>
                        <li>
                            <a href="contact.html">
                            <FaCircle size={4} />
                            IT Services & Support
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
                            <a href="mailto:info@htge.org">
                                <PiEnvelopeSimpleLight />
                            </a>
                            <div className="contact-infu">
                                <span>Mail Us</span>
                                <h5><a href="mailto:info@htge.org" className="text-black">info@htge.org</a></h5>
                            </div>
                            </div>

                            <div className="contact">
                            <a href="https://share.google/nIli1kelOepn2i9RD">
                                <GrLocation />
                            </a>
                            <div className="contact-infu">
                            <span>Address:</span>
                                <h5>
                                TIDEL NEO, <br />Thiruchitrabalam - Koot Road, <br />Tamil Nadu - 605111.
                                </h5>
                            </div>
                            </div>

                            <div className="contact">
                            <a href="tel:+917092909192">
                                <BsTelephone />
                            </a>
                            <div className="contact-infu">
                                <span>Phone:</span>
                                <h5>+91 70929 09192</h5>
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