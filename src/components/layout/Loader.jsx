const Preloader = ({ loaded }) => {
  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div className="animation-preloader">
        <div className="txt-loading">
          <span data-text-preloader="Z" className="letters-loading">Z</span>
          <span data-text-preloader="O" className="letters-loading">O</span>
          <span data-text-preloader="T" className="letters-loading">T</span>
          <span data-text-preloader="E" className="letters-loading">E</span>
          <span data-text-preloader="C" className="letters-loading">C</span>
          <span data-text-preloader="H" className="letters-loading">H</span>
        </div>
        <p className="text-center">Loading</p>
      </div>

      <div className="loader">
        <div className="row">
          <div className="loader-section section-left"><div className="bg" /></div>
          <div className="loader-section section-left"><div className="bg" /></div>
          <div className="loader-section section-right"><div className="bg" /></div>
          <div className="loader-section section-right"><div className="bg" /></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
