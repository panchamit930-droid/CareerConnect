import { NavLink } from "react-router-dom";

const EmptyState = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <div className="text-6xl">{icon}</div>

      <h2 className="text-2xl font-bold mt-6">{title}</h2>

      <p className="text-gray-500 mt-3 max-w-md">{description}</p>

      {buttonText && buttonLink && (
        <NavLink
          to={buttonLink}
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          {buttonText}
        </NavLink>
      )}
    </div>
  );
};

export default EmptyState;
