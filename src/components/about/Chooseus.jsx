import { GiEyeTarget, GiWallet, GiWorld } from "react-icons/gi";
import { FaArrowsToCircle } from "react-icons/fa6";
import { GoRocket } from "react-icons/go";
import { MdOutlineEngineering, MdOutlineTaskAlt, MdVerified } from "react-icons/md";

const chooseItems = [
  {
    icon: FaArrowsToCircle,
    title: "Our Mission",
    desc: " To empower business with innovative secure and efficient  IT solutions that simplify complexity.",
  },
  {
    icon: GiEyeTarget,
    title: "Our Vision",
    desc: "To become  a world trusted IT service provider",
  },
  {
    icon: GoRocket,
    title: "Our Strategy",
    desc: " We provide  technology with business objective throughcareful ,planning,plan execution and build trust",
  },
  {
    icon: GiWallet,
    title: "Our Philosophy",
    desc: "We believe in building long term partnership by maintaining transparency and providing new innovation",
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
                  We deliver smart IT solutions that increase business growth
                </h2>
              </div>

              <p className="mt-4 text-center">
                We help enhance digital performance and scale with confidence through reliable, future-ready IT solutions and well-trained teams to achieve business goals
              </p>

              <div className="reviews d-flex mt-4 pt-3">
                <div className="infu">
                  <div className="head d-flex align-items-center">
                    <div className="icon">
                      <MdVerified/>
                    </div>
                    <h4 className="mt-3">Trusted Partnership</h4>
                  </div>
                  <p>
                    A reliable technology partner <br /> delivering consistent <br /> and scalable IT solutions.
                  </p>
                </div>

                <div className="infu">
                  <div className="head d-flex align-items-center">
                    <div className="icon">
                      <MdOutlineEngineering/>
                    </div>
                    <h4 className="mt-3">Industry Expertise</h4>
                  </div>
                  <p>
                    Experienced professionals <br />delivering practical and <br /> future-ready IT solutions.
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
