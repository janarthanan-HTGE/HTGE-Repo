import { GiEyeTarget, GiWallet, GiWorld } from "react-icons/gi";
import { FaArrowsToCircle } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";

const chooseItems = [
  {
    icon: FaArrowsToCircle,
    title: "Our Mission",
    desc: "Back up your database, store in a safe and secure place while still maintaining.",
  },
  {
    icon: GiEyeTarget,
    title: "Our Vision",
    desc: "Back up your database, store in a safe and secure place while still maintaining.",
  },
  {
    icon: GoRocket,
    title: "Our Strategy",
    desc: "Back up your database, store in a safe and secure place while still maintaining.",
  },
  {
    icon: GiWallet,
    title: "Our Philosophy",
    desc: "Back up your database, store in a safe and secure place while still maintaining.",
  },
];

const AboutChooseUs = () => {
  return (
    <section className="choose-us-wrapper choose-us-3 section-padding chooseus-bg choose-us-page">
      <div className="container">
        <div className="row g-5">

          {/* LEFT CONTENT */}
          <div className="col-xl-6 col-lg-12 col-md-12 mt-xl-4">
            <div className="choose-us-content ms-xl-4 ps-xl-1">
              <div className="section-title">
                <div className="sub-title">
                  <span>WHY CHOOSE US</span>
                </div>
                <h2>
                  We provide truly <br />
                  prominent IT solutions <br />
                  for your success
                </h2>
              </div>

              <p className="mt-4">
                HTGE is the partner of choice for many of the world’s <br />
                leading enterprises,
              </p>

              <div className="reviews d-flex mt-4 pt-3">
                <div className="infu">
                  <img src="assets/img/why-choose/04.png" alt="" />
                  <h4>
                    Join our 50503+ <br /> Satisfied World Clients
                  </h4>
                </div>

                <div className="infu">
                  <div className="head d-flex align-items-center">
                    <div className="icon">
                      <GiWorld />
                    </div>
                    <h4>Global Company</h4>
                  </div>
                  <p>
                    Our great team of more than <br /> 1400 software experts member.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-xl-6 col-lg-12 col-md-12">
            <div className="choose-us-images">
              <img
                className="shape-1"
                src="assets/img/world.png"
                alt=""
              />

              <div className="row">
                {chooseItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className={`col-xl-6 col-lg-6 col-md-6 ${
                        index % 2 === 0 ? "mt-xl-4" : ""
                      }`}
                    >
                      <div className="single-choose-item mt-4 mt-xl-0">

                        {/* SHAPES */}
                        <div className="shape">
                          <img
                            className="shape-2"
                            src="assets/img/shape/shape-10.png"
                            alt=""
                          />
                          <img
                            className="shape-3"
                            src="assets/img/shape/shape-11.png"
                            alt=""
                          />
                        </div>

                        {/* CONTENT */}
                        <div className="icon">
                          <Icon />
                        </div>

                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>

                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutChooseUs;
