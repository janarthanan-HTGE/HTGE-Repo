import {Link} from 'react-router-dom';

const ErrorPage = () => {
    return(
    <section className="error-section mb-5 mt-5 fix">
      <div className="container">
        <div className="error-content text-center">
          <img src="assets/img/404.png" alt="" />
          <h3 className="fade-up">
            Page Not Found
          </h3>
          <Link
            to="/"
            className="theme-btn black-btn mt-2 fade-up"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </section>

    )
}

export default ErrorPage;   