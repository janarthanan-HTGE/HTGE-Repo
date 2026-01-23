import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const innerRef = useRef(null);
  const outerRef = useRef(null);

  useEffect(() => {
    const inner = innerRef.current;
    const outer = outerRef.current;

    if (!inner || !outer) return;

    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      inner.style.transform = `translate(${clientX}px, ${clientY}px)`;
      outer.style.transform = `translate(${clientX}px, ${clientY}px)`;

      inner.style.visibility = "visible";
      outer.style.visibility = "visible";
    };

    const addHover = () => {
      inner.classList.add("cursor-hover");
      outer.classList.add("cursor-hover");
    };

    const removeHover = () => {
      inner.classList.remove("cursor-hover");
      outer.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", moveCursor);

    document.querySelectorAll("a, button, .cursor-pointer").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, .cursor-pointer").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <div ref={outerRef} className="mouse-cursor cursor-outer"></div>
      <div ref={innerRef} className="mouse-cursor cursor-inner"></div>
    </>
  );
};

export default CustomCursor;
