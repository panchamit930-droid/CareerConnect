import { NavLink } from "react-router-dom";

const EmptyState = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center text-center py-16 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-sm transition-colors duration-300">
      {/* Icon */}
      <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-50 dark:bg-blue-900/30 text-4xl">
        {icon}
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold mt-6 text-gray-900 dark:text-white">
        {title}
      </h2>

      {/* Description */}
      <p className="text-gray-500 dark:text-gray-400 mt-3 max-w-md leading-6">
        {description}
      </p>

      {/* Button */}
      {buttonText && buttonLink && (
        <NavLink
          to={buttonLink}
          className="mt-8 inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-md"
        >
          {buttonText}
        </NavLink>
      )}
    </div>
  );
};

export default EmptyState;
