import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ExperiencesSection from './components/ExperiencesSection';

function App() {
  return (
    <Router>
      <div className="font-sans min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/experiences' element={<ExperiencesSection />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
