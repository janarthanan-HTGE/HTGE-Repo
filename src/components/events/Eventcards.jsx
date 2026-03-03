import React, { useEffect, useRef, useState } from "react";
import events from "../../utils/events.json";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function EventsSection() {
  const sliderRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const enableScroll = events.length > 3;

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const updateScroll = () => {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      const progress = (slider.scrollLeft / maxScroll) * 100;
      setScrollProgress(progress);
    };

    slider.addEventListener("scroll", updateScroll);
    return () => slider.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (!enableScroll) return;

    const slider = sliderRef.current;

    const autoScroll = setInterval(() => {
      const cardWidth = slider.children[0].offsetWidth + 30;

      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5) {
        slider.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        slider.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(autoScroll);
  }, [enableScroll]);

  return (
    <section
      className="events-section"
      style={{ backgroundImage: "url('/assets/img/job/bg.avif')" }}
    >
      <div className="events-container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>Find Jobs for You</span>
          </div>
          <h2>Let’s Find Your Role at HTGE</h2>
        </div>

        <div
          ref={sliderRef}
          className={`events-cards ${enableScroll ? "scroll" : "no-scroll"}`}
        >
          {events.map((item) => (
            <div className="events-card" key={item.id}>
              <img src={item.bg} alt={item.title} />

              <div className="events-overlay">
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                <div className="events-location">
                  <FaMapMarkerAlt />
                  {item.location}
                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="events-btn"
                >
                  Enroll
                </a>
              </div>
            </div>
          ))}
        </div>

        {enableScroll && (
          <div className="events-scrollbar">
            <div
              className="events-scroll-progress"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        )}
      </div>
    </section>
  );
}