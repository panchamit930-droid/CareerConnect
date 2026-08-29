import { FaMoon, FaSun } from "react-icons/fa";
import useTheme from "../../../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className="
        w-10 h-10
        flex items-center justify-center
        rounded-full
        text-lg
        text-gray-700 dark:text-gray-200
        bg-gray-100 dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        hover:bg-gray-200 dark:hover:bg-gray-700
        hover:scale-105
        transition-all duration-300
      "
    >
      {theme === "light" ? (
        <FaMoon className="text-blue-600 dark:text-blue-400" />
      ) : (
        <FaSun className="text-blue-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
