import { useRef } from "react";
import CountUp from "react-countup";
//eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import { MdAutoGraph } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import useInViewObserver from "../../hooks/useInViewObserver";

const ServiceHome = () => {
  const services = [
    {
      id: 2,
      image: "/assets/img/service/01.jpg",
      icon: FaCode,
      title: "Software Development",
      desc: "Scalable and secure web, mobile, and enterprise software solutions.",
    },
    {
      id: 3,
      image: "/assets/img/service/02.jpg",
      icon: MdAutoGraph,
      title: "Digital Marketing",
      desc: "Boost your online presence with SEO, social media, PPC, and digital branding services.",
    },
    {
      id: 4,
      image: "/assets/img/service/03.jpg",
      icon: PiCertificateLight,
      title: "Internships & Training",
      desc: "Gain real-world skills through job-oriented IT internships and professional training programs.",
    },
  ];

  const progressRef = useRef([]);
  const itemsRef = useRef([]);
  const countUpRef = useRef(null);
  const countUpStarted = useRef(false);

  useInViewObserver({
    refs: progressRef,
    threshold: 0.4,
    className: "animate",
  });

  useInViewObserver({
    refs: itemsRef,
    threshold: 0.3,
    className: "in-view",
    onEnter: () => {
      if (!countUpStarted.current && countUpRef.current) {
        countUpRef.current();
        countUpStarted.current = true;
      }
    },
  });

  return (

    <section className="service-wrapper service-1 section-bg section-padding">
      <div className="shapes">
        <img className="shape-1" src="/assets/img/shape/shape-1.png" alt="DNA" />
        <img className="shape-2" src="/assets/img/world.png" alt="world" />
      </div>

      <div className="container">
        <div className="service-inner">
          <div className="row">
            <div
              ref={(el) => (itemsRef.current[0] = el)}
              className="col-xl-7 col-lg-6 col-md-12 col-12 fade-left"
            >
              <div className="countbox">
                <h3>
                  <CountUp start={0} end={7} duration={4}>
                    {({ countUpRef: ref, start }) => {
                      countUpRef.current = start;
                      return <span ref={ref} />;
                    }}
                  </CountUp>
                  +
                </h3>
                <p>Years of Experience</p>
              </div>

              <div className="section-title mt-4">
                <h2 className="split-text left">
                  We Run End-to-End IT <br />Services That Drive Your Business Success
                </h2>
              </div>
            </div>

            <div
              ref={(el) => (itemsRef.current[1] = el)}
              className="col-xl-5 col-lg-6 col-md-12 col-12 fade-right"
            >
              <div className="title">
                <h3>
                  Accelerate Innovation With World-Class Technology Teams
                </h3>
              </div>
              <div className="progress-items">
                <div className="progress">
                  <div ref={(el) => (progressRef.current[0] = el)}
                    className="progress-value count-bar w-86"
                    
                  ></div>
                </div>
                <div className="point">
                  <p>IT Solutions & Digital Services</p>
                  <span>90%</span>
                </div>
              </div>

              <div className="progress-items">
                <div className="progress">
                  <div ref={(el) => (progressRef.current[1] = el)}
                    className="progress-value count-bar w-90"
                  ></div>
                </div>
                <div className="point">
                  <p>IT Training & Career Development Services</p>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => (itemsRef.current[index + 2] = el)}
                className="col-xl-4 col-lg-4 col-md-6 col-12 fade-up-card"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                  delay: index * 0.15, 
                }}
              >
                <div className="single-service-item">
                  <div className="shape">
                    <img
                      className="shape-3"
                      src="/assets/img/service/shape-1.png"
                      alt="curve-right"
                    />
                    <img
                      className="shape-4"
                      src="/assets/img/service/shape-2.png"
                      alt="curve-left"
                    />
                  </div>

                  <div className="image">
                    <img src={service.image} alt={service.title} />
                  </div>

                  <div className="content">
                    <div className="icon">
                      <div className="niki"><service.icon size={28} /></div>
                    </div>
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>



        </div>
      </div>
    </section>
  );
};

export default ServiceHome;
