"use client";
import React from "react";
import Navigation from "../../components/navigation";
import SocialLinks from "../../components/social-links";

function MainComponent() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation activeLink="/" />

      <section className="min-h-screen flex items-center pt-24 pb-12 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">
          <div className="text-center md:text-left">
            <h1 className="font-inter text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm Hamza Mohamed
            </h1>
            <h2 className="font-inter text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Network & Cybersecurity Specialist
            </h2>
            <p className="font-inter text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Computer Science graduate specializing in Network Administration,
              Infrastructure Setup, and Cybersecurity Solutions
            </p>
            <a
              href="#contact"
              className="bg-[#0077B5] hover:bg-[#005885] text-white font-inter px-8 py-3 rounded-lg inline-block"
            >
              Let's Connect
            </a>
          </div>
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden">
            <img
              src="https://ucarecdn.com/9b7cb5b0-ea65-40db-8569-7d9a5d7bb3e7/-/format/auto/-/quality/smart/-/format/auto/"
              alt="Hamza Mohamed"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-inter text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          About Me
        </h2>
        <p className="font-inter text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          As a Computer Science graduate with a specialization in Networking, I
          bring hands-on experience in network administration, troubleshooting,
          and cybersecurity. My expertise spans network infrastructure setup,
          Cisco technologies, and cloud computing solutions using platforms like
          Google Cloud (GCP).
        </p>
      </section>

      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-inter text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <></>
          <></>
          <></>
        </div>
      </section>

      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="font-inter text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Contact Me
        </h2>
        <div className="text-center">
          <p className="font-inter text-gray-600 dark:text-gray-300 mb-4">
            dweyrah39@gmail.com
          </p>
          <p className="font-inter text-gray-600 dark:text-gray-300 mb-4">
            +254 798 970 024
          </p>
          <p className="font-inter text-gray-600 dark:text-gray-300">
            Kajiado, Kenya
          </p>
        </div>
        <div className="mt-8 flex justify-center">
          <SocialLinks
            links={[
              {
                platform: "linkedin",
                url: "https://linkedin.com/in/hamza-mohamed-82294831a",
                primary: true,
              },
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default MainComponent;