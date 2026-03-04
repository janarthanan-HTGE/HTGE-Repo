import { FaPlay, FaTimes } from "react-icons/fa";
import useFadeUp from "../../hooks/useFadeUpNor";
import { useRef, useState } from "react";

const AboutVid = () => {
    const fadeRef = useRef(null);
    const [showVideo, setShowVideo] = useState(false);
    useFadeUp(fadeRef);

    return (
        <>
            <section className="video-wrapper video-1 style-2 video-page">
                <div className="container">
                    <div
                        className="video-image bg-cover fade-up"
                        ref={fadeRef}
                        style={{ backgroundImage: "url(assets/img/video-02.avif)" }}
                    >
                        <button
                            className="video-button video-popup"
                            onClick={() => setShowVideo(true)}
                        >
                            <FaPlay size={28} color="#fff" />
                            <i className="video-button-ripple"></i>
                        </button>
                    </div>
                </div>
            </section>

            {showVideo && (
                <div className="video-overlay">
                    <div className="video-modal">
                        <button
                            className="video-close"
                            onClick={() => setShowVideo(false)}
                        >
                            <FaTimes />
                        </button>

                        <iframe
                            src="https://www.youtube.com/embed/0nZETWA4tyw?autoplay=1"
                            title="YouTube video"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            width="100%"
                            height="500"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default AboutVid;