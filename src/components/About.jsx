import React from 'react';

const About = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900" id="about">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-10 mt-4">
          About Me
        </h2>

        <div className="bg-white  dark:bg-gray-950 text-gray-800 dark:text-white shadow-lg rounded-3xl p-8 space-y-8">
          {/* Background */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-700 mb-2">👨‍💻 Background</h3>
            <p className="text-gray-700 dark:text-white text-base">
              I'm Ankit Ambasht, a passionate full-stack web developer with a strong foundation in computer science and a curiosity for solving real-world problems through code. I love building dynamic, user-friendly, and scalable web applications.
            </p>
          </div>

          {/* Interests */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-700 mb-2">🎯 Interests</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-white space-y-1">
              <li>Web Development (React, Node.js, Next.js)</li>
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Open Source Contributions</li>
              <li>UI/UX Design and Animation</li>
              <li>Blog Writing and Tech Education</li>
            </ul>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-700 mb-2">🎓 Education</h3>
            <ul className="text-gray-700 dark:text-white space-y-2">
              <li><strong>Master of computer Application(MCA)</strong> – uttarakhand University Dehradun (2022–2024)</li>
              <li>Completed courses on Web Development and Computer Application</li>
            </ul>
          </div>

          {/* Goals */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-700 mb-2">🚀 Career Goals</h3>
            <p className="text-gray-700 dark:text-white text-base">
              My short-term goal is to join a forward-thinking tech company where I can contribute to impactful projects and learn from experienced developers. In the long run, I aim to become a lead AI engineer and build products that make people’s lives better.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

  