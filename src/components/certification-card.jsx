"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ 
  name, 
  organization, 
  issueDate, 
  badgeUrl, 
  verificationUrl 
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6 flex flex-col md:flex-row items-start gap-6">
        {badgeUrl && (
          <div className="w-24 h-24 flex-shrink-0 mx-auto md:mx-0">
            <img
              src={badgeUrl}
              alt={`${organization} certification badge`}
              className="w-full h-full object-contain"
            />
          </div>
        )}
        
        <div className="flex-grow">
          <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {name}
          </h2>
          <div className="font-inter text-gray-700 dark:text-gray-300 mb-2">
            {organization}
          </div>
          <time className="font-inter text-sm text-gray-500 dark:text-gray-400 block mb-3">
            {new Date(issueDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long'
            })}
          </time>
          {verificationUrl && (
            <a
              href={verificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-inter text-[#0077B5] dark:text-[#4DA3D4] hover:text-[#005885] dark:hover:text-[#7AB8DD] transition-colors duration-200"
            >
              Verify Certificate
              <i className="fas fa-external-link-alt ml-2 text-sm"></i>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function StoryComponent() {
  const sampleCertifications = [
    {
      name: "AWS Certified Solutions Architect",
      organization: "Amazon Web Services",
      issueDate: "2025-01-15",
      badgeUrl: "/aws-badge.png",
      verificationUrl: "https://aws.amazon.com/verify"
    },
    {
      name: "Professional Cloud Architect",
      organization: "Google Cloud",
      issueDate: "2024-12-01",
      badgeUrl: "/gcp-badge.png",
      verificationUrl: "https://google.com/verify"
    },
    {
      name: "Frontend Development Certificate",
      organization: "freeCodeCamp",
      issueDate: "2024-11-20",
      badgeUrl: "/fcc-badge.png"
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 space-y-6">
      {sampleCertifications.map((cert, index) => (
        <MainComponent key={index} {...cert} />
      ))}
    </div>
  );
});
}