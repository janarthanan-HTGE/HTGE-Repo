import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  initGsapHtge,
  destroyGsapHtge
} from "../../utils/Gsaphtge";
import useFadeUp from "../../hooks/useFadeUpNor";

const HeroSection = () => {
  const imageRef = useRef(null);
  useFadeUp(imageRef);


  useEffect(() => {
    document.fonts.ready.then(() => {
      initGsapHtge();
    });

    return () => {
      destroyGsapHtge();
    };
  }, []);

  return (
    <section className="hero-wrapper hero-1 mx-xl-5" onClick={() => console.log("section clicked")}>
      <div className="shape">
        <img
          className="shape-1"
          src="/assets/img/world.png"
          alt="world"
        />
      </div>

      <div
        className="hero-bg bg-cover"
        style={{
          backgroundImage:
            "url('/assets/img/hero/hero-1-1-bg.webp')",
        }}
      />

      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="hero-content pe-xl-3 text-lg-start text-center">
              <div className="tp-play-up">
                <h1>
                Welcome To HTGE Technologies Pvt Ltd
              </h1>
              

              <p className="parat">
                Since 2017, we deliver customer-focused services worldwide across digital marketing, IT solutions & infrastructure support, and career development through our four specialized verticals.
              </p>
              </div>

              <div className="hero-btn mt-4 tp-btn-play-up">
                <Link to="/about" className="theme-btn">
                  Explore More
                </Link>
              </div>

              <div className="tp-play-up">
                <div className="feedback d-flex mt-xl-5 justify-content-lg-start justify-content-center">
                <div className="infu">
                  <img src="/assets/img/google.png" alt="google" />
                  <p>
                    <span>4.9</span> From&nbsp;70+&nbsp;reviews
                  </p>
                </div>

                <div className="infu">
                  <img src="/assets/img/rating.png" alt="rating" />
                  <p>
                    <span>4.8</span> From&nbsp;20+&nbsp;reviews
                  </p>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12 fade-up" ref={imageRef}>
            <div className="hero-image mx-lg-0 mx-auto md:-mb-5">
              <img
                src="/assets/img/hero/hero-1.webp"
                alt="man"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;