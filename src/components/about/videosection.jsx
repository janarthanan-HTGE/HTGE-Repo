import { FaPlay } from "react-icons/fa";
import useFadeUp from "../../hooks/useFadeUpNor";
import { useRef } from "react";

const AboutVid = () => {
    const fadeRef = useRef(null);
    useFadeUp(fadeRef);

    return(
        <section className="video-wrapper video-1 style-2 video-page">
            <div className="container">
                <div
                className="video-image bg-cover fade-up" ref={fadeRef}
                style={{ backgroundImage: "url(assets/img/video-02.avif)" }}
                >
                <a
                    href="#"
                    className="video-button video-popup"
                    target="_blank"
                    rel="noopener noreferrer"
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