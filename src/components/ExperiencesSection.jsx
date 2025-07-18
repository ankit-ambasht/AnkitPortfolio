import React from "react";

const experiences = [
  {
    company: "Mezzotint Pvt. Ltd.",
    role: "Frontend Developer",
    duration: "25 May - 28 Nov",
    description:
      "Designed, developed, and maintained high-performance, responsive web interfaces using HTML, CSS, Tailwind, JavaScript, and React.js.",
    projects: [
      {
        name: "Two-Hand Website Clone",
        link: "https://github.com/ankit-ambasht/mezzotint-two-hand-project",
      },
      {
        name: "Clothes-Ecommerce",
        link: "https://github.com/ankit-ambasht/Clothes_Ecommerce/tree/master/Clothes-E-Commerce",
      },
    ],
  },
  {
    company: "NetITSystems",
    role: "front-end developer and wordpress Designer",
    duration: "Jan 2025 – March 2025",
    description:
     "Developed and managed custom WordPress websites, implementing scalable themes, custom plugins, and performance optimizations to improve site speed and usability",
    projects: [
      {
        name: "euroautomotive",
        link: "https://euroautomotive.net/",
      },
    ],
  },
  
];

const ExperiencesSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-14" id="experience">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl dark:text-white font-bold text-center mb-10 mt-4">Experience</h2>
        <div className="relative border-l border-gray-300">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-10 ml-6">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5 mt-1"></div>
              <h3 className="text-xl dark:text-white font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-500 dark:text-white">
                {exp.company} • {exp.duration}
              </p>
              <p className="mt-2 text-gray-700 dark:text-white">{exp.description}</p>
              <ul className="mt-2 list-disc list-inside text-sm text-blue-600">
                {exp.projects.map((project, index) => (
                  <li key={index}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperiencesSection;
