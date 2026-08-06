import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SearchBar from "../components/Jobs/SearchBar";
import PublicJobCard from "../components/Jobs/PublicJobCard";

import { getJobsThunk } from "../features/jobs/jobsSlice";

const ExploreJobs = () => {
  const dispatch = useDispatch();

  const { jobs, loading } = useSelector((state) => state.jobs);

  const [searchTerm, setSearchTerm] = useState("");
  const [jobType, setJobType] = useState("All");

  useEffect(() => {
    dispatch(getJobsThunk());
  }, [dispatch]);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType = jobType === "All" || job.jobType === jobType;

    return matchesSearch && matchesType;
  });

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white py-20 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">Find Your Dream Job</h1>

          <p className="mt-5 text-lg text-blue-100">
            Explore thousands of opportunities from trusted companies and take
            the next step in your career.
          </p>

          {/* Search */}
          <div className="mt-10">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {["All", "Full Time", "Part Time", "Internship", "Remote"].map(
              (type) => (
                <button
                  key={type}
                  onClick={() => setJobType(type)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 ${
                    jobType === type
                      ? "bg-white text-blue-600 font-semibold"
                      : "bg-white/20 hover:bg-white/30"
                  }`}
                >
                  {type}
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Jobs */}
      <section className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Available Jobs
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {filteredJobs.length} opportunities found
              </p>
            </div>
          </div>

          {loading ? (
            <h2 className="text-center text-lg dark:text-white">
              Loading jobs...
            </h2>
          ) : filteredJobs.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl">🔍</div>

              <h2 className="text-2xl font-bold mt-5 dark:text-white">
                No jobs found
              </h2>

              <p className="text-gray-500 dark:text-gray-400 mt-3">
                Try changing your search or filter.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <PublicJobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExploreJobs;
