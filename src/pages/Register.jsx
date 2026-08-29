import { useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import RoleSelector from "../components/Register/RoleSelector";
import JobSeekerForm from "../components/Register/JobSeekerForm";
import EmployerForm from "../components/Register/EmployerForm";
import { clearError } from "../features/auth/authSlice";

const Register = () => {
  const [role, setRole] = useState("");

  const dispatch = useDispatch();

  const handleRoleChange = (selectedRole) => {
    dispatch(clearError());
    setRole(selectedRole);
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-15 pb-12 px-4">
        <div className="w-full max-w-lg mx-auto">
          <RoleSelector role={role} setRole={handleRoleChange} />

          {role === "jobSeeker" && <JobSeekerForm />}

          {role === "employer" && <EmployerForm />}
        </div>
      </section>
    </>
  );
};

export default Register;
