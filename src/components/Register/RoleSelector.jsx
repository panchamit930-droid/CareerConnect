import { FaUserTie } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";

const RoleSelector = ({ role, setRole }) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center mb-3 text-gray-900 dark:text-white">
        Create Account
      </h1>

      <p className="text-center text-gray-500 dark:text-gray-400 mb-8">
        Choose how you'd like to join CareerConnect.
      </p>

      <div className="space-y-5">
        <div
          onClick={() => setRole("jobSeeker")}
          className={`cursor-pointer border rounded-2xl p-6 transition-all duration-300
          ${
            role === "jobSeeker"
              ? "border-blue-600 bg-blue-50 dark:bg-blue-900/30"
              : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-500"
          }`}
        >
          <FaUserTie className="text-4xl text-blue-600 mb-3" />

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Job Seeker
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Find jobs and apply to top companies.
          </p>
        </div>

        <div
          onClick={() => setRole("employer")}
          className={`cursor-pointer border rounded-2xl p-6 transition-all duration-300
          ${
            role === "employer"
              ? "border-blue-600 bg-blue-50 dark:bg-blue-900/30"
              : "border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-blue-500"
          }`}
        >
          <MdBusinessCenter className="text-4xl text-blue-600 mb-3" />

          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Employer
          </h2>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Post jobs and hire skilled candidates.
          </p>
        </div>
      </div>
    </>
  );
};

export default RoleSelector;
