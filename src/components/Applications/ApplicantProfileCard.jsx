const ApplicantProfileCard = ({ user }) => {
  if (!user) {
    return <p>User not found.</p>;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">

      <div className="flex items-center gap-6">

        <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center text-4xl font-bold">
          {user.fullName?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            {user.fullName}
          </h2>

          <p className="text-gray-500">
            {user.email}
          </p>

          <p className="mt-2 capitalize">
            {user.role}
          </p>
        </div>

      </div>

      <hr className="my-8" />

      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <h3 className="font-semibold">
            Phone
          </h3>

          <p>{user.phone || "-"}</p>
        </div>

        <div>
          <h3 className="font-semibold">
            Location
          </h3>

          <p>{user.location || "-"}</p>
        </div>

        <div>
          <h3 className="font-semibold">
            Education
          </h3>

          <p>{user.education || "-"}</p>
        </div>

        <div>
          <h3 className="font-semibold">
            Experience
          </h3>

          <p>{user.experience || "-"}</p>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-semibold">
            Skills
          </h3>

          <p>{user.skills || "-"}</p>
        </div>

        <div className="md:col-span-2">
          <h3 className="font-semibold">
            About
          </h3>

          <p>{user.about || "-"}</p>
        </div>

        <div>
          <h3 className="font-semibold">
            GitHub
          </h3>

          <p>{user.github || "-"}</p>
        </div>

        <div>
          <h3 className="font-semibold">
            LinkedIn
          </h3>

          <p>{user.linkedin || "-"}</p>
        </div>

      </div>

    </div>
  );
};

export default ApplicantProfileCard;