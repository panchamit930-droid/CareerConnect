import { useSelector } from "react-redux";

const WelcomeCard = () => {

  const { currentUser } = useSelector(
    (state) => state.auth
  );

  return (

    <div className="bg-blue-600 text-white rounded-2xl p-8">

      <h2 className="text-3xl font-bold">

        Welcome,

        {" "}

        {currentUser?.fullName}

      </h2>

      <p className="mt-2">

        Find your dream job today.

      </p>

    </div>

  );
};

export default WelcomeCard;