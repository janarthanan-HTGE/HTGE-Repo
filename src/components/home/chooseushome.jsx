const ChooseUsHome = () => {
    return (
        <section className="choose-us-wrapper choose-us-1 section-padding pb-xl-0">
            <div className="shape">
                <img src="/assets/img/world.png" alt="" />
            </div>

            <div className="container">
                <div className="row">
                <div className="col-xl-6 col-lg-12 col-md-12">
                    <div
                    className="choose-us-images fade-left" >
                    <img src="/assets/img/why-choose/01.png" alt="" />
                    <div className="shape-img">
                        <img src="/assets/img/shape/shape-2.png" alt="" />
                    </div>
                    </div>
                </div>

                <div
                    className="col-xl-6 col-lg-8 col-md-12 mt-5 pt-4 fade-right"
                >
                    <div className="choose-us-content ms-xl-4 ps-xl-1">
                    <div className="section-title">
                        <div className="sub-title">
                        <span>WHY CHOOSE US</span>
                        </div>
                        <h2 className="split-text right">
                        We provide truly prominent IT solutions for your success
                        </h2>
                    </div>

                    <p className="mt-4 pe-xl-5 me-xl-3 text-center text-md-start">
                        HTGE is the partner of choice for many of the world’s leading
                        enterprises, SMEs and technology challengers. We help businesses
                        elevate their value through custom software development, product
                        design, QA and consultancy services.
                    </p>

                    <div className="icon-box d-flex mt-4 pt-3 text-center text-md-start">
                        <div className="single-icon-box">
                        <div className="icon">
                            <i className="flaticon-world"></i>
                        </div>
                        <h4>Global Company</h4>
                        <p>
                            Our great team of more than to 1400 software experts member.
                        </p>
                        </div>

                        <div className="single-icon-box">
                        <div className="icon">
                            <i className="flaticon-medal-1"></i>
                        </div>
                        <h4>Award Wining</h4>
                        <p>
                            Our great team of more than to 1400 software experts member.
                        </p>
                        </div>
                    </div>

                    <div className="count-box">
                        <div className="single-count">
                        <h2>
                            <span className="count">98</span>%
                        </h2>
                        <p>Successful Clients</p>
                        </div>

                        <div className="single-count">
                        <h2>
                            <span className="count">6795</span>+
                        </h2>
                        <p>Completed Projects</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

    );
}

export default ChooseUsHome;