import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, Bell, Mail, FileText, Award } from 'lucide-react';

const Publications: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // In a real application, you would send this to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section id="publications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Publications & Research
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Academic publications, research papers, and contributions to the AI and machine learning community.
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900 rounded-2xl p-12 text-center">
            {/* Icon */}
            <div className="w-24 h-24 mx-auto mb-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <FileText className="w-12 h-12 text-white" />
            </div>

            {/* Coming Soon Message */}
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Coming Soon
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm currently working on publishing research papers and academic contributions in the field of 
              artificial intelligence and machine learning. This section will showcase my research work and publications.
            </p>

            {/* What to Expect */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Research Papers</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Academic papers on AI, machine learning, and computer vision applications
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Award className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Conference Presentations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Presentations and talks at AI conferences and academic events
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Open Source Contributions</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Contributions to open source AI projects and research repositories
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-6 mb-8 max-w-md mx-auto">
              <div className="flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-900 dark:text-white">Expected Launch</span>
              </div>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">Q2 2025</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                First publications will be available soon
              </p>
            </div>

            {/* Email Subscription */}
            <div className="bg-white dark:bg-gray-700 rounded-lg p-8 max-w-lg mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-blue-600 mr-2" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Get Notified
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Be the first to know when new publications are available. No spam, just quality research updates.
              </p>
              
              {isSubscribed ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <div className="flex items-center justify-center text-green-600 dark:text-green-400">
                    <Bell className="w-5 h-5 mr-2" />
                    <span className="font-medium">Thanks for subscribing!</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;