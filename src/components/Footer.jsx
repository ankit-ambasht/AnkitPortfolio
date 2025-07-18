// import React from "react";
// export default function Footer() {
//     return (
//     //   <footer className="p-4 text-center bg-gray-800 text-white">
//     //     © 2025 
//     //   </footer>
//     <footer className="bg-gray-900 text-white py-10 px-6">
//     <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
//       {/* Section 1 */}
//       <div>
//         <h2 className="text-xl font-semibold mb-2">Hire Me for Your New Creative Project!</h2>
//         <p>
//           I'm available for commissions worldwide and will be happy to act in
//           your movie, play, or TV series.
//         </p>
//       </div>

//       {/* Section 2 */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
//         <ul className="space-y-1">
//           <li>ABOUT ME</li>
//           <li>FILMOGRAPHY</li>
//           <li>THEATER</li>
//           <li>REVIEWS</li>
//           <li>CONTACTS</li>
//           <li>AGENT CONTACTS</li>
//         </ul>
//       </div>

//       {/* Section 3 */}
//       <div>
//         <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
//         <p className="mb-1">📞 +1 (234) 567 89 01</p>
//         <p className="mb-4">📧 agent_smith@email.com</p>
//         <p className="mb-1">📞 +1 (234) 567 89 00</p>
//         <p>📧 julie_smith@email.com</p>
//       </div>
//     </div>

//     <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
//       © Created by <span className="font-semibold text-blue-700">Ankit Ambasht</span> — All rights Reserved
//     </div>
//   </footer>
//     );
//   }
  

import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About / Hire Me Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">About Me</h2>
          <p className="text-sm leading-6">
            I’m a passionate full stack developer skilled in React, Node, and modern web technologies. 
            Let’s connect if you’re looking to build something great together!
          </p>
        </div>

        {/* Services Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Services</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Web Development</a></li>
            <li><a href="#" className="hover:text-white">App Development</a></li>
            <li><a href="#" className="hover:text-white">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-white">Tech Consulting</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Contact</h2>
          <ul className="text-sm space-y-2">
            <li>Email: <a href="mailto:ankitambasht91@gmail.com" className="hover:text-white">ankitambasht91@gmail.com</a></li>
            <li>Phone: <a href="tel:+919102200646" className="hover:text-white">+91 9102200646</a></li>
            <li>Location: Delhi, India</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-blue-700">Follow Me</h2>
          <div className="flex space-x-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/ankit-ambasht/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedinIn /></a>
            <a href="https://github.com/ankit-ambasht" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub /></a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-center text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} <span className='text-blue-700 text-l'>Ankit Ambasht</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
