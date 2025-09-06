import React from 'react';
import { Brain, Code, Database, Zap, Award, Users, Target, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 scroll-animate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate AI Engineer dedicated to pushing the boundaries of artificial intelligence 
            and creating innovative solutions that make a real-world impact.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image and Stats */}
          <div className="text-center lg:text-left">
            <div className="relative inline-block mb-8">
              <img
                src="/Adobe Express - file.jpg"
                alt="Youssef Taha B."
                className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Brain className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Learning</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Multiple</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">Active</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Open Source</div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey in AI
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                I'm Youssef Taha B., an AI Engineer with a deep passion for artificial intelligence and machine learning. 
                My journey began with a fascination for how machines can learn and adapt, leading me to pursue 
                advanced studies in computer science and specialize in AI technologies with a focus on practical applications.
              </p>
              <p>
                I have hands-on experience developing AI solutions across various domains including medical image analysis, 
                autonomous driving systems, and data visualization. My work spans from research and development to 
                practical implementation of machine learning models in real-world applications.
              </p>
              <p>
                I'm passionate about bridging the gap between theoretical AI research and practical applications. 
                My projects demonstrate proficiency in Python, deep learning frameworks, and modern development practices, 
                always with a focus on creating solutions that make a meaningful impact.
              </p>
            </div>

            {/* Core Values */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Values</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Innovation</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-indigo-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Collaboration</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Excellence</span>
                </div>
                <div className="flex items-center">
                  <Heart className="w-5 h-5 text-red-600 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">Impact</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ExpertiseCard
            icon={<Brain className="w-8 h-8" />}
            title="Deep Learning"
            description="Neural networks, CNNs, RNNs, Transformers, and advanced architectures"
            color="blue"
          />
          <ExpertiseCard
            icon={<Code className="w-8 h-8" />}
            title="Computer Vision"
            description="Image processing, object detection, segmentation, and visual AI"
            color="indigo"
          />
          <ExpertiseCard
            icon={<Database className="w-8 h-8" />}
            title="NLP & LLMs"
            description="Natural language processing, chatbots, and large language models"
            color="purple"
          />
          <ExpertiseCard
            icon={<Zap className="w-8 h-8" />}
            title="MLOps"
            description="Model deployment, monitoring, and production-ready ML systems"
            color="green"
          />
        </div>
      </div>
    </section>
  );
};

const ExpertiseCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}> = ({ icon, title, description, color }) => {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800',
    indigo: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800',
    purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800',
    green: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800'
  };

  return (
    <div className={`p-6 rounded-xl border-2 ${colorClasses[color as keyof typeof colorClasses]} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

export default About;