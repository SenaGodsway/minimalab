import React from "react";
import Header from "../../components/header";
import TeamSection from "../landing_page/team_section";
import FAQSection from "../landing_page/faq";
import aboutImg from "../../assets/images/freepik__candid-image-photography-natural-textures-highly-r__22368.jpeg";
import GetQuotes from "../../components/reuseable/get_quotes";

const AboutUs: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mx-auto w-11/12 px-4 py-12 sm:px-6 lg:px-8">
        <section className="mb-16">
          <h1 className="mb-16 text-center text-4xl font-bold">About Our Company</h1>
          
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="md:w-1/2">
              <h2 className="mb-4 text-2xl font-semibold">Our Story</h2>
              <p className="mb-4 text-lg">
                Founded in 2015, we started as a small team with big dreams. Today, we are proud to serve
                thousands of customers worldwide with our innovative solutions.
              </p>
              <p className="text-lg">
                Our journey has been marked by continuous learning, adaptation, and a relentless focus
                on delivering value to our customers.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={aboutImg}
                alt="Our team working together"
                className="h-96 w-full rounded-lg object-cover shadow-xl"
              />
            </div>
          </div>
        </section>
      </div>
      
      <div className="mx-auto mt-24 w-11/12">
        <TeamSection />
      </div>
      
      <div className="mx-auto mt-48 w-11/12">
        <FAQSection />
      </div>
      <GetQuotes/>
    </>
  );
};

export default AboutUs;