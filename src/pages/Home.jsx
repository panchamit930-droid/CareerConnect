import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
// import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";
import TopCompanies from "../components/TopCompanies/TopCompanies";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <Hero />
        {/* <FeaturedJobs/> */}
        <TopCompanies />
        <HowItWorks />
        <CTA />
        <Footer />
      </div>
    </>
  );
};

export default Home;
