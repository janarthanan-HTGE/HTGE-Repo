import { useRef } from "react";
import useInViewObserver from "../../hooks/useInViewObserver";


const ChooseUsHome = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  const count98Ref = useRef(null);
  const count6795Ref = useRef(null);
  const countStarted = useRef(false);

  const startCount = (el, end, duration = 3000) => {
    if (!el) return;

    const startTime = performance.now();

    const update = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      el.textContent = Math.floor(progress * end);

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  };

  useInViewObserver({
    refs: [leftRef, rightRef],
    threshold: 0.3,
    onEnter: () => {
      if (countStarted.current) return;
      countStarted.current = true;

      startCount(count98Ref.current, 90);
      startCount(count6795Ref.current, 2658);
    },
  });

  return (
    <section className="choose-us-wrapper choose-us-1 section-padding pb-xl-0">
        <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
                <linearGradient id="chooseUsIconGradient" gradientTransform="rotate(84)">
                <stop offset="0%" stopColor="var(--theme)" />
                <stop offset="100%" stopColor="var(--theme-2)" />
                </linearGradient>
            </defs>
        </svg>

      <div className="shape">
        <img src="/assets/img/world.png" alt="world" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-12 col-md-12">
            <div
              ref={leftRef}
              className="choose-us-images fade-left"
            >
              <img src="/assets/img/why-choose/01.png" alt="man" />
              <div className="shape-img">
                <img src="/assets/img/shape/shape-2.png" alt="style-circle" />
              </div>
            </div>
          </div>

          <div
            ref={rightRef}
            className="col-xl-6 col-lg-8 col-md-12 mt-5 pt-4 fade-right"
          >
            <div className="choose-us-content ms-xl-4 ps-xl-1">
              <div className="section-title">
                <div className="sub-title">
                  <span>WHY CHOOSE US</span>
                </div>
                <h2 className="split-text right">
                  We Deliver Reliable IT Solutions for Your Business Success
                </h2>
              </div>

              <p className="mt-4 pe-xl-5 me-xl-3 text-justify">
                HTGE Technologies Pvt Ltd is a trusted IT partner for startups, SMEs, and enterprises worldwide. We support business growth through custom software development, digital marketing, managed IT services, and career-focused training by delivering secure, scalable, and cost-effective technology solutions. Our expert team follows industry best practices to provide tailored solutions with quality, transparency, and timely delivery. We focus on innovation, long-term partnerships, and measurable results to ensure sustainable business success.
              </p>

              {/* <div className="icon-box d-flex mt-4 pt-3 text-center text-md-start">
                <div className="single-icon-box">
                  <div className="iconnic">
                        <div className="icon"><BiWorld size={40}/></div>
                  </div>
                  <h4>Global Company</h4>
                  <p>
                    Our great team of more than to 1400 software experts member.
                  </p>
                </div>

                <div className="single-icon-box">
                  <div className="icon">
                    <PiMedal size={40}/>
                  </div>
                  <h4>Award Wining</h4>
                  <p>
                    Our great team of more than to 1400 software experts member.
                  </p>
                </div>
              </div> */}

              <div className="count-box">
                <div className="single-count">
                  <h2>
                    <span ref={count98Ref}>0</span>%
                  </h2>
                  <p>Successful Clients</p>
                </div>

                <div className="single-count">
                  <h2>
                    <span ref={count6795Ref}>0</span>+
                  </h2>
                  <p>Completed Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsHome;
