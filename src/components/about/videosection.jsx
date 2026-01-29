import { FaPlay } from "react-icons/fa";

const AboutVid = () => {
    return(
        <section className="video-wrapper video-1 style-2 video-page">
            <div className="container">
                <div
                className="video-image bg-cover wow fadeInUp"
                data-wow-delay="300ms"
                style={{ backgroundImage: "url(assets/img/video-02.jpg)" }}
                >
                <a
                    href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                    className="video-button video-popup"
                >
                    <FaPlay size={28} color="#fff" />
                    <i className="video-button-ripple"></i>
                </a>
                </div>
            </div>
            </section>
    )
}

export default AboutVid;