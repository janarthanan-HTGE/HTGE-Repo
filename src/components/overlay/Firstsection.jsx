import { Link, useLocation } from "react-router-dom";
import navfunction from "../../utils/Navfunction.json"
import {FaAngleDoubleRight} from 'react-icons/fa'
import { useRef } from "react";
import useFadeUp from "../../hooks/useFadeup";

const BreadCrumb = () => {
  const fadeUp = useRef(null);
  useFadeUp(fadeUp);

  const location = useLocation();
  const currentPath = location.pathname;

  const currentPage = navfunction.find(
    (item) => item.path === currentPath
  );

  const pageTitle = currentPage?.title || "Page";

  return (
    <div
      className="breadcrumb-wrapper bg-cover"
      style={{ backgroundImage: "url('/assets/img/breadcrumb.jpg')" }}
    >
      <div className="container">
        <div className="page-heading">
          <div ref={fadeUp} className="breadcrumb-sub-title fade-up">
            <h1>
              {pageTitle}
            </h1>

            <ul className="breadcrumb-items">
              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
                <FaAngleDoubleRight/>
              </li>

              <li>
                {currentPath.replace("/", "") || "home"}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
