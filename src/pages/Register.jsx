import { useState } from "react";
import RoleSelector from "../components/Register/RoleSelector";
import JobSeekerForm from "../components/Register/JobSeekerForm";
import EmployerForm from "../components/Register/EmployerForm";

const Register = () => {
  const [role, setRole] = useState("");

  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 flex justify-center items-center px-4">
      <div className="w-full max-w-lg">

        <RoleSelector
          role={role}
          setRole={setRole}
        />

        {role === "jobSeeker" && <JobSeekerForm />}

        {role === "employer" && <EmployerForm />}

      </div>
    </section>
  );
};

export default Register;