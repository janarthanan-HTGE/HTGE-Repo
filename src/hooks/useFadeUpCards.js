import { useEffect } from "react";

const useFadeUpCard = (refs, options = {}) => {
  useEffect(() => {
    if (!refs?.current?.length) return;

    const targets = refs.current.filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        });
      },
      { threshold: options.threshold ?? 0.2 }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [refs, options.threshold]);
};

export default useFadeUpCard;
