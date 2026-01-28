import {Link} from 'react-router-dom';
import NavBar from '../components/layout/Header';
import { useRef } from 'react';
import useFadeUp from '../hooks/useFadeup';


const ErrorPage = () => {
  const fadeUp = useRef(null);
  useFadeUp(fadeUp);
    return(
    <>
      <NavBar/>
      <section className="error-section mb-5 fix">
        <div className="container">
          <div className="error-content text-center text-error">
            <img src="/assets/img/coding.png" alt="coding" />
            <h5 ref={fadeUp} className="text-error fade-up">
              Website Under Development
            </h5>
            <Link ref={fadeUp}
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