import { Link, useLocation } from "react-router-dom";
import navfunction from "../../utils/Navfunction.json";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useRef } from "react";
import useFadeUp from "../../hooks/useFadeUpNor";

const BreadCrumb = () => {
  const fadeUp = useRef(null);
  useFadeUp(fadeUp);

  const location = useLocation();
  const pathnames = location.pathname.split("/").filter(Boolean);

  const currentPage = navfunction.find(
    (item) => item.path === location.pathname
  );

  const pageTitle = currentPage?.title || "Page";

  const formatBreadcrumb = (text) => {
    const words = text.replace(/-/g, " ").split(" ");

    return words
      .map((word) => {
        if (word.toLowerCase() === "it") return "IT";
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}
    >
      <div className="container">
        <div className="page-heading">
          <div ref={fadeUp} className="breadcrumb-sub-title fade-up">
            <h1>{pageTitle}</h1>

            <ul className="breadcrumb-items">
              <li>
                <Link to="/">Home</Link>
              </li>

              {pathnames.map((name, index) => {
                const routeTo = "/" + pathnames.slice(0, index + 1).join("/");

                return (
                  <span key={routeTo} style={{ display: "contents" }}>
                    <li>
                      <FaAngleDoubleRight />
                    </li>

                    <li>
                      <Link to={routeTo}>
                        {formatBreadcrumb(name)}
                      </Link>
                    </li>
                  </span>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;