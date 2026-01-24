import { Link, useLocation } from "react-router-dom";
import navfunction from "../../utils/Navfunction.json"
import {FaAngleDoubleRight} from 'react-icons/fa'

const BreadCrumb = () => {
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
          <div className="breadcrumb-sub-title">
            <h1 className="fade-up">
              {pageTitle}
            </h1>

            <ul className="breadcrumb-items fade-up">
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
