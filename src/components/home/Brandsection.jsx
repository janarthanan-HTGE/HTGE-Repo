import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const BrandSection = () => {
  const brandLogos = [
    "/assets/img/brand/01.png",
    "/assets/img/brand/02.png",
    "/assets/img/brand/03.png",
    "/assets/img/brand/04.png",
    "/assets/img/brand/05.png",
    "/assets/img/brand/06.png",
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
