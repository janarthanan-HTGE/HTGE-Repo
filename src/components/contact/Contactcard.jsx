import { FaPhone,FaLocationDot,FaEnvelope } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <section className="contact-page-wrap section-padding">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card d-flex align-items-center">
              <div className="icon">
                <FaPhone size={30} />
              </div>
              <div className="title">
                <span>Call Us</span>
                <h4>
                  <a href="tel:+917092909192">
                    +91 70929 09192
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card d-flex align-items-center">
              <div className="icon">
                <FaLocationDot size={30} />
              </div>
              <div className="title">
                <span>Our Location</span>
                <h4>
                  <a 
                    href="https://share.google/nIli1kelOepn2i9RD" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    TIDEL Neo - Villupuram
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="single-contact-card d-flex align-items-center">
              <div className="icon">
                <FaEnvelope size={30} />
              </div>
              <div className="title">
                <span>Mail Us</span>
                <h4>
                  <a href="mailto:info@htge.org">
                    info@htge.org
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;