import { useSelector } from "react-redux";
import ApplicantCard from "./ApplicantCard";

const ApplicantsList = () => {
  const { applications } = useSelector((state) => state.applications);

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {applications.map((application) => (
        <ApplicantCard
          key={application.id}
          application={application}
        />
      ))}
    </div>
  );
};

export default ApplicantsList;