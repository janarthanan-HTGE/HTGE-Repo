// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { PiAppStoreLogoBold,PiChartLineUp } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";

const features = [
  {
    icon: LiaLaptopCodeSolid,
    title: "Custom Software Development", 
    delay: 0.2,
  },
  {
    icon: PiAppStoreLogoBold,
    title: "Web and Mobile Development",
    delay: 0.4,
  },
  {
    icon: PiChartLineUp,
    title: "Business and IT Consultancy",
    delay: 0.6,
  },
  {
    icon: MdOutlineDesignServices,
    title: "Advance Tool and Design",
    delay: 0.8,
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
                  At Zotech, our mission is to empower businesses.
                </p>

                <ul>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Career progression
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i>
                    Career progression
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
