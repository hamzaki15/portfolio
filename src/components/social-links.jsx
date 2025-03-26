"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ links = [
  { platform: 'linkedin', url: 'https://linkedin.com', primary: true },
  { platform: 'github', url: 'https://github.com' },
  { platform: 'twitter', url: 'https://twitter.com' }
] }) {
  const getIconClass = (platform) => {
    const baseClass = 'fab';
    const platformIcons = {
      linkedin: 'fa-linkedin',
      github: 'fa-github',
      twitter: 'fa-twitter',
      instagram: 'fa-instagram',
      facebook: 'fa-facebook'
    };
    return `${baseClass} ${platformIcons[platform] || 'fa-globe'}`;
  };

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center rounded-full transition-all duration-300 ${
            link.primary
              ? 'bg-[#0077B5] text-white w-12 h-12 hover:bg-[#005885] hover:scale-110'
              : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 w-10 h-10 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105'
          }`}
        >
          <i className={`${getIconClass(link.platform)} ${link.primary ? 'text-xl' : 'text-lg'}`}></i>
        </a>
      ))}
    </div>
  );
}

function StoryComponent() {
  const defaultLinks = [
    { platform: 'linkedin', url: 'https://linkedin.com', primary: true },
    { platform: 'github', url: 'https://github.com' },
    { platform: 'twitter', url: 'https://twitter.com' }
  ];

  const extendedLinks = [
    { platform: 'linkedin', url: 'https://linkedin.com', primary: true },
    { platform: 'github', url: 'https://github.com' },
    { platform: 'twitter', url: 'https://twitter.com' },
    { platform: 'instagram', url: 'https://instagram.com' },
    { platform: 'facebook', url: 'https://facebook.com' }
  ];

  return (
    <div className="space-y-8 p-8 bg-white dark:bg-gray-900">
      <div>
        <h3 className="font-inter text-sm text-gray-500 dark:text-gray-400 mb-4">Default Social Links</h3>
        <MainComponent links={defaultLinks} />
      </div>
      
      <div>
        <h3 className="font-inter text-sm text-gray-500 dark:text-gray-400 mb-4">Extended Social Links</h3>
        <MainComponent links={extendedLinks} />
      </div>
    </div>
  );
});
}