import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const NotFound = () => {
  return (
    <>
      <Navbar />

      <section className="min-h-[80vh] flex items-center justify-center px-6">
        <div className="text-center">

          <h1 className="text-8xl font-extrabold text-blue-600">
            404
          </h1>

          <h2 className="mt-4 text-4xl font-bold dark:text-white">
            Page Not Found
          </h2>

          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Sorry, the page you're looking for doesn't exist or may have been moved.
          </p>

          <NavLink
            to="/"
            className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Back to Home
          </NavLink>

        </div>
      </section>
    </>
  );
};

export default NotFound;