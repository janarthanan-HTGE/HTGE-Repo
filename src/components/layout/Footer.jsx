import { FaInstagram ,FaYoutube,FaLinkedin,FaCircle  } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { GrLocation } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useRef } from "react";
import useFadeUp from "../../hooks/useFadeup";

const FooterSec = () => {
    const fadeUp = useRef(null);
    useFadeUp(fadeUp);
    return (
        <footer className="footer-wrapper">
            <div className="container fade-up" ref={fadeUp}>
                <div className="footer-widgets-1 footer-padding">
                <div className="row g-5">
                    <div
                    className="col-xl-4 col-lg-6 "
                    >
                    <div className="single-footer-widget me-xxl-5 pe-xxl-4">
                        <div className="widget-head">
                        <Link to="/">
                            <img
                            src="/assets/img/logo/black-logo.png"
                            alt="logo"
                            width="100"
                            />
                        </Link>
                        </div>

                        <div className="footer-content">
                        <p>
                            Become our client and experience expert IT services that drive growth
                        </p>

                        <div className="social-icon d-flex align-items-center">
                            <a href="https://www.instagram.com/htge.technologies?igsh=cjI2ODJoNnpva3E2" target="_blank">
                            <FaInstagram />
                            </a>
                            <a href="https://www.facebook.com/p/HTGE-Technologies-Pvt-Ltd-61552079949922/" target="_blank">
                            <FaFacebook />
                            </a>
                            <a href="https://youtube.com/@hitechinstitution?si=0X4iUTzCV6Q0bKvM" target="_blank">
                            <FaYoutube />
                            </a>
                            <a href="https://www.linkedin.com/company/htge-technologies-pvt-ltd" target="_blank">
                            <FaLinkedin />
                            </a>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div
                    className="col-xl-2 col-lg-6"
                    >
                    <div className="single-footer-widget ms-xxl-2">
                        <div className="widget-head">
                        <h4>Useful Links</h4>
                        </div>

                        <ul className="list-area">
                        <li>
                            <Link to="/about">
                            <FaCircle size={4} />
                            About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/services">
                            <FaCircle size={4} />
                            Our Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                            <FaCircle size={4} />
                            Careers
                            </Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div
                    className="col-xl-3 col-lg-6"
                    >
                    <div className="single-footer-widget ms-xxl-4 ps-xxl-3">
                        <div className="widget-head">
                        <h4>Our Services</h4>
                        </div>

                        <ul className="list-area">
                        <li>
                            <Link to="/contact">
                            <FaCircle size={4} />
                            Software Development
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                            <FaCircle size={4} />
                            Website Development
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                            <FaCircle size={4} />
                            Mobile App Development
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                            <FaCircle size={4} />
                            IT Services & Support
                            </Link>
                        </li>
                       
                        </ul>
                    </div>
                    </div>

                    <div
                    className="col-xl-3 col-lg-6"
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
                    &copy; Copyright 2026 HTGE All Rights Reserved
                    </p>
                </div>
                </div>
            </div>
            </footer>


    )
}

export default FooterSec;  