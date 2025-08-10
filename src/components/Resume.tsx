import React from 'react';
import { Download, MapPin, Mail, Phone, Calendar, Award, Briefcase, GraduationCap, Code } from 'lucide-react';

const Resume: React.FC = () => {
  const downloadCV = () => {
    // In a real application, this would trigger a download of the actual PDF
    alert('CV download would start here. Please add your actual CV file to the public folder and link it here.');
  };

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Resume
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            Experienced AI Engineer with a passion for developing innovative machine learning solutions.
          </p>
          <button
            onClick={downloadCV}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <Download className="w-5 h-5 mr-2" />
            Download PDF
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info & Skills */}
          <div className="lg:col-span-1">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">youssef@email.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
              <div className="space-y-4">
                {skillCategories.map((category) => (
                  <div key={category.name}>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                      {category.name}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="lg:col-span-2">
            {/* Professional Experience */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
                Professional Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <ExperienceItem key={index} experience={exp} />
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <EducationItem key={index} education={edu} />
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <Award className="w-6 h-6 mr-2 text-blue-600" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                      {cert.name}
                    </h4>
                    <p className="text-blue-600 dark:text-blue-400">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceItem: React.FC<{ experience: any }> = ({ experience }) => {
  return (
    <div className="border-l-4 border-blue-600 pl-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {experience.position}
        </h4>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-1" />
          {experience.duration}
        </div>
      </div>
      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
        {experience.company} • {experience.location}
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-3">
        {experience.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {experience.technologies.map((tech: string) => (
          <span
            key={tech}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const EducationItem: React.FC<{ education: any }> = ({ education }) => {
  return (
    <div className="border-l-4 border-green-500 pl-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          {education.degree}
        </h4>
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4 mr-1" />
          {education.year}
        </div>
      </div>
      <p className="text-green-600 dark:text-green-400 font-medium mb-2">
        {education.school} • {education.location}
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        {education.description}
      </p>
    </div>
  );
};

// Sample data
const skillCategories = [
  {
    name: "Programming",
    skills: ["Python", "JavaScript", "TypeScript", "C++", "SQL"]
  },
  {
    name: "AI/ML",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Keras", "OpenCV"]
  },
  {
    name: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "MLflow", "Git"]
  },
  {
    name: "Web Development",
    skills: ["React", "Node.js", "FastAPI", "MongoDB", "PostgreSQL"]
  }
];

const experiences = [
  {
    position: "Senior AI Engineer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    duration: "2022 - Present",
    description: "Leading development of advanced machine learning models for computer vision applications. Architected and deployed scalable ML pipelines processing millions of images daily.",
    technologies: ["Python", "PyTorch", "AWS", "Docker", "Kubernetes", "MLflow"]
  },
  {
    position: "Machine Learning Engineer",
    company: "DataTech Solutions",
    location: "San Francisco, CA",
    duration: "2020 - 2022",
    description: "Developed recommendation systems and NLP models for e-commerce platform. Improved user engagement by 35% through personalized content delivery.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Apache Spark", "MongoDB"]
  },
  {
    position: "AI Research Intern",
    company: "AI Research Lab",
    location: "Berkeley, CA",
    duration: "2019 - 2020",
    description: "Conducted research on deep reinforcement learning algorithms. Published 2 papers in top-tier conferences and contributed to open-source ML frameworks.",
    technologies: ["Python", "PyTorch", "OpenAI Gym", "Jupyter", "Git"]
  }
];

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    year: "2019 - 2021",
    description: "Specialized in Artificial Intelligence and Machine Learning. Thesis on 'Novel Architectures for Few-Shot Learning in Computer Vision'."
  },
  {
    degree: "Bachelor of Science in Computer Engineering",
    school: "UC Berkeley",
    location: "Berkeley, CA",
    year: "2015 - 2019",
    description: "Graduated Magna Cum Laude. Focus on algorithms, data structures, and software engineering principles."
  }
];

const certifications = [
  {
    name: "AWS Certified Machine Learning - Specialty",
    issuer: "Amazon Web Services",
    date: "2023"
  },
  {
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI (Coursera)",
    date: "2022"
  },
  {
    name: "TensorFlow Developer Certificate",
    issuer: "TensorFlow",
    date: "2021"
  }
];

export default Resume;