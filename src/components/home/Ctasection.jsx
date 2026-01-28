const CtaSection = () => {
    return (
        <section className="cta-1 ">
        <div className="container">
            <div
            className="cta-inner bg-cover rounded-4xl"
            >
            <div className="shape">
                <img
                className="shape-1"
                src="assets/img/cta/cta-shape-1.png"
                alt="shape"
                />
                <img
                className="shape-2"
                src="assets/img/world.png"
                alt="world"
                />
            </div>
            <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-12">
                <div className="section-title">
                    <div className="sub-title sub-title2">
                    <span className="text-white">START WITH US</span>
                    </div>
                    <h2 className="text-white split-text left">
                    We’re Delivering Best Customer Experience
                    </h2>
                </div>
                <a href="about.html" className="theme-btn mt-4">
                    Get Started Now
                </a>
                </div>
                <div className="col-xl-6 col-lg-6 col-12">
                <div className="images">
                    <img
                    src="assets/img/cta/cta-1.png"
                    alt="design"
                    />
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

    )
}

export default CtaSection;