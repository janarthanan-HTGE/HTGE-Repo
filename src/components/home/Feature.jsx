import { useRef } from "react";
import useFadeUpCard from "../../hooks/useFadeUpCards";

import { LiaLaptopCodeSolid } from "react-icons/lia";
import { PiCertificateLight } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { TbSpeakerphone } from "react-icons/tb";

const features = [
  {
    icon: PiCertificateLight,
    title: "Hi-Tech Institution",
    delay: 0.2,
    description: "Practical, industry-focused IT training programs",
    subone: "IT Courses",
    subtwo: "Hands-on",
  },
  {
    icon: LiaLaptopCodeSolid,
    title: "Hi-Tech Solution",
    delay: 0.4,
    description: "Reliable IT infrastructure and cloud support services",
    subone: "IT & Cloud Support",
    subtwo: "24×7 Reliability",
  },
  {
    icon: TbSpeakerphone,
    title: "Hi-Tech Virtual Promotion",
    delay: 0.6,
    description: "Result-driven digital marketing solutions",
    subone: "Marketing Services",
    subtwo: "Custom Strategies",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Hi-Tech career builder",
    delay: 0.8,
    description: "Training and placement support for job seekers",
    subone: "Career Support",
    subtwo: "Fresher Focus",
  },
];

const Feature = () => {
  const refs = useRef([]);
  useFadeUpCard(refs);

  return (
    <section className="features-wrapper features-1">
      <div className="container">
        <div className="row">
          {features.map((item, index) => (
            <div
              key={index}
              ref={(el) => (refs.current[index] = el)}
              className="col-xl-3 col-lg-6 col-md-6 col-12 fade-up-card"
              data-delay={item.delay}
            >
              <div className="single-feature-item">
                <div className="icon">
                  <div className="kit">
                    <item.icon />
                  </div>
                </div>

                <h4>{item.title}</h4>

                <p>{item.description}</p>

                <ul>
                  <li>
                    <div className="icro"><FaCheckCircle /></div>
                    {item.subone}
                  </li>
                  <li>
                    <div className="icro"><FaCheckCircle /></div>
                    {item.subtwo}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
