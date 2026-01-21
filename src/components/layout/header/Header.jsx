import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsList } from "react-icons/bs";
import {
  FaXmark,
  FaLocationDot,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";

const Header = () => {

  useEffect(() => {
    const header = document.getElementById("header-sticky");
    const overlay = document.querySelector(".offcanvas__overlay");
    const offcanvas = document.querySelector(".offcanvas__info");

    const onScroll = () => {
      if (window.scrollY > 100) {
        header?.classList.add("sticky");
      } else {
        header?.classList.remove("sticky");
      }
    };

    const closeMenu = () => {
      offcanvas?.classList.remove("info-open");
      overlay?.classList.remove("overlay-open");
    };

    window.addEventListener("scroll", onScroll);
    overlay?.addEventListener("click", closeMenu);

    return () => {
      window.removeEventListener("scroll", onScroll);
      overlay?.removeEventListener("click", closeMenu);
    };
  }, []);

  const openMenu = () => {
    document
      .querySelector(".offcanvas__info")
      ?.classList.add("info-open");
    document
      .querySelector(".offcanvas__overlay")
      ?.classList.add("overlay-open");
  };

  const closeMenu = () => {
    document
      .querySelector(".offcanvas__info")
      ?.classList.remove("info-open");
    document
      .querySelector(".offcanvas__overlay")
      ?.classList.remove("overlay-open");
  };

  return (
    <>
      {/* ================= Offcanvas Area ================= */}
      <div className="fix-area">
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
                  <button onClick={closeMenu}>
                    <div className="text-white font-extrabold -mb-0.5"><FaXmark /></div>
                  </button>
                </div>
              </div>
              {/* MOBILE MENU (SAME DESIGN STRUCTURE) */}
              <div className="mobile-menu fix mb-3">
                <ul>
                  <li>
                    <Link to="/" onClick={closeMenu}>Home</Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeMenu}>About</Link>
                  </li>
                  <li>
                    <Link to="/services" onClick={closeMenu}>Services</Link>
                  </li>
                  <li>
                    <Link to="/team" onClick={closeMenu}>Team</Link>
                  </li>
                  <li>
                    <Link to="/contact" onClick={closeMenu}>Contact</Link>
                  </li>
                </ul>
              </div>

              <div className="offcanvas__contact">
                <h4>Contact Info</h4>

                <ul>
                  <li className="d-flex align-items-center">
                    <div className="text-[#0B6EDA] pr-4">
                      <FaLocationDot />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        className="text-black"
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
                      <FaEnvelope />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        className="text-black"
                        href="mailto:info@example.com"
                      >
                        info@example.com
                      </a>
                    </div>
                  </li>

                  <li className="d-flex align-items-center">
                    <div className="text-[#0B6EDA] mr-4">
                      <FaPhone />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        className="text-black"
                        href="tel:+11002345909"
                      >
                        +11002345909
                      </a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link
                    to="/contact"
                    className="theme-btn black-btn"
                    onClick={closeMenu}
                  >
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

      {/* OFFCANVAS OVERLAY */}
      <div
        className="offcanvas__overlay"
        onClick={closeMenu}
      ></div>

      {/* ================= HEADER SECTION ================= */}
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
                  {/* DESKTOP MENU */}
                  <div className="mean__menu-wrapper d-none d-xl-block">
                    <div className="main-menu">
                      <nav>
                        <ul>
                          <li className="has-dropdown active">
                            <Link to="/">Home</Link>
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
                  {/* CTA BUTTON */}
                  <div className="header-button d-none d-sm-block">
                    <Link
                      to="/contact"
                      className="theme-btn black-btn"
                    >
                      Get In Touch
                    </Link>
                  </div>

                  {/* MOBILE HAMBURGER */}
                  <div className="header__hamburger d-xl-none my-auto">
                    <button
                      className="sidebar__toggle"
                      onClick={openMenu}
                      aria-label="Open Menu"
                    >
                      <BsList />
                    </button>
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
