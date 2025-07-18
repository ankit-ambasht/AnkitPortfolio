// import React, { useState, useEffect } from 'react';
// import { FaSun, FaMoon, FaGithub, FaLinkedin } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   const [dark, setDark] = useState(false);

//   useEffect(() => {
//     if (dark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//   }, [dark]);

//   return (
//     <nav className="p-4 bg-white dark:bg-gray-950 text-gray-800 dark:text-white flex justify-between items-center shadow">
//       <h1 className="text-xl font-bold text-blue-500"><Link to="/">Ankit Ambasht</Link></h1>
//       <div className="flex gap-4 items-center">
//         <Link to="/about">About</Link>
//         <Link to="/projects">Projects</Link>
//         <Link to="/contact">Contact</Link>
//         <Link to="/experiences">Experiences</Link>
//         <a href="https://github.com"><FaGithub /></a>
//         <a href="https://linkedin.com"><FaLinkedin /></a>
//         <button onClick={() => setDark(!dark)}>
//           {dark ? <FaSun /> : <FaMoon />}
//         </button>
//       </div>
//     </nav>
//   );
// }
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-gray-950 text-gray-800 dark:text-white shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/" className="text-xl md:text-2xl font-bold text-blue-600 hover:text-blue-700">
          Ankit Ambasht
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/about" className="hover:text-blue-600 transition">About</Link>
          <Link to="/projects" className="hover:text-blue-600 transition">Projects</Link>
          <Link to="/experiences" className="hover:text-blue-600 transition">Experiences</Link>
          <Link to="/contact" className="hover:text-blue-600 transition">Contact</Link>
          <a href="https://github.com/ankit-ambasht" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ankit-ambasht/" target="_blank" rel="noreferrer" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
          <button onClick={() => setDark(!dark)} aria-label="Toggle Dark Mode" className="text-xl hover:text-yellow-400">
            {dark ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle Menu" className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-950 px-4 py-4 space-y-4 shadow-md">
          <Link to="/about" className="block hover:text-blue-600" onClick={toggleMenu}>About</Link>
          <Link to="/projects" className="block hover:text-blue-600" onClick={toggleMenu}>Projects</Link>
          <Link to="/experiences" className="block hover:text-blue-600" onClick={toggleMenu}>Experiences</Link>
          <Link to="/contact" className="block hover:text-blue-600" onClick={toggleMenu}>Contact</Link>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-blue-600">
              <FaLinkedin />
            </a>
            <button onClick={() => setDark(!dark)} aria-label="Toggle Dark Mode" className="text-xl hover:text-yellow-400">
              {dark ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
