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
    title: "X-ray Analysis using CNN and Gradio Deployment",
    description: "Deep learning model for medical X-ray image analysis with an interactive web interface built using Gradio for easy deployment and user interaction.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "CNN", "Gradio", "Deep Learning", "Medical AI"],
    githubUrl: "https://github.com/Youssef-Ai1001/Xray-Analysis-using-CNN-and-gradio-deployment",
    category: "Medical AI"
  },
  {
    id: 2,
    title: "Data Visualization Project using Dash",
    description: "Interactive data visualization dashboard built with Plotly Dash, featuring dynamic charts, real-time data updates, and user-friendly interface for data exploration.",
    image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Dash", "Plotly", "Data Visualization", "Interactive UI"],
    githubUrl: "https://github.com/Youssef-Ai1001/Data-visualization-Project-using-Dash",
    category: "Data Science"
  },
  {
    id: 3,
    title: "Image Processing GUI Project",
    description: "Comprehensive image processing application with graphical user interface, implementing various computer vision algorithms and filters for image enhancement and analysis.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "OpenCV", "GUI", "Image Processing", "Computer Vision"],
    githubUrl: "https://github.com/Youssef-Ai1001/Image-Processing-GUI-Project",
    category: "Computer Vision"
  },
  {
    id: 4,
    title: "Speech Emotion Recognition (SER)",
    description: "Machine learning model for recognizing emotions from speech audio using advanced signal processing techniques and neural networks. Published on Kaggle with detailed analysis.",
    image: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Machine Learning", "Audio Processing", "Neural Networks", "Kaggle"],
    githubUrl: "https://www.kaggle.com/code/yousseftaha98/speech-emotion-recognition-ser",
    category: "Audio AI"
  },
  {
    id: 5,
    title: "Autonomous Car Simulation",
    description: "Advanced simulation environment for autonomous vehicle development, featuring realistic physics, sensor modeling, and AI-driven navigation algorithms.",
    image: "https://images.pexels.com/photos/8386761/pexels-photo-8386761.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "Simulation", "Autonomous Systems", "AI Navigation", "Physics Modeling"],
    liveUrl: "https://drive.google.com/file/d/1psnSKR-Z3EGGfC1BRDkLh7bfLZuurYRA/view?usp=drive_link&usp=embed_facebook",
    category: "Autonomous Systems"
  },
  {
    id: 6,
    title: "Maze Game with AI Search Strategies",
    description: "Interactive maze solving game implementing various AI search algorithms including A*, BFS, DFS, and heuristic-based pathfinding with visual demonstrations.",
    image: "https://images.pexels.com/photos/8849295/pexels-photo-8849295.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Python", "AI Search Algorithms", "Game Development", "Pathfinding", "Visualization"],
    githubUrl: "https://github.com/Youssef-Ai1001/Maze-Game-with-Ai-Search-strategies",
    category: "AI Algorithms"
  }
];