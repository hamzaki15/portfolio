"use client";
import React from "react";



export default function Index() {
  return (function MainComponent({ title, date, excerpt, slug }) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="p-6">
        <h2 className="font-inter text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        <time className="font-inter text-sm text-gray-500 dark:text-gray-400 block mb-3">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </time>
        <p className="font-inter text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>
        <a
          href={`/blog/${slug}`}
          className="inline-block font-inter text-[#0077B5] dark:text-[#4DA3D4] hover:text-[#005885] dark:hover:text-[#7AB8DD] transition-colors duration-200"
        >
          Read more
          <i className="fas fa-arrow-right ml-2 text-sm"></i>
        </a>
      </div>
    </article>
  );
}

function StoryComponent() {
  const samplePosts = [
    {
      title: "Getting Started with React Development",
      date: "2025-01-15",
      excerpt: "Learn the fundamentals of React development and how to build modern web applications with this powerful JavaScript library.",
      slug: "getting-started-with-react"
    },
    {
      title: "Advanced TypeScript Techniques",
      date: "2025-01-10",
      excerpt: "Dive deep into TypeScript's advanced features and learn how to leverage them for better code quality and developer experience.",
      slug: "advanced-typescript-techniques"
    },
    {
      title: "The Future of Web Development",
      date: "2025-01-05",
      excerpt: "Explore upcoming trends and technologies that will shape the future of web development in the coming years.",
      slug: "future-of-web-development"
    }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 p-6 space-y-6">
      {samplePosts.map((post, index) => (
        <MainComponent key={index} {...post} />
      ))}
    </div>
  );
});
}