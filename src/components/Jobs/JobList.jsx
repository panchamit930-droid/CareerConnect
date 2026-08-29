import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getJobsThunk } from "../../features/jobs/jobsSlice";
import EmployerJobCard from "./EmployerJobCard";
import EmptyState from "../common/EmptyState";

const JobList = () => {
  const dispatch = useDispatch();

  const { jobs, loading } = useSelector((state) => state.jobs);
  const { currentUser } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getJobsThunk());
  }, [dispatch]);

  const employerJobs = jobs.filter(
    (job) => job.employerId === currentUser.id,
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <p className="text-lg text-gray-500 dark:text-gray-400 animate-pulse">
          Loading your jobs...
        </p>
      </div>
    );
  }

  if (employerJobs.length === 0) {
    return (
      <div className="mt-10">
        <EmptyState
          icon="💼"
          title="No Jobs Posted Yet"
          description="Start hiring by posting your first job. Your posted jobs will appear here."
          buttonText="Post Job"
          buttonLink="/post-job"
        />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {employerJobs.map((job) => (
        <EmployerJobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default JobList;