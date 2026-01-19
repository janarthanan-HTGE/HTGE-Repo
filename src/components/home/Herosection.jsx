import { useEffect } from "react";
import {
  initGsapHtge,
  destroyGsapHtge,
} from "../../utils/Gsaphtge";

const HeroSection = () => {
  useEffect(() => {
    document.fonts.ready.then(() => {
      initGsapHtge();
    });

    return () => {
      destroyGsapHtge();
    };
  }, []);

  return (
    <section className="hero-wrapper hero-1 mx-xl-5">
      <div className="shape">
        <img
          className="shape-1"
          src="/assets/img/world.png"
          alt=""
        />
      </div>

      <div
        className="hero-bg bg-cover"
        style={{
          backgroundImage:
            "url('/assets/img/hero/hero-1-1-bg.png')",
        }}
      />

      <div className="container">
        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <div className="hero-content pe-xl-3 text-lg-start text-center tp-play-up">
              <h1 className="fade-up">
                Empowering Ideas with Technological Excellence
              </h1>

              <p className="parat">
                In today's competitive business, the demand for efficient and
                cost-effective IT solutions has never been more critical.
              </p>

              <div className="hero-button mt-4 tp-play-up">
                <a href="causes.html" className="theme-btn tp-btn-bounce">
                  Explore More
                </a>
              </div>

              <div className="feedback d-flex mt-xl-5 justify-content-lg-start justify-content-center">
                <div className="infu">
                  <img src="/assets/img/google.png" alt="" />
                  <p>
                    <span>4.8</span> From&nbsp;799+&nbsp;reviews
                  </p>
                </div>

                <div className="infu">
                  <img src="/assets/img/rating.png" alt="" />
                  <p>
                    <span>4.9</span> From&nbsp;200+&nbsp;reviews
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-12 fade-up">
            <div className="hero-image mx-lg-0 mx-auto md:-mb-5">
              <img
                src="/assets/img/hero/hero-1.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
