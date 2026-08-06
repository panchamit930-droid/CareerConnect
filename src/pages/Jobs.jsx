import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import JobSeekerJobCard from "../components/Jobs/JobSeekerJobCard";
import { getJobsThunk } from "../features/jobs/jobsSlice";
import SearchBar from "../components/Jobs/SearchBar";
import EmptyState from "../components/common/EmptyState";

const Jobs = () => {
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
      <DashboardNavbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Browse Jobs
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Find your next opportunity.
          </p>

          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          <div className="flex flex-wrap gap-3 mt-6">
            {["All", "Full Time", "Part Time", "Internship", "Remote"].map(
              (type) => (
                <button
                  key={type}
                  onClick={() => setJobType(type)}
                  className={`px-5 py-2 rounded-full transition ${
                    jobType === type
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 dark:text-white hover:bg-blue-100 dark:hover:bg-gray-600"
                  }`}
                >
                  {type}
                </button>
              ),
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {loading ? (
              <h2 className="text-center text-gray-700 dark:text-gray-300">
                Loading...
              </h2>
            ) : filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobSeekerJobCard key={job.id} job={job} />
              ))
            ) : (
              <EmptyState
                icon="💼"
                title={
                  jobs.length === 0
                    ? "No Jobs Available"
                    : "No Matching Jobs Found"
                }
                description={
                  jobs.length === 0
                    ? "There are currently no job openings."
                    : "Try searching with a different job title, company, or location."
                }
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
