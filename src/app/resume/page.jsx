"use client";
import React from "react";
import Navigation from "../../components/navigation";
import CertificationCard from "../../components/certification-card";

function MainComponent() {
  const [error, setError] = useState(null);
  const certifications = [
    {
      name: "CCNA Routing and Switching",
      organization: "Cisco",
      issueDate: "2024-01-15",
      badgeUrl: "/ccna-badge.png",
      verificationUrl: "https://www.cisco.com/verify",
    },
  ];

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeLink="/resume" />

      <main className="max-w-4xl mx-auto px-4 py-20 print:py-5 print:px-0">
        <div className="space-y-8 print:space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="font-inter text-3xl font-bold text-gray-900 dark:text-white print:text-2xl">
              Hamza
            </h1>
            <button
              onClick={handleDownloadPDF}
              className="bg-[#0077B5] text-white px-4 py-2 rounded-lg hover:bg-[#005885] transition-colors duration-200 print:hidden"
            >
              <i className="fas fa-download mr-2"></i>
              Download PDF
            </button>
          </div>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm print:shadow-none">
            <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Personal Statement
            </h2>
            <p className="font-inter text-gray-600 dark:text-gray-300">
              Dedicated IT professional with a passion for technology and
              education. Experienced in network administration, cloud computing,
              and programming. Currently focused on implementing innovative tech
              solutions and mentoring the next generation of developers through
              educational initiatives.
            </p>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm print:shadow-none">
            <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Technical Skills
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-inter font-medium text-gray-900 dark:text-white mb-2">
                  Networking
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>LAN/WAN Configuration</li>
                  <li>Network Security</li>
                  <li>TCP/IP Protocols</li>
                  <li>Routing & Switching</li>
                </ul>
              </div>
              <div>
                <h3 className="font-inter font-medium text-gray-900 dark:text-white mb-2">
                  Cloud & Security
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>AWS Services</li>
                  <li>Network Security</li>
                  <li>Firewall Management</li>
                  <li>Security Protocols</li>
                </ul>
              </div>
              <div>
                <h3 className="font-inter font-medium text-gray-900 dark:text-white mb-2">
                  Programming
                </h3>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>HTML/CSS</li>
                  <li>Scratch</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm print:shadow-none">
            <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Professional Experience
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-inter font-medium text-gray-900 dark:text-white">
                  IT Administrator
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-400">
                  County Government of Kajiado • 2023 - Present
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Manage and maintain county network infrastructure</li>
                  <li>Implement security measures and protocols</li>
                  <li>Lead digital transformation initiatives</li>
                  <li>Provide technical support and training</li>
                </ul>
              </div>
              <div>
                <h3 className="font-inter font-medium text-gray-900 dark:text-white">
                  Projects
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-400">
                  Scratch Programming Initiative
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Developed curriculum for youth coding program</li>
                  <li>Trained over 100 students in basic programming</li>
                  <li>Created interactive learning materials</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm print:shadow-none">
            <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Education
            </h2>
            <div>
              <h3 className="font-inter font-medium text-gray-900 dark:text-white">
                Bachelor of Science in Information Technology
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-400">
                Umma University • 2019 - 2023
              </p>
              <p className="font-inter text-gray-600 dark:text-gray-300 mt-1">
                Focus on Network Administration and Security
              </p>
            </div>
          </section>

          <section className="print:break-before-page">
            <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <CertificationCard key={index} {...cert} />
              ))}
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm print:shadow-none">
            <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Leadership Activities
            </h2>
            <div>
              <h3 className="font-inter font-medium text-gray-900 dark:text-white">
                Tech Hub Lead
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-400">
                Umma Tech Hub • 2023 - Present
              </p>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>Led technology initiatives and workshops for students</li>
                <li>Organized coding bootcamps and tech seminars</li>
                <li>Mentored junior developers in programming fundamentals</li>
              </ul>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm print:shadow-none">
            <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white mb-4">
              References
            </h2>
            <div>
              <h3 className="font-inter font-medium text-gray-900 dark:text-white">
                Dr. Muchelule
              </h3>
              <p className="font-inter text-gray-600 dark:text-gray-400">
                Professor, Umma University
              </p>
              <p className="font-inter text-gray-600 dark:text-gray-300">
                Available upon request
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default MainComponent;