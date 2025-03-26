"use client";
import React from "react";
import Navigation from "../../components/navigation";
import CertificationCard from "../../components/certification-card";

function MainComponent() {
  const [activeFilter, setActiveFilter] = useState("all");

  const certifications = {
    cloud: [
      {
        name: "AWS Certified Solutions Architect",
        organization: "Amazon Web Services",
        issueDate: "2025-01-15",
        badgeUrl: "/aws-badge.png",
        verificationUrl: "https://aws.amazon.com/verify",
        description:
          "Advanced cloud architecture principles and best practices for designing scalable AWS solutions.",
      },
      {
        name: "Google Cloud Professional Architect",
        organization: "Google Cloud",
        issueDate: "2024-12-01",
        badgeUrl: "/gcp-badge.png",
        verificationUrl: "https://google.com/verify",
        description:
          "Expertise in designing and managing enterprise-level cloud solutions on Google Cloud Platform.",
      },
    ],
    development: [
      {
        name: "Full Stack Development",
        organization: "freeCodeCamp",
        issueDate: "2024-11-20",
        badgeUrl: "/fcc-badge.png",
        verificationUrl: "https://freecodecamp.org/verify",
        description:
          "Comprehensive training in modern web development technologies and practices.",
      },
      {
        name: "React Developer Certification",
        organization: "Meta",
        issueDate: "2024-10-15",
        badgeUrl: "/meta-badge.png",
        verificationUrl: "https://meta.com/verify",
        description:
          "Advanced React development skills including state management, hooks, and performance optimization.",
      },
    ],
    ongoing: [
      {
        name: "CCNA 1: Introduction to Networks",
        organization: "Cisco",
        issueDate: "2025-06-30",
        badgeUrl: "/cisco-badge.png",
        description:
          "Foundational networking concepts, protocols, and infrastructure basics essential for modern network engineering.",
      },
      {
        name: "CCNA 2: Switching, Routing, and Wireless Essentials",
        organization: "Cisco",
        issueDate: "2025-07-15",
        badgeUrl: "/cisco-badge.png",
        description:
          "Advanced routing and switching concepts, focusing on enterprise networking and wireless technologies.",
      },
      {
        name: "CCNA 3: Enterprise Networking, Security, and Automation",
        organization: "Cisco",
        issueDate: "2025-08-30",
        badgeUrl: "/cisco-badge.png",
        description:
          "Network security, automation, and programmability in enterprise environments.",
      },
      {
        name: "Cybersecurity Fundamentals",
        organization: "CompTIA",
        issueDate: "2025-09-15",
        badgeUrl: "/comptia-badge.png",
        description:
          "Essential cybersecurity concepts, threat detection, and security best practices for modern IT infrastructure.",
      },
    ],
  };

  const categories = [
    { id: "all", name: "All Certifications" },
    { id: "cloud", name: "Cloud Computing" },
    { id: "development", name: "Development" },
    { id: "ongoing", name: "Ongoing" },
  ];

  const filteredCertifications =
    activeFilter === "all"
      ? [...certifications.cloud, ...certifications.development]
      : certifications[activeFilter] || [];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeLink="/certifications" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="text-center mb-12">
          <h1 className="font-inter text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Certifications
          </h1>
          <p className="font-inter text-lg text-gray-600 dark:text-gray-300">
            A collection of my technical certifications and ongoing learning
            journey, focusing on networking, security, and cloud technologies
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-2 rounded-full font-inter text-sm transition-colors duration-200 ${
                activeFilter === category.id
                  ? "bg-[#0077B5] text-white"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {activeFilter === "ongoing" && (
          <div className="mb-12">
            <h2 className="font-inter text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
              🎯 Ongoing Certifications
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {certifications.ongoing.map((cert, index) => (
                <div key={index} className="flex flex-col">
                  <CertificationCard {...cert} />
                  <p className="mt-4 font-inter text-gray-600 dark:text-gray-300 text-sm">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {(activeFilter === "all" || activeFilter !== "ongoing") && (
          <div className="grid gap-6 md:grid-cols-2">
            {filteredCertifications.map((cert, index) => (
              <div key={index} className="flex flex-col">
                <CertificationCard {...cert} />
                <p className="mt-4 font-inter text-gray-600 dark:text-gray-300 text-sm">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default MainComponent;