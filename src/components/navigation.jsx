"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ activeLink = '/' }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', text: 'Home' },
    { href: '/resume', text: 'Resume' },
    { href: '/projects', text: 'Projects' },
    { href: '/blog', text: 'Blog' },
    { href: '/certifications', text: 'Certifications' },
    { href: '/contact', text: 'Contact' }
  ];

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="font-inter font-bold text-gray-900 dark:text-white text-xl">
              Portfolio
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`font-inter text-sm ${
                  activeLink === link.href
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-700 dark:text-gray-300'
                } hover:text-gray-900 dark:hover:text-white transition-colors duration-200`}
              >
                {link.text}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`block font-inter text-sm py-2 ${
                    activeLink === link.href
                      ? 'text-gray-900 dark:text-white'
                      : 'text-gray-700 dark:text-gray-300'
                  } hover:text-gray-900 dark:hover:text-white transition-colors duration-200`}
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function StoryComponent() {
  return (
    <div className="h-screen bg-white dark:bg-gray-900">
      <MainComponent activeLink="/" />
      <div className="pt-16">
        <MainComponent activeLink="/resume" />
      </div>
      <div className="pt-16">
        <MainComponent activeLink="/projects" />
      </div>
    </div>
  );
});
}