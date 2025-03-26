"use client";
import React from "react";
import Navigation from "../../components/navigation";

function MainComponent() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      title: "County Government Network Infrastructure",
      description:
        "Led the modernization of county government network infrastructure, implementing secure VLANs, redundant routing, and advanced firewall configurations. Improved network reliability by 99.9% and reduced security incidents by 75%.",
      category: "Networking",
      image: "/county-network.jpg",
      technologies: ["Cisco IOS", "PfSense", "OSPF", "BGP"],
      challenges:
        "Legacy system integration, minimal downtime requirements, budget constraints",
      outcomes:
        "Achieved 99.9% uptime, reduced operational costs by 30%, implemented comprehensive disaster recovery",
      githubUrl: "https://github.com/example/county-network",
      liveUrl: "https://county-network.example.com",
    },
    {
      title: "Scratch Programming Initiative - Umma Tech Hub",
      description:
        "Developed and implemented a comprehensive coding curriculum using Scratch for youth education at Umma Tech Hub. Created interactive learning modules and mentored over 100 students in basic programming concepts.",
      category: "IT",
      image: "/scratch-initiative.jpg",
      technologies: ["Scratch", "Educational Technology", "Project Management"],
      challenges:
        "Varying skill levels, limited resources, remote learning adaptation",
      outcomes:
        "90% student completion rate, 85% satisfaction score, 5 student-led projects deployed",
      githubUrl: "https://github.com/example/scratch-initiative",
      liveUrl: "https://scratch-ummatech.example.com",
    },
    {
      title: "Cybersecurity Learning Path",
      description:
        "Designed and implemented a structured cybersecurity learning program incorporating hands-on labs, CTF challenges, and real-world scenarios. Currently expanding into advanced threat hunting and incident response modules.",
      category: "Cybersecurity",
      image: "/cyber-learning.jpg",
      technologies: ["Kali Linux", "Metasploit", "Wireshark", "SIEM"],
      challenges:
        "Rapid technology evolution, complex lab environments, scalability",
      outcomes:
        "Trained 50+ security professionals, developed 20+ custom lab scenarios, achieved 95% certification pass rate",
      githubUrl: "https://github.com/example/cyber-learning",
      liveUrl: "https://cyber-learning.example.com",
    },
  ];

  const categories = ["all", "IT", "Networking", "Cybersecurity"];
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeLink="/projects" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="font-inter text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Projects Portfolio
        </h1>
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-inter text-sm transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-[#0077B5] text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-inter text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="font-inter text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-inter font-semibold text-gray-900 dark:text-white mb-2">
                    Challenges Overcome:
                  </h4>
                  <p className="font-inter text-gray-600 dark:text-gray-300">
                    {project.challenges}
                  </p>
                </div>
                <div className="mb-4">
                  <h4 className="font-inter font-semibold text-gray-900 dark:text-white mb-2">
                    Outcomes:
                  </h4>
                  <p className="font-inter text-gray-600 dark:text-gray-300">
                    {project.outcomes}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-inter"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-inter text-[#0077B5] dark:text-[#4DA3D4] hover:text-[#005885]"
                  >
                    <i className="fab fa-github mr-2"></i>
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-inter text-[#0077B5] dark:text-[#4DA3D4] hover:text-[#005885]"
                  >
                    <i className="fas fa-external-link-alt mr-2"></i>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="font-inter text-gray-600 dark:text-gray-400">
              No projects found in this category.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default MainComponent;