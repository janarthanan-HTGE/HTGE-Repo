import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import { FaXmark,FaLocationDot,FaEnvelope,FaPhone } from "react-icons/fa6";

const Header = () => {
  return (
    <>
      {/* ================= Offcanvas Area ================= */}
      <div className="fix-area ">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link to="/">
                    <img
                      src="/assets/img/logo/black-logo.png"
                      alt="logo-img"
                    />
                  </Link>
                </div>

                <div className="offcanvas__close">
                  <button className="text-white pt-3 font-bold">
                    <FaXmark/>
                  </button>
                </div>
              </div>

              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis Aenean
                a imperdiet risus.
              </p>

              <div className="mobile-menu fix mb-3"></div>

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>

                <ul>
                  <li className="d-flex align-items-center">
                    <div className="text-[#0B6EDA] pr-4">
                      <FaLocationDot/>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a className="text-black"
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Main Street, Melbourne, Australia
                      </a>
                    </div>
                  </li>

                  <li className="d-flex align-items-center">
                    <div className="text-[#0B6EDA] mr-4">
                      <FaEnvelope/>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a className="text-black" href="mailto:info@example.com">
                        info@example.com
                      </a>
                    </div>
                  </li>

                  <li className="d-flex align-items-center">
                    <div className="text-[#0B6EDA] mr-4">
                      <FaPhone />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a className="text-black" href="tel:+11002345909">
                        +11002345909
                      </a>
                    </div>
                  </li>
                </ul>

                <div className="header-button mt-4">
                  <Link to="/contact" className="theme-btn black-btn">
                    Contact Us
                  </Link>
                </div>

                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas__overlay"></div>

      {/* ================= Header Section ================= */}
      <header>
        <div id="header-sticky" className="header-1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link to="/" className="header-logo">
                      <img
                        src="/assets/img/logo/black-logo.png"
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                </div>

                <div className="header-right">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="has-dropdown active menu-thumb">
                            <Link to="/">Home</Link>
                          </li>

                          <li className="has-dropdown active d-xl-none">
                            <Link to="#" className="border-none">
                              Home
                            </Link>
                          </li>

                          <li>
                            <Link to="/about">About</Link>
                          </li>

                          <li>
                            <Link to="/services">Services</Link>
                          </li>

                          <li>
                            <Link to="/team">Team</Link>
                          </li>

                          <li>
                            <Link to="/contact">Contact</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="header-button d-none d-sm-block">
                    <Link
                      to="/contact"
                      className="theme-btn black-btn"
                    >
                      Get In Touch
                    </Link>
                  </div>

                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <BsList />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
