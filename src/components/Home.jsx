import React from "react";
import Ripo from "./Ripo";
import About from "./About";
import ProjectSection from "./Projects"
import ExperiencesSection from "./ExperiencesSection";
import TechStackSection from "./TechStackSection";
import resume from "../assets/Ankit.pdf";
import bgImage6 from '../assets/back6.jpg'; 
import bgImage5 from '../assets/back5.jpg';
import bgImage4 from '../assets/back4.jpg';// adjust path based on your folder
import { useEffect, useState } from "react";
import TestimonialsSection from "./Testimonials";
import Contact from "./Contact";

const slides = [
  {
    id: 1,
    backgroundImage: bgImage6,
    content: (
      <>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I’m Ankit Ambasht</h1>
        <p className="max-w-xl text-lg md:text-xl text-gray-200">
          I'm a passionate full stack developer skilled in React, Node.js, MongoDB, and modern UI/UX. 
          I build high-performing, scalable, and beautiful web apps.
        </p>
      </>
    ),
  },
  {
    id: 2,
    backgroundImage: bgImage4,
    content: (
      <>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Technologies I Work With</h1>
        <p className="text-lg md:text-xl text-gray-300">
          🚀 Frontend: React, Tailwind CSS, Redux <br />
          🔧 Backend: Node.js, Express, MongoDB <br />
          🌐 Full Stack | REST APIs | Git | Responsive Design
        </p>
      </>
    ),
  },
  {
    id: 3,
    backgroundImage: bgImage5,
    content: (
      <>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
          I've worked on real-world apps including voice recognition tools, admin dashboards, and dynamic full-stack platforms.
        </p>
        <a
          href="#projects"
          className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full transition"
        >
          Explore My Projects
        </a>
      </>
    ),
  },
];


export default function Hero() {

   const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, []);

  const current = slides[currentSlide];


  return (
    <>
 <div className="relative w-full h-[100vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full bg-cover bg-center flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
          }}
        >
          <div className="text-center  text-white  px-6 p-6 rounded-xl">
            {slide.content}
            <div className="mt-8 flex justify-center gap-6 flex-wrap">
              <a
                href={resume}
                download
                className="bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-gray-300 transition"
              >
                Download Resume
              </a>
              <a
                href="tel:+919102200646"
                className="bg-transparent border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
      <About />
      <TechStackSection />
      <ProjectSection />
      <ExperiencesSection />
      <Ripo />
      <TestimonialsSection />
      <Contact />
      
  </>)}
