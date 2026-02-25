import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import jobsData from "../../utils/Jobdata.json";
import ApplyOverlay from "./Apply";

const JobsSection = () => {
  const perPage = 3;

  const [jobs] = useState(jobsData);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const locations = ["All", ...new Set(jobs.map((job) => job.location))];


  const filtered = jobs.filter((job) => {
    const matchTitle = job.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchLocation =
      location === "All" || job.location === location;

    return matchTitle && matchLocation;
  });

  const totalPages = Math.ceil(filtered.length / perPage);
  const start = (page - 1) * perPage;
  const current = filtered.slice(start, start + perPage);

  
  return (
    <section
      className="jobs-section"
      style={{ backgroundImage: "url(/assets/img/job/bg.png)" }}
    >
      <div className="jobs-container">

        <div className="section-title">
          <div className="sub-title">
            <span>Find Jobs for You</span>
          </div>
          <h2>Let’s Find Your Role at HTGE</h2>
        </div>

        {/* Filters */}
        <div className="jobs-search">

          <div className="select-wrapper">
            <select
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
                setPage(1);
              }}
            >
              {locations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc === "All" ? "All Location" : loc}
                </option>
              ))}
            </select>

            <svg className="dropdown-icon" viewBox="0 0 24 24">
              <path d="M7 10l5 5 5-5" />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search Position"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
          />

        </div>

        {/* Jobs List */}
        <div className="jobs-list">
          {current.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-info">
                <h3>{job.title}</h3>
                <p className="exp">{job.exp}</p>

                <p className="location">
                  <FaMapMarkerAlt />
                  {job.location}
                </p>
              </div>

              <button
                className="go-btn"
                onClick={() => setSelectedJob(job)}
                >
                <svg viewBox="0 0 24 24">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>

            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">

          <button
            className="page-btn left"
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            <svg viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div className="page-number">{page}</div>

          <button
            className="page-btn right"
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            <svg viewBox="0 0 24 24">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

        </div>

      </div>
      {selectedJob && (
        <ApplyOverlay
            job={selectedJob}
            onClose={() => setSelectedJob(null)}
        />
        )}
    </section>
  );
};

export default JobsSection;