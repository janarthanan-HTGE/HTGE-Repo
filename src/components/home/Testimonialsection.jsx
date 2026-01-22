import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar,FaLongArrowAltRight,FaLongArrowAltLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    id: 1,
    image: "/assets/img/testimonial/01.jpg",
    name: "Shiva R",
    role: "Intern",
    text:
      "Supportive mentors, practical learning, well-structured course, and real-world results.",
    paddingClass: "pt-4 pt-xxl-5",
  },
  {
    id: 2,
    image: "/assets/img/testimonial/01.jpg",
    name: "Hair Expo",
    role: "Support",
    text:
      "Reliable cloud support with quick response, strong expertise, and smooth issue resolution.",
    paddingClass: "pt-4 pt-lg-5",
  },
  {
    id: 3,
    image: "/assets/img/testimonial/01.jpg",
    name: "SSK",
    role: "Digital Marketing",
    text:
      "Excellent digital marketing for interior kitchens with great leads and strong online visibility.",
    paddingClass: "pt-4 pt-lg-5",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-wrapper testimonial-1 section-padding pb-0">
      <div className="shape">
        <img className="shape-1" src="/assets/img/shape/shape-13.png" alt="designone" />
        <img className="shape-2" src="/assets/img/shape/shape-14.png" alt="designtwo" />
      </div>

      <div className="container ">
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
              delay: 4000,              
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
                      <div className="starhor">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />  
                      </div>
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
                <div className="ml-4"><FaLongArrowAltLeft /></div>
              </button>
              <button className="array-next">
                <div className="ml-4"><FaLongArrowAltRight /></div>
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
