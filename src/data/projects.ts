export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Neural Network Optimizer",
    description: "Advanced deep learning model optimization framework using PyTorch and TensorFlow. Implements novel architectures for computer vision tasks.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "PyTorch", "TensorFlow", "CUDA"],
    githubUrl: "https://github.com/Youssef-Ai1001/neural-optimizer",
    liveUrl: "https://neural-optimizer-demo.com",
    category: "Deep Learning"
  },
  {
    id: 2,
    title: "Smart Recommendation System",
    description: "Machine learning-powered recommendation engine with collaborative filtering and content-based algorithms. Deployed on AWS with real-time predictions.",
    image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Scikit-learn", "AWS", "Docker", "FastAPI"],
    githubUrl: "https://github.com/Youssef-Ai1001/recommendation-system",
    category: "Machine Learning"
  },
  {
    id: 3,
    title: "Computer Vision Pipeline",
    description: "End-to-end computer vision solution for object detection and classification using YOLO and ResNet architectures.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "OpenCV", "YOLO", "ResNet", "Flask"],
    githubUrl: "https://github.com/Youssef-Ai1001/cv-pipeline",
    liveUrl: "https://cv-demo.yousseftaha.com",
    category: "Computer Vision"
  },
  {
    id: 4,
    title: "NLP Text Analyzer",
    description: "Natural language processing tool for sentiment analysis, entity recognition, and text classification using transformer models.",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Transformers", "spaCy", "Hugging Face", "React"],
    githubUrl: "https://github.com/Youssef-Ai1001/nlp-analyzer",
    liveUrl: "https://nlp-analyzer.yousseftaha.com",
    category: "NLP"
  },
  {
    id: 5,
    title: "AI Chatbot Framework",
    description: "Intelligent conversational AI system with context awareness and multi-turn dialog capabilities using GPT and custom training.",
    image: "https://images.pexels.com/photos/8386761/pexels-photo-8386761.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "OpenAI API", "Langchain", "MongoDB", "WebSockets"],
    githubUrl: "https://github.com/Youssef-Ai1001/ai-chatbot",
    category: "Conversational AI"
  },
  {
    id: 6,
    title: "Data Science Dashboard",
    description: "Interactive dashboard for data visualization and machine learning model monitoring with real-time metrics and performance tracking.",
    image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Streamlit", "Plotly", "Pandas", "MLflow"],
    githubUrl: "https://github.com/Youssef-Ai1001/ml-dashboard",
    liveUrl: "https://dashboard.yousseftaha.com",
    category: "Data Science"
  }
];