import { useEffect } from "react";

const useInViewObserver = ({
  refs = [],
  threshold = 0.3,
  once = true,
  onEnter,
  className = "in-view",
}) => {
  useEffect(() => {
    const elements = Array.isArray(refs) ? refs : [refs];
    const targets = elements
      .map((ref) => ref?.current)
      .flat()
      .filter(Boolean);

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);

            if (onEnter) onEnter(entry.target);

            if (once) observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [refs, threshold, once, onEnter, className]);
};

export default useInViewObserver;