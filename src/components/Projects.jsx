

// import React, { useEffect, useState } from 'react';


// const projects = [
//     { title: "Wedding Website", desc: "React + Node based dynamic site", link: "https://..." },
//     { title: "Speech App", desc: "Voice recognition app in React", link: "https://..." },
//   ];
  
//   export default function Projects() {

//     const [repos, setRepos] = useState([]);
//     const username = 'ankit-ambasht'; // replace with your GitHub username
  
//     useEffect(() => {
//       const fetchRepos = async () => {
//         try {
//           const response = await fetch(`https://api.github.com/users/${username}/repos`);
//           const data = await response.json();
//           setRepos(data);
//         } catch (error) {
//           console.error('Failed to fetch repos:', error);
//         }
//       };
//       fetchRepos();
//     }, []);
//     return (
//         <>
//          {/* <section className="p-8">
//         <h2 className="text-2xl font-bold mb-6">Projects</h2>
//         <div className="grid md:grid-cols-2 gap-6">
//           {projects.map((proj) => (
//             <div className="border p-4 rounded shadow" key={proj.title}>
//               <h3 className="text-xl font-semibold">{proj.title}</h3>
//               <p>{proj.desc}</p>
//               <a href={proj.link} className="text-blue-500 underline">View</a>
//             </div>
//           ))}
//         </div>
//          </section> */}
//          <section>
//       <div className="bg-gray-900 text-white py-12 px-4 md:px-12" id="projects">
//         <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {repos.map(repo => (
//             <div
//               key={repo.id}
//               className="bg-white  dark:bg-gray-800 rounded-2xl shadow-lg p-5 hover:scale-105 transition-transform"
//             >
//               <h3 className="text-xl text-black dark:text-white font-semibold">{repo.name}</h3>
//               <p className="text-sm mt-2 mb-4 text-gray-400">
//                 {repo.description || 'No description'}
//               </p>
//               <a
//                 href={repo.html_url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:underline"
//               >
//                 View on GitHub →
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//           </section>
//          </>
//     )
//   };


import React from 'react';
import website2 from "../assets/website2.png"
import website3 from "../assets/website3.png"
import website from "../assets/website.png";

const projects = [
  {
    id: 1,
    title: 'Euroautomotive Website',
    description: 'A modern and responsive AutoMobile website built with ',
    tech: ["wordpress"],
    image: website,
    demoLink: 'https://euroautomotive.net/',
    codeLink: '',
  },
  {
    id: 2,
    title: 'Grue website clone',
    description: 'Guru Freelancers website clone using',
    tech: ['Html','css'],
    image: website2,
    demoLink: 'file:///C:/Users/ANKIT%20AMBASHT/Desktop/web%20dev/guru/guru.html',
    codeLink: 'https://github.com/ankit-ambasht/guru1',
  },
  {
    id: 3,
    title: 'Nishchay Srivastava Photography website',
    description: 'Nishchay Srivastava Photography website modern UI and fully responsive photo and video section.',
    tech: ['React', 'Tailwind','API','Express','Node'],
    image: website3,
    demoLink: "",
    codeLink: 'https://github.com/ankit-ambasht/Wedding_Photography_website',
  },
];

const ProjectSection = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50 dark:bg-black" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white mt-4">
          My Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-950 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800  dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 dark:text-white mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-900 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;

 
  
  