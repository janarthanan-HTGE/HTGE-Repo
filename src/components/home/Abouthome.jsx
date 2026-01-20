import { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa6";

const AboutHome = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-wrapper about-1 section-padding overflow-hidden">
      <div className="container">
        <div className="row g-4 items-center">

          {/* LEFT */}
          <div
            ref={leftRef}
            className="
              col-xl-7 col-lg-12 col-md-12 col-12
              fade-left
              transform-gpu
              will-change-transform
              backface-hidden
            "
          >
            <div className="about-images relative">

              <a
                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                className="icon video-popup"
              >
                <FaPlay />
              </a>

              <div className="image-1 aspect-[3/4]">
                <img
                  src="/assets/img/about/01.jpg"
                  alt="img"
                  className="w-full h-full object-cover block"
                />
              </div>

              <div className="image-2 aspect-square">
                <img
                  src="/assets/img/about/02.png"
                  alt="img"
                  className="w-full h-full object-contain block"
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            ref={rightRef}
            className="
              col-xl-5 col-lg-12 col-md-12 col-12
              fade-right
              transform-gpu
              will-change-transform
              backface-hidden
            "
          >
            <div className="about-content mt-4 ms-xxl-4">
              <div className="section-title">
                <div className="sub-title">
                  <span>ABOUT OUR COMPANY</span>
                </div>

                <h2 className="split-text right">
                  Highly Tailored Technology, Develop <br /> &amp; Support Services.
                </h2>
              </div>

              <p>
                Accelerate innovation with world-class tech teams We’ll match
                you to an entire remote team of incredible freelance talent for
                all your software development needs.
              </p>

              <ul>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Website &amp; Mobile application design &amp; Development
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Dramatically re-engineer value added IT systems via mission
                </li>
                <li>
                  <i className="fas fa-check-circle"></i>
                  Professional User Experince &amp; Interface researching
                </li>
              </ul>

              <div className="about-infu">
                <a href="" className="theme-btn black-btn">
                  More About Us
                </a>

                <div className="contact-us">
                  <img
                    src="/assets/img/about/03.png"
                    alt=""
                    className="block"
                  />
                  <div className="text">
                    <span>Call to ask any question</span>
                    <h4>0123-456-7890</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHome;
