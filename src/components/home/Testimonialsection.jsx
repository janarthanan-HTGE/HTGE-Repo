import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    image: "/assets/img/testimonial/01.png",
    name: "William Jekson",
    role: "Product Manager",
    text:
      "I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it",
    paddingClass: "pt-4 pt-xxl-5",
  },
  {
    id: 2,
    image: "/assets/img/testimonial/01.png",
    name: "William Jekson",
    role: "Product Manager",
    text:
      "I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it",
    paddingClass: "pt-4 pt-lg-5",
  },
  {
    id: 3,
    image: "/assets/img/testimonial/01.png",
    name: "William Jekson",
    role: "Product Manager",
    text:
      "I believe in lifelong learning and they are a great place to learn from experts. I have learned a lot and recommend it",
    paddingClass: "pt-4 pt-lg-5",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-wrapper testimonial-1 section-padding pb-0">
      <div className="shape">
        <img className="shape-1" src="/assets/img/shape/shape-13.png" alt="" />
        <img className="shape-2" src="/assets/img/shape/shape-14.png" alt="" />
      </div>

      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>OUR TESTIMONIAL</span>
          </div>
          <h2 className="split-text left">What our clients say about us</h2>
          <p>
            Accelerate innovation with world-class tech teams We’ll match <br />
            you to an entire remote team of incredible
          </p>
        </div>

        <div className="testimonial-inner overflow-hidden">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            speed={800}
            autoplay={{
              delay: 4000,              // auto slide every 4s
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".array-next",
              prevEl: ".array-prev",
            }}
            className="testimonial-slide"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="signle-testimonial-item d-flex">
                  <img src={item.image} alt={item.name} />

                  <div className="content">
                    <div className="star text-center text-md-start">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>

                    <p>{item.text}</p>

                    <div
                      className={`clints-infu ${item.paddingClass} text-center text-md-start`}
                    >
                      <h5>{item.name}</h5>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {/* navigation buttons */}
            <div className="array-button">
              <button className="array-prev">
                <i className="fas fa-long-arrow-left"></i>
              </button>
              <button className="array-next">
                <i className="fas fa-long-arrow-right"></i>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
