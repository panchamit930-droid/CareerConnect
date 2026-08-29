const ApplicantProfileCard = ({ user }) => {
  if (!user) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-10 text-center">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          User not found
        </h2>

        <p className="mt-2 text-gray-500 dark:text-gray-400">
          The requested applicant profile could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="w-28 h-28 rounded-full bg-white text-blue-600 flex items-center justify-center text-5xl font-bold shadow-lg">
            {user.fullName?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-3xl font-bold">{user.fullName}</h2>

            <p className="mt-2 text-blue-100">{user.email}</p>

            <span className="inline-block mt-4 px-4 py-1 rounded-full bg-white/20 text-sm font-medium capitalize">
              {user.role}
            </span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">
              Phone
            </h3>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {user.phone || "-"}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">
              Location
            </h3>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {user.location || "-"}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">
              Education
            </h3>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {user.education || "-"}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">
              Experience
            </h3>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {user.experience || "-"}
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-50 dark:bg-gray-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">
              Skills
            </h3>

            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {user.skills || "-"}
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-50 dark:bg-gray-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">
              About
            </h3>

            <p className="mt-2 text-gray-700 dark:text-gray-300 leading-7">
              {user.about || "-"}
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">
              GitHub
            </h3>

            {user.github ? (
              <a
                href={user.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-600 dark:text-blue-400 hover:underline break-all"
              >
                {user.github}
              </a>
            ) : (
              <p className="mt-2 text-gray-700 dark:text-gray-300">-</p>
            )}
          </div>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-5">
            <h3 className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-400">
              LinkedIn
            </h3>

            {user.linkedin ? (
              <a
                href={user.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-blue-600 dark:text-blue-400 hover:underline break-all"
              >
                {user.linkedin}
              </a>
            ) : (
              <p className="mt-2 text-gray-700 dark:text-gray-300">-</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfileCard;
