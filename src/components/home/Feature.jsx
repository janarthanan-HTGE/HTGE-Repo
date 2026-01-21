// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { PiAppStoreLogoBold,PiChartLineUp } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
import {FaCheckCircle} from "react-icons/fa";

const features = [
  {
    icon: LiaLaptopCodeSolid,
    title: "Custom Software Development", 
    delay: 0.2,
    description:"At Zotech, our mission is to empower businesses.", 
    subone:"Career progression",
    subtwo:"Career progression",
  },
  {
    icon: PiAppStoreLogoBold,
    title: "Web and Mobile Development",
    delay: 0.4, 
    description:"At Zotech, our mission is to empower businesses.",
    subone:"Career progression",
    subtwo:"Career progression",
  },
  {
    icon: PiChartLineUp,
    title: "Business and IT Consultancy",
    delay: 0.6,
    description:"At Zotech, our mission is to empower businesses.",
    subone:"Career progression",
    subtwo:"Career progression",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Advance Tool and Design",
    delay: 0.8,
    description:"At Zotech, our mission is to empower businesses.",
    subone:"Career progression",
    subtwo:"Career progression",
  },
];

const Feature = () => {

  return (
    <section className="features-wrapper features-1">
      <div className="container">
        <div className="row">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="col-xl-3 col-lg-6 col-md-6 col-12 fade-up-card"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                ease: "easeOut",
                delay: item.delay,
              }}
            >
              <div className="single-feature-item">
                <div className="icon">
                  <div className="kit">
                    <item.icon/>
                  </div>
                </div>

                <h4>
                  <a href="services-details.html">{item.title}</a>
                </h4>

                <p>
                  {item.description}
                </p>

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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
