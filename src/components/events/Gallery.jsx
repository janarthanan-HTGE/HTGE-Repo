import { useEffect, useRef, useMemo, useState } from "react";
import galleryData from "../../utils/Gallerydata.json";

export default function CustomGallery() {

  const scrollRef = useRef(null);

  const [page, setPage] = useState(1);
  const [preview, setPreview] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const perPage = 8;
  const totalPages = Math.ceil(galleryData.length / perPage);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const images = useMemo(() => {
    const start = (page - 1) * perPage;
    return galleryData.slice(start, start + perPage);
  }, [page]);

  const next = () => page < totalPages && setPage(page + 1);
  const prev = () => page > 1 && setPage(page - 1);

  /*
  Smooth auto scroll
  */

  useEffect(() => {

    if (!isMobile) return;

    const el = scrollRef.current;
    if (!el) return;

    const autoScroll = setInterval(() => {

      const cardWidth = el.children[0]?.offsetWidth + 16;

      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 5) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: cardWidth, behavior: "smooth" });
      }

    }, 2500);

    return () => clearInterval(autoScroll);

  }, [isMobile, page]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollTo({
        left: 0,
        behavior: "instant"
    });

    }, [page]);

  return ( 
    <section className="events-section">

      <div className="section-title">
        <div className="sub-title">
          <span>Find Jobs for You</span>
        </div>
        <h2>Let’s Find Your Role at HTGE</h2>
    </div>

      <div className="custom-grid" ref={scrollRef}>

        {images.map((img, i) => (
          <div
            key={img.id}
            className={`grid-item item-${i}`}
            onClick={() => setPreview(img)}
          >
            <img src={img.image} alt={img.alt} />
          </div>
        ))}

      </div>

      {/* Pagination */}
        {galleryData.length > perPage && (
        <div className="pagination">

            <button
            className="page-btn left"
            disabled={page === 1}
            onClick={prev}
            aria-label="Previous"
            >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
            </svg>
            </button>

            <div className="page-number">{page}</div>

            <button
            className="page-btn right"
            disabled={page === totalPages}
            onClick={next}
            aria-label="Next"
            >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 6l6 6-6 6" />
            </svg>
            </button>

        </div>
        )}

      {preview && (
        <div className="viewer" onClick={() => setPreview(null)}>
          <div
            className="viewer-box"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={preview.image} alt={preview.alt} />
          </div>
        </div>
      )}

    </section>
  );
}