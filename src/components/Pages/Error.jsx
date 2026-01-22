import {Link} from 'react-router-dom';
import NavBar from '../layout/Header';

const ErrorPage = () => {
    return(
    <>
      <NavBar/>
      <section className="error-section mb-5 fix">
        <div className="container">
          <div className="error-content text-center text-error">
            <img src="/assets/img/coding.png" alt="coding" />
            <h5 className="fade-up text-error">
              Website loading… developers arguing over semicolons
            </h5>
            <Link
              to="/"
              className="theme-btn black-btn mt-2 fade-up"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </section>
    </>

    )
}

export default ErrorPage;   