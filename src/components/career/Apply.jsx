import { useState } from "react";
import { FaUpload } from "react-icons/fa6";

const ApplyOverlay = ({ job, onClose }) => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: null
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {

    const { name, value, files } = e.target;

    if (name === "resume") {

      const file = files[0];

      if (!file) return;

      /* FILE TYPE */

      if (file.type !== "application/pdf") {
        setError("Only PDF files allowed.");
        return;
      }

      /* FILE SIZE */

      if (file.size > 200 * 1024) {
        setError("Resume must be under 200KB.");
        return;
      }

      setError("");

      setForm({
        ...form,
        resume: file
      });

    } else {

      setForm({
        ...form,
        [name]: value
      });

    }

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!form.resume) {
      setError("Please upload resume.");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      setLoading(false);
      setSubmitted(true);

    }, 2000);
  };

  return (
    <div className="apply-overlay">

      <div className="apply-card">

        <button className="close-btn" onClick={onClose}>×</button>

        {!submitted ? (
          <>
            <h2 className="apply-title">
              Applying For {job.title}
            </h2>

            <form onSubmit={handleSubmit} className="apply-form">

              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email ID"
                required
                onChange={handleChange}
              />

              <div className="upload-box">

                <label className="upload-area">

                    <FaUpload className="upload-icon" />

                    <span>Upload Resume (PDF)</span>

                    <input
                    type="file"
                    name="resume"
                    accept="application/pdf"
                    onChange={handleChange}
                    />

                </label>

                <p className="upload-label">
                    Resume must be PDF and under 200KB
                </p>

                </div>

              {error && (
                <p className="error-text">{error}</p>
              )}

              {/* BUTTON OR LOADING */}

              {!loading ? (
                <button className="submit-btn">
                  Submit Application
                </button>
              ) : (
                <button className="submit-btn loading-btn" disabled>
                  Sending...
                </button>
              )}

            </form>
          </>
        ) : (
          <div className="success-msg">
            Thank you for your interest. Our team will reach you soon.
          </div>
        )}

      </div>

    </div>
  );
};

export default ApplyOverlay;