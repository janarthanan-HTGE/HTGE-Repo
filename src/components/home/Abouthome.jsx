import {  useRef } from "react";
import { FaPlay} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import useInViewObserver from "../../hooks/useInViewObserver";

const AboutHome = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useInViewObserver({
  refs: [leftRef, rightRef],
  threshold: 0.3,
});


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
                className="icon video-popup !hidden md:flex"
              >
                <FaPlay />
              </a>


              <div className="image-1 aspect-[3/4]">
                <img
                  src="/assets/img/about/01.jpg"
                  alt="Clientone"
                  className="w-full h-full object-cover block"
                />
              </div>

              <div className="image-2 aspect-square">
                <img
                  src="/assets/img/about/02.png"
                  alt="ClientTwo"
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
                  Highly Tailored Technology, Development &amp; Support Services
                </h2>
              </div>

              <p>
                Accelerate digital transformation with HTGE Technologies Pvt Ltd, an Indian-based Information Technology organization established in March 2017. Originating as a learning academy in Pondicherry, HTGE has evolved into a multi-vertical enterprise delivering reliable, scalable, and future-ready IT solutions for businesses worldwide.
              </p>

              <ul>
                <li>
                  <div className="Circleab"><FaCheckCircle /></div>
                  Website &amp; Mobile application design &amp; Development
                </li>
                <li>
                  <div className="Circleab"><FaCheckCircle /></div>
                  Value-Driven IT Systems & Digital Transformation
                </li>
                <li>
                  <div className="Circleab"><FaCheckCircle /></div>
                  IT Training, Career Development & Skill Enhancement
                </li>
              </ul>

              <div className="about-infu">
                <a href="" className="theme-btn black-btn">
                  More About Us
                </a>

                <div className="contact-us">
                  <div className="text">
                    <span>Call to ask any question</span>
                    <h4>+91 70929 09192</h4>
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
