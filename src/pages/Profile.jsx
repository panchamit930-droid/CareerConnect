import DashboardNavbar from "../components/Dashboard/DashboardNavbar";
import EditProfileForm from "../components/Profile/EditProfileForm";

const Profile = () => {
  return (
    <>
      <DashboardNavbar />

      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold">
          My Profile
        </h1>

        <p className="text-gray-500 mt-2 mb-8">
          Keep your profile updated to improve your chances of getting hired.
        </p>

        <EditProfileForm />
      </div>
    </>
  );
};

export default Profile;