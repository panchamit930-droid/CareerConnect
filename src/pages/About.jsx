import { NavLink } from "react-router-dom";
import {
  FaBriefcase,
  FaBolt,
  FaBuilding,
  FaShieldAlt,
} from "react-icons/fa";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const About = () => {
  const features = [
    {
      icon: <FaBriefcase className="text-4xl text-blue-600" />,
      title: "Wide Range of Opportunities",
      description:
        "Explore job opportunities across various industries and find roles that match your skills and career aspirations.",
    },
    {
      icon: <FaBolt className="text-4xl text-blue-600" />,
      title: "Easy Job Applications",
      description:
        "Apply to jobs quickly with a simple and seamless application process designed to save your time.",
    },
    {
      icon: <FaBuilding className="text-4xl text-blue-600" />,
      title: "Trusted Employers",
      description:
        "Connect with verified employers and discover exciting career opportunities from reputable companies.",
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      title: "Secure & User-Friendly",
      description:
        "Enjoy a responsive, secure, and easy-to-use platform that makes hiring and job searching effortless.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold">
            About CareerConnect
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100 leading-8">
            CareerConnect is a modern job portal designed to simplify the hiring
            process by connecting talented professionals with trusted employers.
            Whether you're searching for your dream job or looking for the
            perfect candidate, we're here to make the journey easier.
          </p>

          <NavLink
            to="/jobs"
            className="inline-block mt-10 bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Explore Jobs
          </NavLink>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold dark:text-white">
            Our Mission
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our mission is to bridge the gap between talented job seekers and
            trusted employers through a simple, reliable, and user-friendly
            platform. We aim to make recruitment faster, more transparent, and
            accessible for everyone while helping individuals build successful
            careers.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center dark:text-white">
            Why Choose CareerConnect?
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-4 mb-14">
            Everything you need to find the right opportunity or the right
            candidate.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 text-center"
              >
                <div className="flex justify-center">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mt-6 dark:text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 text-gray-600 dark:text-gray-400 leading-7">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;