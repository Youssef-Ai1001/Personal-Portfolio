import React, { useState } from 'react';
import { Code, Database, Cloud, Cpu, BookOpen, Wrench } from 'lucide-react';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Programming');

  const skillCategories = [
    {
      name: 'Programming',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 95, description: 'Primary language for AI/ML development' },
        { name: 'JavaScript/TypeScript', level: 88, description: 'Full-stack web development' },
        { name: 'C++', level: 82, description: 'High-performance computing and optimization' },
        { name: 'SQL', level: 85, description: 'Database design and complex queries' },
        { name: 'R', level: 75, description: 'Statistical analysis and data science' },
        { name: 'Java', level: 78, description: 'Enterprise applications and Android development' }
      ]
    },
    {
      name: 'AI/ML Frameworks',
      icon: <Cpu className="w-6 h-6" />,
      skills: [
        { name: 'PyTorch', level: 92, description: 'Deep learning research and production' },
        { name: 'TensorFlow', level: 88, description: 'Large-scale ML model development' },
        { name: 'Scikit-learn', level: 90, description: 'Classical machine learning algorithms' },
        { name: 'Keras', level: 85, description: 'Rapid prototyping and model building' },
        { name: 'OpenCV', level: 87, description: 'Computer vision and image processing' },
        { name: 'Hugging Face', level: 83, description: 'NLP and transformer models' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: 'AWS', level: 85, description: 'EC2, S3, SageMaker, Lambda' },
        { name: 'Docker', level: 88, description: 'Containerization and deployment' },
        { name: 'Kubernetes', level: 80, description: 'Container orchestration' },
        { name: 'MLflow', level: 82, description: 'ML lifecycle management' },
        { name: 'Git/GitHub', level: 90, description: 'Version control and collaboration' },
        { name: 'CI/CD', level: 78, description: 'Automated testing and deployment' }
      ]
    },
    {
      name: 'Databases',
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'PostgreSQL', level: 85, description: 'Relational database design and optimization' },
        { name: 'MongoDB', level: 80, description: 'NoSQL document database' },
        { name: 'Redis', level: 75, description: 'In-memory data structure store' },
        { name: 'Elasticsearch', level: 72, description: 'Search and analytics engine' },
        { name: 'Neo4j', level: 68, description: 'Graph database for complex relationships' },
        { name: 'Apache Spark', level: 78, description: 'Big data processing and analytics' }
      ]
    },
    {
      name: 'Research & Theory',
      icon: <BookOpen className="w-6 h-6" />,
      skills: [
        { name: 'Deep Learning Theory', level: 90, description: 'Neural network architectures and optimization' },
        { name: 'Computer Vision', level: 88, description: 'Image processing and visual recognition' },
        { name: 'Natural Language Processing', level: 85, description: 'Text analysis and language models' },
        { name: 'Reinforcement Learning', level: 80, description: 'Agent-based learning systems' },
        { name: 'Statistical Analysis', level: 83, description: 'Hypothesis testing and data interpretation' },
        { name: 'Research Methodology', level: 87, description: 'Experimental design and publication' }
      ]
    },
    {
      name: 'Tools & Platforms',
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        { name: 'Jupyter/Colab', level: 92, description: 'Interactive development and experimentation' },
        { name: 'VS Code', level: 90, description: 'Primary development environment' },
        { name: 'Tableau', level: 78, description: 'Data visualization and business intelligence' },
        { name: 'Apache Airflow', level: 75, description: 'Workflow orchestration and scheduling' },
        { name: 'Streamlit', level: 85, description: 'Rapid ML app development' },
        { name: 'FastAPI', level: 82, description: 'High-performance API development' }
      ]
    }
  ];

  const activeSkills = skillCategories.find(cat => cat.name === activeCategory)?.skills || [];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and areas of expertise 
            developed through years of hands-on experience and continuous learning.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600 shadow-md'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              I believe in staying at the forefront of AI technology. I regularly participate in 
              online courses, attend conferences, and contribute to open-source projects to keep 
              my skills sharp and up-to-date.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">Multiple</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Learning Platforms</div>
            </div>
            <div className="text-center p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">6+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Major Projects</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-2">Active</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Open Source Contributions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard: React.FC<{ skill: any; index: number }> = ({ skill, index }) => {
  return (
    <div 
      className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {skill.name}
        </h3>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
          {skill.level}%
        </span>
      </div>
      
      <div className="mb-3">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-1000 ease-out"
            style={{ width: `${skill.level}%` }}
          />
        </div>
      </div>
      
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {skill.description}
      </p>
    </div>
  );
};

export default Skills;