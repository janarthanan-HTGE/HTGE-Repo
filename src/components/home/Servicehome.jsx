import { useEffect, useRef } from "react";
import CountUp from "react-countup";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import { FiPieChart } from "react-icons/fi";
import { BsCardChecklist } from "react-icons/bs";
import { BiVector } from "react-icons/bi";

const ServiceHome = () => {
    const services = [
    {
      id: 2,
      image: "/assets/img/service/01.jpg",
      icon: FiPieChart,
      title: "Digital Data Analysis",
      desc:
        "We’ll match you to an entire remote team of incredible freelance talent",
    },
    {
      id: 3,
      image: "/assets/img/service/02.jpg",
      icon: BsCardChecklist,
      title: "QA & Testing",
      desc:
        "We’ll match you to an entire remote team of incredible freelance talent",
    },
    {
      id: 4,
      image: "/assets/img/service/03.jpg",
      icon: BiVector,
      title: "UI/UX Design",
      desc:
        "We’ll match you to an entire remote team of incredible freelance talent",
    },
  ];

  const itemsRef = useRef([]);

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

    itemsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="service-wrapper service-1 section-bg section-padding">
      <div className="shapes">
        <img className="shape-1" src="/assets/img/shape/shape-1.png" alt="" />
        <img className="shape-2" src="/assets/img/world.png" alt="" />
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
                  <CountUp start={0} end={24} duration={4} />+
                </h3>
                <p>Years of Experience</p>
              </div>

              <div className="section-title mt-4">
                <h2 className="split-text left">
                  We run all kinds of IT <br /> services that vow your success
                </h2>
              </div>
            </div>

            <div
              ref={(el) => (itemsRef.current[1] = el)}
              className="col-xl-5 col-lg-6 col-md-12 col-12 fade-right"
            >
              <div className="title">
                <h3>
                  Accelerate innovation with world-class tech teams We’ll match
                  you to an entire remote technology
                </h3>
              </div>
              <div className="progress-items">
                <div className="progress">
                  <div
                    className="progress-value count-bar"
                    style={{ width: "86%" }}
                  ></div>
                </div>
                <div className="point">
                  <p>IT Management</p>
                  <span>86%</span>
                </div>
              </div>

              <div className="progress-items">
                <div className="progress">
                  <div
                    className="progress-value count-bar"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <div className="point">
                  <p>Data Security</p>
                  <span>90%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                ref={(el) => (itemsRef.current[index + 2] = el)}
                className="col-xl-4 col-lg-4 col-md-6 col-12"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.9,
                  ease: "easeOut",
                  delay: index * 0.15, // stagger animation
                }}
              >
                <div className="single-service-item">
                  <div className="shape">
                    <img
                      className="shape-3"
                      src="/assets/img/service/shape-1.png"
                      alt=""
                    />
                    <img
                      className="shape-4"
                      src="/assets/img/service/shape-2.png"
                      alt=""
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
