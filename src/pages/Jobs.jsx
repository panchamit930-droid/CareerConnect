import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import JobSeekerJobCard from "../components/Jobs/JobSeekerJobCard";
import { getJobsThunk } from "../features/jobs/jobsSlice";
import SearchBar from "../components/Jobs/SearchBar";

const Jobs = () => {
  const dispatch = useDispatch();

  const { jobs, loading } = useSelector((state) => state.jobs);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    dispatch(getJobsThunk());
  }, [dispatch]);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      <DashboardNavbar />

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold">Browse Jobs</h1>

        <p className="text-gray-500 mt-2">Find your next opportunity.</p>

        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {loading ? (
            <h2>Loading...</h2>
          ) : jobs.length > 0 ? (
            filteredJobs.map((job) => (
              <JobSeekerJobCard key={job.id} job={job} />
            ))
          ) : (
            <p>No jobs available.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;
