// import React from "react";
// import {
//   FaReact,
//   FaNodeJs,
//   FaDatabase,
//   FaDocker,
//   FaGitAlt,
//   FaAws,
// } from "react-icons/fa";
// import { SiMongodb, SiTailwindcss, SiRedux, SiExpress, SiGithub } from "react-icons/si";

// const techCategories = [
//   {
//     title: "Frontend",
//     techs: [
//       { name: "React", icon: <FaReact className="text-blue-400" /> },
//       { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
//       { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
//     ],
//   },
//   {
//     title: "Backend",
//     techs: [
//       { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
//       { name: "Express", icon: <SiExpress className="text-gray-300" /> },
//       { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
//     ],
//   },
//   {
//     title: "DevOps / Tools",
//     techs: [
//       { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
//       { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
//       { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
//       { name: "GitHub", icon: <SiGithub className="text-white" /> },
//     ],
//   },
// ];

// const TechStackSection = () => {
//   return (
//     <section className="bg-gradient-to-br from-gray-900 to-black py-16 px-6" id="tech">
//       <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
//         Full Stack Technologies
//       </h2>
//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
//         {techCategories.map((category, idx) => (
//           <div
//             key={idx}
//             className="bg-white/5 border border-gray-800 rounded-2xl p-6 backdrop-blur-md shadow-lg hover:shadow-blue-500/20 transition-shadow"
//           >
//             <h3 className="text-xl text-white font-semibold mb-4">
//               {category.title}
//             </h3>
//             <div className="space-y-3">
//               {category.techs.map((tech, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-3 text-white hover:text-blue-400 transition-colors"
//                 >
//                   <div className="text-2xl">{tech.icon}</div>
//                   <span className="text-base">{tech.name}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TechStackSection;

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiWordpress,
} from "react-icons/si";

const techData = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        icon: <FaReact className="text-blue-400 text-4xl" />,
        desc: "A JavaScript library for building fast, interactive UIs.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-teal-300 text-4xl" />,
        desc: "A utility-first CSS framework for fast styling.",
      },
      {
        name: "Redux",
        icon: <SiRedux className="text-purple-400 text-4xl" />,
        desc: "State management tool for React applications.",
      },
       {
        name: "Wordpress",
        icon: <SiWordpress className="text-purple-400 text-4xl" />,
        desc: "popular, open-source content management system (CMS) used to build and manage websites",
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-400 text-4xl" />,
        desc: "Server-side JavaScript runtime for scalable apps.",
      },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-300 text-4xl" />,
        desc: "Minimal and flexible Node.js web application framework.",
      },
    ],
  },
  {
    category: "Database",
    items: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-4xl" />,
        desc: "NoSQL database for flexible document storage.",
      },
    ],
  },
  {
    category: "DevOps & Tools",
    items: [
      {
        name: "Docker",
        icon: <FaDocker className="text-blue-500 text-4xl" />,
        desc: "Container platform to develop, ship, and run applications.",
      },
      {
        name: "AWS",
        icon: <FaAws className="text-yellow-400 text-4xl" />,
        desc: "Cloud platform offering hosting, databases, storage, etc.",
      },
      {
        name: "Git",
        icon: <FaGitAlt className="text-orange-400 text-4xl" />,
        desc: "Version control system to track code changes.",
      },
      {
        name: "GitHub",
        icon: <SiGithub className="text-white text-4xl" />,
        desc: "Platform to host and collaborate on code.",
      },
    ],
  },
];

const techStackTechSection = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-black py-16 px-6" id="tech-stack">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        Technology
      </h2>
      <div className="max-w-7xl mx-auto grid gap-10">
        {techData.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-2xl text-white mb-6 border-l-4 border-blue-500 pl-4">{category.category}</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {category.items.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-white/5 rounded-2xl p-5 border border-gray-800 hover:shadow-lg hover:scale-105 transition duration-300"
                >
                  <div className="flex items-center space-x-4">
                    {tech.icon}
                    <h4 className="text-black dark:text-white text-lg font-semibold">{tech.name}</h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default techStackTechSection;
