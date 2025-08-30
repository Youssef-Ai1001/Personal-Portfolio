import React, { useState } from 'react';
import { BookOpen, ExternalLink, Download, Calendar, Users, Award } from 'lucide-react';

interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'Conference' | 'Journal' | 'Workshop' | 'Preprint';
  abstract: string;
  keywords: string[];
  pdfUrl?: string;
  externalUrl?: string;
  citations: number;
  status: 'Published' | 'Accepted' | 'Under Review' | 'Preprint';
}

const Publications: React.FC = () => {
  const [selectedType, setSelectedType] = useState('All');
  
  const publications: Publication[] = [
    {
      id: 1,
      title: "Efficient Neural Architecture Search for Computer Vision Tasks",
      authors: ["Youssef Taha", "Dr. Sarah Johnson", "Prof. Michael Chen"],
      venue: "International Conference on Machine Learning (ICML)",
      year: 2024,
      type: 'Conference',
      abstract: "We propose a novel neural architecture search method that reduces computational cost by 70% while maintaining state-of-the-art performance on ImageNet classification tasks. Our approach leverages progressive search strategies and efficient performance estimation.",
      keywords: ["Neural Architecture Search", "Computer Vision", "Deep Learning", "Optimization"],
      pdfUrl: "#",
      externalUrl: "https://arxiv.org/abs/2024.example",
      citations: 23,
      status: 'Published'
    },
    {
      id: 2,
      title: "Federated Learning for Privacy-Preserving Medical Image Analysis",
      authors: ["Youssef Taha", "Dr. Emily Rodriguez", "Dr. James Wilson"],
      venue: "Nature Machine Intelligence",
      year: 2024,
      type: 'Journal',
      abstract: "This work presents a federated learning framework for medical image analysis that preserves patient privacy while achieving comparable performance to centralized approaches. We demonstrate effectiveness on chest X-ray and MRI datasets.",
      keywords: ["Federated Learning", "Medical AI", "Privacy", "Healthcare"],
      pdfUrl: "#",
      externalUrl: "https://nature.com/articles/example",
      citations: 45,
      status: 'Published'
    },
    {
      id: 3,
      title: "Transformer-Based Multi-Modal Learning for Autonomous Driving",
      authors: ["Youssef Taha", "Dr. Alex Kumar", "Prof. Lisa Zhang"],
      venue: "Conference on Computer Vision and Pattern Recognition (CVPR)",
      year: 2023,
      type: 'Conference',
      abstract: "We introduce a transformer architecture that effectively fuses visual, LiDAR, and textual information for autonomous driving tasks. Our model achieves new state-of-the-art results on the nuScenes dataset.",
      keywords: ["Autonomous Driving", "Multi-Modal Learning", "Transformers", "Computer Vision"],
      pdfUrl: "#",
      externalUrl: "https://openaccess.thecvf.com/example",
      citations: 67,
      status: 'Published'
    },
  ];

  const types = ['All', ...Array.from(new Set(publications.map(p => p.type)))];
  const filteredPublications = selectedType === 'All' 
    ? publications 
    : publications.filter(pub => pub.type === selectedType);

  return (
    <section id="publications" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Publications & Research
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My research contributions to the field of artificial intelligence, machine learning, 
            and computer science, published in top-tier venues and conferences.
          </p>
        </div>

        {/* Research Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 text-center">
            <BookOpen className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">6+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
          </div>
          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-6 text-center">
            <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
              Active
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">GitHub Profile</div>
          </div>
          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6 text-center">
            <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">Multiple</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Platforms</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-6 text-center">
            <Calendar className="w-8 h-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">2024</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Latest Work</div>
          </div>
        </div>

        {/* Type Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedType === type
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-600'
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Publications List */}
        <div className="space-y-8">
          {filteredPublications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </div>

        {/* Research Interests */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-blue-900 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Current Research Interests
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Efficient AI</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Developing lightweight models for edge computing and mobile applications
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Trustworthy AI</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Building interpretable and fair AI systems for critical applications
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Multi-Modal Learning</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Integrating vision, language, and other modalities for comprehensive AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PublicationCard: React.FC<{ publication: Publication }> = ({ publication }) => {
  const [showAbstract, setShowAbstract] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Accepted': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Under Review': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'Preprint': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Conference': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Journal': return 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200';
      case 'Workshop': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'Preprint': return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
      {/* Header */}
      <div className="flex flex-wrap items-start justify-between mb-4">
        <div className="flex-1 min-w-0 mr-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
            {publication.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            {publication.authors.join(', ')}
          </p>
          <p className="text-blue-600 dark:text-blue-400 font-medium">
            {publication.venue} ({publication.year})
          </p>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(publication.status)}`}>
            {publication.status}
          </span>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(publication.type)}`}>
            {publication.type}
          </span>
        </div>
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap gap-2 mb-4">
        {publication.keywords.map((keyword) => (
          <span
            key={keyword}
            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
          >
            {keyword}
          </span>
        ))}
      </div>

      {/* Abstract Toggle */}
      <button
        onClick={() => setShowAbstract(!showAbstract)}
        className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium mb-4"
      >
        {showAbstract ? 'Hide Abstract' : 'Show Abstract'}
      </button>

      {/* Abstract */}
      {showAbstract && (
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {publication.abstract}
          </p>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Citations: {publication.citations}
        </div>
        <div className="flex space-x-3">
          {publication.pdfUrl && (
            <a
              href={publication.pdfUrl}
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Download className="w-4 h-4 mr-1" />
              PDF
            </a>
          )}
          {publication.externalUrl && (
            <a
              href={publication.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              View
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Publications;