import React from 'react';
import { useDarkMode } from './hooks/useDarkMode';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Publications from './components/Publications';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <Navigation isDark={isDark} toggleDarkMode={toggleDarkMode} />
      
      <main className="overflow-x-hidden">
        <Home />
        <About />
        <Portfolio />
        <Blog />
        <Publications />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-2xl font-bold text-blue-400">Youssef</span>
            </div>
            <p className="text-gray-400 mb-6">
              AI Engineer passionate about developing practical AI solutions for real-world challenges.
            </p>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-sm text-gray-500">
                © 2024 Youssef. All rights reserved. Built with React and Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;