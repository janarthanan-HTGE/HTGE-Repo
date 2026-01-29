import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import { useRef } from "react";
import useFadeUp from "../../hooks/useFadeUpNor";

const marqueeOne = [
  "Service Request Form",
  "Online Booking System",
  "Service Price Calculator",
  "Secure Payment Gateway",
  "Live Chat Support",
  "Real-Time Notifications",
  "Customer Account Dashboard",
];

const marqueeTwo = [
  "Service Request Form",
  "Customer Reviews Display",
  "FAQ Section Integration",
  "Mobile-Friendly Interface",
  "Personalized Service Options",
  "Service Location Tracker",
  "Multi-Step Service Checkout",
  "Subscription Plan Options",
];

const MarqueeSection = () => {
  const fadeRef = useRef(null);
  useFadeUp(fadeRef);

  const commonSwiperProps = {
    modules: [Autoplay, FreeMode],
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    speed: 8000,
    freeMode: {
      enabled: true,
      momentum: true,
      momentumRatio: 0.8,
      momentumVelocityRatio: 0.7,
    },
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      pauseOnMouseEnter: false,
    },
    allowTouchMove: true,
    grabCursor: true,
  };

  return (
    <div ref={fadeRef} className="marquee-section marque-wape fade-up">

      {/* 🔹 First Marquee (Left → Right) */}
      <div className="marque-wrapper">
        <Swiper {...commonSwiperProps} className="text-slider">
          {[...marqueeOne, ...marqueeOne].map((item, index) => (
            <SwiperSlide
              key={index}
              className="brand-slide-element"
              style={{ width: "auto" }}
            >
              <div className="marque-text">
                <h3>{item}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* 🔹 Second Marquee (Right → Left) */}
      <div className="marque-wrapper style-2 mt-3">
        <Swiper
          {...commonSwiperProps}
          dir="rtl"
          className="text-slider-2"
        >
          {[...marqueeTwo, ...marqueeTwo].map((item, index) => (
            <SwiperSlide
              key={index}
              className="brand-slide-element"
              style={{ width: "auto" }}
            >
              <div className="marque-text">
                <h3>{item}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
};

export default MarqueeSection;
