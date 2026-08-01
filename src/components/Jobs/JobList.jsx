import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getJobsThunk } from "../../features/jobs/jobsSlice";
import JobCard from "./JobCard";

const JobList = () => {
  const dispatch = useDispatch();

  const { jobs, loading } = useSelector((state) => state.jobs);

  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getJobsThunk());
  }, [dispatch]);

  const employerJobs = jobs.filter((job) => job.employerId === currentUser.id);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (employerJobs.length === 0) {
    return <h2 className="text-center text-gray-500">No jobs posted yet.</h2>;
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {employerJobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;
