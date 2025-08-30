import React from 'react';
import { ArrowDown, Brain, Code, Zap } from 'lucide-react';

const Home: React.FC = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-xl">
              <span className="text-4xl font-bold text-white">Y</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Youssef
            </span>
          </h1>

          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6">
            AI Engineer & Machine Learning Specialistvvvvv
          </h2>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            Passionate about building intelligent systems that solve real-world problems. 
            Specializing in deep learning, computer vision, and natural language processing.
          </p>

          {/* Skills Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
              <Brain className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-800 dark:text-gray-200">Deep Learning</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
              <Code className="w-5 h-5 text-indigo-600 mr-2" />
              <span className="text-gray-800 dark:text-gray-200">Python & PyTorch</span>
            </div>
            <div className="flex items-center px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md">
              <Zap className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-gray-800 dark:text-gray-200">MLOps</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToPortfolio}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              View My Work
            </button>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <button
              onClick={scrollToPortfolio}
              className="animate-bounce text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
            >
              <ArrowDown className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;