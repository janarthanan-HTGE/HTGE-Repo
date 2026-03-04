import { useRef } from "react";
import { Link } from "react-router-dom";
import services from "../../utils/Services.json";
import useFadeUpCard from "../../hooks/useFadeUpCards";

import {
  FaBullhorn,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaHeadset,
  FaLongArrowAltRight,
  FaPaintBrush
} from "react-icons/fa";

const iconMap = {
  FaBullhorn,
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaHeadset,
  FaPaintBrush
};

const createSlug = (text) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const Services = () => {
  const cardRefs = useRef([]);
  useFadeUpCard(cardRefs);

  return (
    <section className="service-wrapper service-4 bg-[#fafafa] section-padding">
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>OUR SERVICES</span>
          </div>

          <h2>
            Preparing for Your Success, We <br />
            Provide Truly IT Solutions.
          </h2>
        </div>

        <div className="service-inner text-center overflow-hidden mt-4 pt-3">
          <div className="row gy-xxl-5">
            {services.map((service, index) => {
              const slug = createSlug(service.title);
              const Icon = iconMap[service.icon];

              return (
                <div
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-6 d-flex"
                  key={slug}
                >
                  <div
                    ref={(el) => {
                      cardRefs.current[index] = el;
                      if (el) el.style.transitionDelay = `${index * 120}ms`;
                    }}
                    className="signle-service-item fade-up-card"
                  >
                    <div
                      className="service-bg bg-cover"
                      style={{
                        backgroundImage: `url(${service.image})`,
                      }}
                    />

                    <div className="icon faico">
                      {Icon && <Icon size={30} />}
                    </div>

                    <div className="line mb-4"></div>

                    <h4 style={{ fontWeight: "bold" }}>
                      <Link to={`/services/${slug}`}>
                        {service.title}
                      </Link>
                    </h4>

                    <p className="pt-3">{service.description}</p>

                    <Link
                      to={`/services/${slug}`}
                      className="infu-btn"
                    >
                      Read More
                      <FaLongArrowAltRight/>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;