import { useSelector } from "react-redux";

const WelcomeCard = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const name =
    currentUser?.role === "employer"
      ? currentUser.companyName
      : currentUser.fullName;

  const message =
    currentUser?.role === "employer"
      ? "Manage your job postings and track applicants."
      : "Find your dream job today.";

  return (
    <div className="bg-blue-600 text-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-3xl font-bold">Welcome, {name} 👋</h2>

      <p className="mt-2 text-blue-100">{message}</p>
    </div>
  );
};

export default WelcomeCard;
