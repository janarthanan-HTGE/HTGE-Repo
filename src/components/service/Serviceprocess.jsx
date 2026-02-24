import { BiConversation } from "react-icons/bi";
import { LuMonitorCheck } from "react-icons/lu";
import { GrVmMaintenance } from "react-icons/gr";
import { GoCodeReview } from "react-icons/go";
import shape6 from "/assets/img/process/shape-6.png";
import shape7 from "/assets/img/process/shape-7.png";
import { useRef } from "react";
import useFadeUp from "../../hooks/useFadeUpNor";

const Process = () => {

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  useFadeUp(ref1);
  useFadeUp(ref2);
  useFadeUp(ref3);
  useFadeUp(ref4);

  return (
    <section className="process-wrapper process-2 section-bg p-10">
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="split-text right">
            Our Working Process in 4 Steps
          </h2>
        </div>

        <div className="row mt-4">

          {/* 01 */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div
              ref={ref1}
              className="signle-process-item pe-xl-4 fade-up"
              style={{ "--delay": "0.2s" }}
            >
              <img className="shape-1" src={shape6} alt="" />
              <div className="icons">
                <div className="icon-1">
                  <BiConversation size={40} />
                </div>
                <div className="icon-2">01</div>
              </div>
              <h4 className="mb-2" style={{ fontWeight: "500" }}>
                Requirement Analysis
              </h4>
              <p>
                Understand client needs, business goals, target audience, and define clear project scope and technical requirements.
              </p>
            </div>
          </div>

          {/* 02 */}
          <div className="col-xl-3 col-lg-6 col-md-6 mt-xl-5">
            <div
              ref={ref2}
              className="signle-process-item pe-xl-3 ps-xl-2 fade-up"
              style={{ "--delay": "0.4s" }}
            >
              <img className="shape-2" src={shape7} alt="" />
              <div className="icons">
                <div className="icon-1">
                  <LuMonitorCheck size={40} />
                </div>
                <div className="icon-2">02</div>
              </div>
              <h4 className="mb-2" style={{ fontWeight: "500" }}>
                Planning & Strategy
              </h4>
              <p>
                Create project roadmap, choose technologies, design wireframes, and finalize development timeline and milestones.
              </p>
            </div>
          </div>

          {/* 03 */}
          <div className="col-xl-3 col-lg-6 col-md-6">
            <div
              ref={ref3}
              className="signle-process-item ps-xl-3 pe-xl-2 fade-up"
              style={{ "--delay": "0.6s" }}
            >
              <img className="shape-1" src={shape6} alt="" />
              <div className="icons">
                <div className="icon-1">
                  <GrVmMaintenance size={40} />
                </div>
                <div className="icon-2">03</div>
              </div>
              <h4 className="mb-2" style={{ fontWeight: "500" }}>
                Development & Testing
              </h4>
              <p>
                Build the solution, integrate features, perform quality testing, and ensure security and performance.
              </p>
            </div>
          </div>

          {/* 04 */}
          <div className="col-xl-3 col-lg-6 col-md-6 mt-xl-5">
            <div
              ref={ref4}
              className="signle-process-item ps-xl-4 fade-up"
              style={{ "--delay": "0.8s" }}
            >
              <div className="icons">
                <div className="icon-1">
                  <GoCodeReview size={40} />
                </div>
                <div className="icon-2">04</div>
              </div>
              <h4 className="mb-2" style={{ fontWeight: "500" }}>
                Deployment & Support
              </h4>
              <p>
                Deploy the solution to production, provide ongoing support, and ensure smooth operation and maintenance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;