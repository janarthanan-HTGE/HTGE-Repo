const ContactSection = () => {
    return (
        <section className="contact-us-wrapper contact-us-1 section-padding">
  <div className="shape">
    <img className="shape-1" src="assets/img/world.png" alt="" />
    <img className="shape-2" src="assets/img/shape/shape-15.png" alt="" />
  </div>
  <div className="container">
    <div className="row">
      <div
        className="col-xl-6 col-lg-6 col-md-12 mt-4 wow fadeInLeft"
        data-wow-delay="300ms"
      >
        <div className="section-title">
          <div className="sub-title">
            <span>CONTACT US</span>
          </div>
          <h2 className="split-text right">
            To Make Requests for <br />
            Further Information, <br />
            Contact Us
          </h2>
        </div>
        <div className="contact-us-content pt-4 mt-3">
          <div className="infu-box d-flex align-items-center">
            <div className="icon">
              <i className="flaticon-telephone" />
            </div>
            <div className="infu">
              <p>Call Us</p>
              <h3>+69 009 494 094</h3>
            </div>
          </div>
          <div className="infu-box d-flex align-items-center">
            <div className="icon">
              <i className="flaticon-location" />
            </div>
            <div className="infu">
              <p>Our Location</p>
              <h3>147 New Yors, NY Adipisicing 123</h3>
            </div>
          </div>
          <div className="infu-box d-flex align-items-center">
            <div className="icon">
              <i className="flaticon-email" />
            </div>
            <div className="infu">
              <p>Mail us</p>
              <h3>
                <a
                  href="/cdn-cgi/l/email-protection"
                  className="__cf_email__"
                  data-cfemail="e58d8089898aa59f8a9180868dcb868a88"
                >
                  [email&nbsp;protected]
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div
        className="col-xl-6 col-lg-6 col-md-12 wow fadeInRight"
        data-wow-delay="300ms"
      >
        <div className="contact-right mt-4 mt-md-0">
          <h3>Send Your Message!</h3>
          <form action="#" id="contact-form" method="POST">
            <div className="row g-3">
              <div className="col-lg-6">
                <div className="form-clt">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-clt">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-clt">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-clt">
                  <div className="nice-select" tabIndex={0}>
                    <span className="current">Subject</span>
                    <ul className="list">
                      <li data-value="1" className="option selected">
                        Volunteer
                      </li>
                      <li data-value="1" className="option">
                        Donations
                      </li>
                      <li data-value="1" className="option">
                        Foods Support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-clt-big form-clt">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Write a Message"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="theme-btn black-btn">
                  Send Your Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

    )
}

export default ContactSection;