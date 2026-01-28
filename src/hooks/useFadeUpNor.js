import { useEffect } from "react";

const useFadeUp = (ref, options = {}) => {
  useEffect(() => {
    if (!ref?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold ?? 0.3,
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options.threshold]);
};

export default useFadeUp;
