import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import FeaturedJobs from "../components/FeaturedJobs/FeaturedJobs";
import TopCompanies from "../components/TopCompanies/TopCompanies";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <FeaturedJobs/>
      <TopCompanies/>
      <HowItWorks/>
      <CTA/>
      <Footer/>
      
    </>
  );
};

export default Home;
