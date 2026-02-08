import { useState } from 'react';
import ProjectModal from '../ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Show 4 projects by default
  const initialProjectCount = 4;
  const [visibleProjects, setVisibleProjects] = useState(initialProjectCount);
  const [animatingProjects, setAnimatingProjects] = useState(new Set());

  const projects = [
    {
      title: 'Personal iOS & macOS Assistant (J.A.R.V.I.S. Inspired)',
      description: 'A personal AI assistant for iOS and macOS, inspired by J.A.R.V.I.S. from Iron Man, implementing unique fusion graph technology.',
      // NOTE: The German text described an E-Commerce shop here. I translated it, but you might want to write a description about the AI instead.
      extendedDescription: 'This platform offers a complete solution with modern design, responsive layout, and optimized performance. The integration of Stripe enables secure payment processing.', 
      technologies: ["Python", "Swift", "Kubernetes", "Docker", "ChromaDB"],
      github: 'https://github.com/username/ecommerce',
      demo: 'https://demo-ecommerce.com',
      image: '/images/projects/ecommerce.jpg',
      color: 'from-blue-500 to-purple-600',
      features: [
        'Product Catalog with Filters', // Adapted to match the description context
        'Shopping Cart Functionality',
        'Stripe Payment Integration',
        'Admin Dashboard'
      ]
    },
    {
      title: 'Empathic AI Assistant',
      description: 'An AI chatbot with emotional intelligence. It utilizes a multi-model architecture (PyTorch) to not only understand the content of user queries but also analyze sentiment and respond empathically.',
      extendedDescription: 'This project demonstrates an advanced NLP pipeline developed entirely from scratch in PyTorch. The system orchestrates two parallel neural networks: 1. An Intent Classifier determines the user\'s goal. 2. A Sentiment Analyzer evaluates emotional coloring (Positive/Negative). A central logic layer (Inference Engine) fuses these results to dynamically generate context-sensitive and empathic responses from a JSON profile. The backend is high-performance, built with "uv" and fully deployable via Docker.',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'NLTK', 'Docker', 'uv', 'React', 'Tailwind CSS'],
      github: 'https://github.com/informatikRocks/IntentChatBot',
      image: '/images/projects/chatbot-architecture.jpg',
      color: 'from-purple-600 to-indigo-700',
      features: [
        'Dual-Model Architecture (Intent & Sentiment)',
        'Custom Feed-Forward Neural Networks',
        'Context-Aware Response Generation',
        'High-Performance Backend (uv & FastAPI)',
        'Full Docker Containerization'
      ]
    },
    {
      title: 'Sushi, Pizza and Steak Identifier', // NOTE: Title implies Food AI, description says Task Manager. Kept description as is.
      description: 'Mobile-first task manager with drag & drop, categories, and reminders. Developed with Swift for iOS.',
      extendedDescription: 'A native iOS app for efficient task management with intuitive usability and local data caching. Optimized for iPhone and iPad.',
      technologies: ["Python", "Pytorch", "FastAPI", "React", "Tailwind CSS"],
      github: 'https://github.com/username/task-manager',
      image: '/images/projects/task-manager.jpg',
      color: 'from-orange-500 to-red-600',
      features: [
        'Drag & Drop Interface',
        'Categories and Tags',
        'Push Notifications',
        'Offline-First with CoreData'
      ]
    },
    {
      title: 'Automated Org-Chart Generator',
      description: 'Python tool for visualizing company structures. Generates editable PowerPoint slides directly from text descriptions.',
      extendedDescription: 'Development of a Python solution that converts textual hierarchy data into visual organizational charts. A key feature is the custom-engineered XML logic that creates "real" connector arrows in PowerPoint, ensuring connections remain intact when elements are moved.',
      technologies: ['Python', 'XML', 'PowerPoint API', 'Data Parsing'],
      github: 'https://github.com/username/company-structure-viz',
      image: '/images/projects/company-viz.jpg',
      color: 'from-emerald-500 to-green-600',
      features: [
        'Text-to-Visual Conversion',
        'Custom XML Connector Logic',
        'Automated PowerPoint Export',
        'Dynamic Structure Visualization'
      ]
    },
    {
      title: 'Web-Based Organ Control',
      description: 'Hardware-software interface for controlling a self-built organ via Raspberry Pi.',
      extendedDescription: 'A 6-month practical project: A Raspberry Pi hosts a PHP/Apache interface acting as a bridge. It enables seamless real-time communication between a digital web interface/keyboard and the physical mechanics of the organ.',
      technologies: ['PHP', 'Apache', 'Raspberry Pi'],
      github: '', 
      image: '/images/projects/organ-control.jpg',
      color: 'from-purple-500 to-indigo-600',
      features: [
        'Real-time Hardware Control',
        'Embedded Webserver',
        'Physical Signal Processing',
        'Raspberry Pi Integration'
      ]
    },
    {
      title: 'IoT Weather Station Server',
      description: 'Backend development for climate data as part of the MINT Academy Berchtesgaden.',
      extendedDescription: 'Development of a robust server within a 5-day sprint phase. The software receives and processes sensor data via the MQTT protocol and serves as the interface between hardware sensors and data storage.',
      technologies: ['Java', 'Eclipse Mosquitto', 'IoT'],
      github: '',
      image: '/images/projects/weather-station.jpg',
      color: 'from-orange-500 to-amber-600',
      features: [
        'MQTT Message Broker',
        'Java Backend Logic',
        'Rapid Prototyping (5 Days)',
        'Sensor Data Processing'
      ]
    },
  
    // --- ADDITIONAL PROJECT FOR TESTING (To make button appear) ---
    {
      title: 'Business Resource Manager',
      description: 'Comprehensive Java application for corporate management, inventory control, and personnel time tracking.',
      extendedDescription: 'A complete ERP (Enterprise Resource Planning) system developed in Java. The software offers a secure login system for various user roles. The core feature is intelligent inventory management: The system monitors stock in real-time and sends automatic notifications when items run low and need reordering. Additionally, a digital punch-clock system is integrated for employees to record their working hours.',
      technologies: ['Java'],
      github: '#', // Don't forget to add your real GitHub link here!
      image: '/images/projects/java-erp.jpg',
      color: 'from-blue-600 to-indigo-700',
      features: [
        'Secure Login System',
        'Automatic Stock Warnings',
        'Time Tracking (Punch Clock)',
        'Real-Time Inventory Overview'
      ]
    }
  ];

  // Function: Show More (reveals 4 more)
  const showMoreProjects = () => {
    const currentVisible = visibleProjects;
    const newVisible = currentVisible + 4;
    
    // Mark new projects for animation
    const newAnimatingProjects = new Set();
    for (let i = currentVisible; i < Math.min(newVisible, projects.length); i++) {
      newAnimatingProjects.add(i);
    }
    setAnimatingProjects(newAnimatingProjects);
    
    // Update visible projects
    setVisibleProjects(newVisible);
    
    // Remove animation state after completion
    setTimeout(() => {
      setAnimatingProjects(new Set());
    }, 600);
  };

  // Function: Show Less (reset to 4 and scroll up)
  const showLessProjects = () => {
    setVisibleProjects(initialProjectCount);
    setAnimatingProjects(new Set());
    const section = document.getElementById('projects-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects-section" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Projects
      </h2>
      
      {/* Grid only shows the number defined in visibleProjects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className={`group relative bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
              animatingProjects.has(index) ? 'animate-fade-in-up' : ''
            }`}
            style={animatingProjects.has(index) ? { 
              animationDelay: `${(index % 4) * 100}ms` 
            } : {}}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            
            <div className="p-6 relative">
              <h3 className="text-2xl font-bold text-white mb-3">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-gray-700 text-gray-200 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span className="text-sm font-medium">Code</span>
                </a>
                
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- BUTTON CONTROL --- */}
      <div className="flex justify-center gap-4 mt-12">
        {/* Show More: Only if there are hidden projects */}
        {visibleProjects < projects.length && (
          <button
            onClick={showMoreProjects}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg border border-gray-700"
          >
            Show More
          </button>
        )}

        {/* Show Less: Only if we are seeing more than 4 */}
        {visibleProjects > initialProjectCount && (
          <button
            onClick={showLessProjects}
            className="px-8 py-3 bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white font-semibold rounded-full transition-colors duration-300 border border-gray-600"
          >
            Show Less
          </button>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;