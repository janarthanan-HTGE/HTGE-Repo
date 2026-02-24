import React, { useRef, useEffect } from "react";
import useFadeUp from "../../hooks/useFadeUpNor.js";
import { initGsapHtge, destroyGsapHtge } from "../../utils/Gsaphtge.jsx";
import { PiHandshakeLight } from "react-icons/pi";

const ContactMap = () => {
  const fadeRef = useRef(null);
  useFadeUp(fadeRef);

  useEffect(() => {
    initGsapHtge();

    return () => {
      destroyGsapHtge();
    };
  }, []);

  return (
    <>
      <div className="office-google-map-wrapper fade-up" ref={fadeRef}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48214.223667309794!2d79.69495296478276!3d11.997387852672235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53672e91a4b7bb%3A0x2aba1d84eecd6eae!2sHTGE%20Technologies%20Pvt%20Ltd!5e1!3m2!1sen!2sin!4v1771939782749!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Google Map"
        ></iframe>
      </div>

      <section className="cta-wrapper cta-2 style-3">
        <div className="container">
          <div className="cta-inner">
            <div className="icon">
              <PiHandshakeLight size={50} />
            </div>

            <div className="title">
              <h3 className="split-text right">
                Need Expert IT Solutions for Your Business?
              </h3>
              <p>
                Our team is ready to help you with innovative, scalable,
                and secure digital solutions tailored to your business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactMap;