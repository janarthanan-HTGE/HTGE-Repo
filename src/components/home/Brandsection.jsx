import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const BrandSection = () => {
  const brandLogos = [
    "/assets/img/brand/brand-1.jpg",
    "/assets/img/brand/brand-2.png",
    "/assets/img/brand/brand-3.jfif",
    "/assets/img/brand/brand-4.png",
    "/assets/img/brand/brand-5.jpg",
    "/assets/img/brand/brand-6.jfif",
    "/assets/img/brand/brand-7.png",
    "/assets/img/brand/brand-8.jpg",
    "/assets/img/brand/brand-9.png",
  ];

  return (
    <section className="brand-wrapper brand-1 section-bg section-padding">
      <div className="container">
        <div className="brand-inner text-center text-lg-start">
          <h3>Our Global Partner</h3>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            className="mt-4 pt-3"
            breakpoints={{
              320: { slidesPerView: 1 },
              576: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              992: { slidesPerView: 5 },
            }}
          >
            {brandLogos.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="brand-logo">
                  <img src={src} alt={`Brand ${index + 1}`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default BrandSection;
