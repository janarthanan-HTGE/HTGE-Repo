import {Link} from 'react-router-dom';
import NavBar from '../components/layout/Header';
import { useRef } from 'react';
import useFadeUp from '../hooks/useFadeUpNor';


const ErrorPage = () => {
  const textUp = useRef(null);
  useFadeUp(textUp);

    return(
    <>
      <NavBar/>
      <section className="error-section mb-5 fix">
        <div className="container">
          <div className="error-content text-center text-error">
            <img src="/assets/img/coding.png" alt="coding" />
            <div className='fade-up' ref={textUp}>
              <h5 className="text-error ">
              Website Under Development
            </h5>
            <Link
              to="/"
              className="theme-btn black-btn mt-2"
            >
              Back To Home
            </Link>
            </div>
          </div>
        </div>
      </section>
    </>

    )
}

export default ErrorPage;   