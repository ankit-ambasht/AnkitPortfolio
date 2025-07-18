
import React, { useEffect, useState } from 'react';

export default function Ripo() {
  const [repos, setRepos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const [isMobile, setIsMobile] = useState(false);

  const username = 'ankit-ambasht'; // Replace with your GitHub username
 
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Failed to fetch repos:', error);
      }
    };

    fetchRepos();

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleViewMore = () => {
    setVisibleCount(repos.length);
  };

  const handleViewLess = () => {
    setVisibleCount(10);
  };

  const isAllVisible = visibleCount >= repos.length;
  const visibleRepos = isMobile ? repos.slice(0, visibleCount) : repos;

  return (
    <section>
      <div className="bg-gray-900 text-white py-12 px-4 md:px-12" id="projects">
        <h2 className="text-3xl font-bold mb-8 text-center">Github Repositories</h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleRepos.map(repo => (
            <div
              key={repo.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-5 hover:scale-105 transition-transform"
            >
              <h3 className="text-xl text-black dark:text-white font-semibold">{repo.name}</h3>
              <p className="text-sm mt-2 mb-4 text-gray-600 dark:text-gray-400">
                {repo.description || 'No description'}
              </p>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>

        {/* Mobile: View More / View Less Buttons */}
        {isMobile && (
          <div className="text-center mt-8 space-x-4">
            {!isAllVisible && (
              <button
                onClick={handleViewMore}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all"
              >
                View More
              </button>
            )}
            {visibleCount > 10 && (
              <button
                onClick={handleViewLess}
                className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-full transition-all"
              >
                View Less
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

 
  
  