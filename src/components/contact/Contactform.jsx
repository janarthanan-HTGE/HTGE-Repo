import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [companyType, setCompanyType] = useState("");
  const [services, setServices] = useState([]);
  const [terms, setTerms] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (e) => {
    if (e.target.checked) {
      setServices([...services, e.target.value]);
    } else {
      setServices(services.filter((item) => item !== e.target.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
    setSubmitted(false);
    }, 2000);

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.message ||
      !companyType ||
      services.length === 0 ||
      !terms
    ) {
      return;
    }

    toast.success("Message sent successfully", { autoClose: 2000 });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    });
    setCompanyType("");
    setServices([]);
    setTerms(false);
    setSubmitted(false);
  };

  return (
    <section className="contact-us-wrapper contact-us-2 section-padding">
        <ToastContainer position="top-right" autoClose={2000} />
        <div className="shape">
            <img
            className="shape-1"
            src="/assets/img/shape/shape-21.png"
            alt="shape"
            />
            <img
            className="shape-2"
            src="/assets/img/shape/shape-11.png"
            alt="shape"
            />
            <img
            className="shape-3"
            src="/assets/img/shape/shape-22.png"
            alt="shape"
            />
        </div>

        <div className="container">
            <div className="section-title text-center">
            <div className="sub-title">
                <span>CONTACT US</span>
            </div>
            <h2>
                Dealing in All <br /> Professional IT Services
            </h2>
            </div>
        <div className="contact-us-inner">
          <div className="row g-5">
            <div className="col-xl-6 col-lg-12 col-md-12 pe-xl-0">
              <div className="contact-left">
                <form id="contact-form" onSubmit={handleSubmit}>

                  <div className="row g-4">

                    <div className="col-lg-6 pe-0">
                      <span>First Name</span>
                      <div className="form-clt">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          style={{
                            border:
                              submitted && !formData.firstName
                                ? "1px solid red"
                                : "",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 pe-0">
                      <span>Last Name</span>
                      <div className="form-clt">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          style={{
                            border:
                              submitted && !formData.lastName
                                ? "1px solid red"
                                : "",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 pe-0">
                      <span>Your Email</span>
                      <div className="form-clt">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          style={{
                            border:
                              submitted && !formData.email
                                ? "1px solid red"
                                : "",
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 pe-0">
                      <span>Phone Number</span>
                      <div
                        className="form-clt"
                        style={{
                          border:
                            submitted && !formData.phone
                              ? "1px solid red"
                              : "",
                          borderRadius: "5px",
                        }}
                      >
                        <PhoneInput
                          country={"in"}
                          value={formData.phone}
                          onChange={(value) =>
                            setFormData({ ...formData, phone: value })
                          }
                          dropdownClass="custom-dropdown"
                          containerClass="custom-phone-container"
                          inputClass="custom-phone-input"
                          buttonClass="custom-phone-button"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="categories mt-4 pt-3">
                    <span className="fw-semibold">
                      What's the type of your company?
                    </span>

                    <div
                      className="categories-items mt-2"
                      style={{
                        border:
                          submitted && !companyType
                            ? "1px solid red"
                            : "",
                        padding: "5px",
                        borderRadius: "5px",
                      }}
                    >
                      {["IT Company", "Business", "Education related", "Other"].map(
                        (type) => (
                          <div
                            key={type}
                            className="single-item"
                            onClick={() => setCompanyType(type)}
                            style={{
                              cursor: "pointer",
                              backgroundColor:
                                companyType === type ? "#a855f7" : "",
                              color: companyType === type ? "#fff" : "",
                            }}
                          >
                            {type}
                          </div>
                        )
                      )}
                    </div>
                  </div>
                  <div className="checked-box mt-4 pt-3">
                    <span className="fw-semibold">
                      What you need from us?
                    </span>

                    <div
                      className="checked-box-items mt-2"
                      style={{
                        border:
                          submitted && services.length === 0
                            ? "1px solid red"
                            : "",
                        padding: "10px",
                        borderRadius: "5px",
                      }}
                    >
                      {[
                        "Digital Marketing",
                        "Web Development",
                        "Software Development",
                        "IT support",
                        "Other",
                      ].map((service) => (
                        <div className="form-check" key={service}>
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value={service}
                            checked={services.includes(service)}
                            onChange={handleServiceChange}
                          />
                          <label className="form-check-label">
                            {service}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                </form>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12">
              <div className="contact-right ps-xl-5 ms-xl-3">

                <div className="col-lg-12 mt-4">
                  <span>Your Message</span>
                  <div className="form-clt-big form-clt">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      style={{
                        border:
                          submitted && !formData.message
                            ? "1px solid red"
                            : "",
                      }}
                    ></textarea>
                  </div>
                </div>
                <div className="form-check mt-3">
                <input
                    className="form-check-input"
                    type="checkbox"
                    checked={terms}
                    onChange={(e) => setTerms(e.target.checked)}
                    style={{
                    border:
                        submitted && !terms
                        ? "1px solid red"
                        : "",
                    boxShadow:
                        submitted && !terms
                        ? "0 0 2px red"
                        : "",
                    }}
                />
                <label className="form-check-label">
                    Click the box and agree to our terms and conditions
                </label>
                </div>

                <div className="contact-btn d-flex align-items-center justify-content-between flex-wrap mt-4">
                  <button
                    type="submit"
                    form="contact-form"
                    className="theme-btn black-btn"
                  >
                    Send Message
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;