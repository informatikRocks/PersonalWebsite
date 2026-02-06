import { useState } from 'react';
import ProjectModal from '../ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Standardmäßig 4 Projekte anzeigen
  const initialProjectCount = 4;
  const [visibleProjects, setVisibleProjects] = useState(initialProjectCount);
  const [animatingProjects, setAnimatingProjects] = useState(new Set());

  const projects = [
    {
      title: 'Personal iOS Macos Personal Assistant coined by J.A.R.V.I.S.',
      description: 'Ein persönlicher KI-Assistent für iOS und macOS, inspiriert von J.A.R.V.I.S. aus Iron Man, der die besondere Fusion Graph technology umsetzt',
      extendedDescription: 'Diese E-Commerce-Plattform bietet eine komplette Lösung für Online-Shops mit modernem Design, responsivem Layout und optimierter Performance. Die Integration von Stripe ermöglicht sichere Zahlungsabwicklung.',
      technologies: ["Python", "Swift", "Kubernetes", "Docker", "ChromaDB"],
      github: 'https://github.com/username/ecommerce',
      demo: 'https://demo-ecommerce.com',
      image: '/images/projects/ecommerce.jpg',
      color: 'from-blue-500 to-purple-600',
      features: [
        'Produktkatalog mit Filteroptionen',
        'Warenkorb-Funktionalität',
        'Stripe Zahlungsintegration',
        'Admin Dashboard'
      ]
    },
    {
      title: 'Neural-Network Portfolio Assistant',
      description: 'Ein intelligenter KI-Assistent, der Deep Learning nutzt, um Nutzeranfragen zu verstehen. Er kombiniert ein maßgeschneidertes PyTorch-Modell mit einem dynamischen JSON-Profilsystem.',
      extendedDescription: 'Dieser Chatbot nutzt ein "Feed-Forward Neural Network" mit drei Layern, um Absichten (Intents) in natürlicher Sprache zu klassifizieren. Statt auf statische Antworten zu setzen, entkoppelt das System NLP-Logik von Fakten: Die Antworten werden zur Laufzeit dynamisch aus einem JSON-Profil generiert. Das gesamte Backend wurde mit "uv" für maximale Performance entwickelt und vollständig dockerisiert.',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'NLTK', 'Docker', 'uv', "React", "Tailwind CSS"],
      github: 'https://github.com/informatikRocks/IntentChatBot',
      image: '/images/projects/chatbot-architecture.jpg',
      color: 'from-blue-600 to-indigo-700',
      features: [
        'Custom NLP Pipeline (Tokenisierung & Stemming)',
        'Deep Learning Intent-Klassifizierung',
        'Dynamisches Data-Response Mapping',
        'Production-ready Docker Deployment',
        'RESTful API Design'
      ]
    },
    {
      title: 'Sushi Pizza and Steak Identifier',
      description: 'Mobile-First Task Manager mit Drag & Drop, Kategorien und Erinnerungen. Entwickelt mit Swift für iOS.',
      extendedDescription: 'Eine native iOS-App für effizientes Task-Management mit intuitiver Bedienung und lokalem Daten-Caching. Optimiert für iPhone und iPad.',
      technologies: ["Python", "Pytorch", "FastAPI", "React", "Tailwind CSS"],
      github: 'https://github.com/username/task-manager',
      image: '/images/projects/task-manager.jpg',
      color: 'from-orange-500 to-red-600',
      features: [
        'Drag & Drop Interface',
        'Kategorien und Tags',
        'Push-Benachrichtigungen',
        'Offline-First mit CoreData'
      ]
    },
    {
      title: 'Docker DevOps Pipeline',
      description: 'Automatisierte CI/CD Pipeline mit Docker und Kubernetes. Deployment auf AWS mit automatischen Tests.',
      extendedDescription: 'Eine vollständig automatisierte DevOps-Lösung für schnelle und sichere Deployments. Integriert automatische Tests, Code-Qualitätsprüfungen und Container-Orchestrierung.',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      github: 'https://github.com/username/devops-pipeline',
      image: '/images/projects/devops-pipeline.jpg',
      color: 'from-cyan-500 to-blue-600',
      features: [
        'Automatisierte CI/CD Pipeline',
        'Container Orchestrierung',
        'AWS Cloud Deployment',
        'Automated Testing & Quality Gates'
      ]
    },
    // --- ZUSÄTZLICHES PROJEKT FÜR DEN TEST (Damit Button erscheint) ---
    {
      title: 'Erweiterter Projekt-Test',
      description: 'Ein zusätzliches Projekt, um die Mehr-Anzeigen-Funktion zu testen.',
      extendedDescription: 'Nur ein Platzhalter, damit mehr als 4 Elemente vorhanden sind.',
      technologies: ['React', 'Test'],
      github: '#',
      image: '/images/projects/placeholder.jpg',
      color: 'from-green-500 to-emerald-600',
      features: ['Button Test', 'Responsive Layout']
    }
  ];

  // Funktion: Mehr anzeigen (zeigt 4 weitere an)
  const showMoreProjects = () => {
    const currentVisible = visibleProjects;
    const newVisible = currentVisible + 4;
    
    // Markiere die neuen Projekte für Animation
    const newAnimatingProjects = new Set();
    for (let i = currentVisible; i < Math.min(newVisible, projects.length); i++) {
      newAnimatingProjects.add(i);
    }
    setAnimatingProjects(newAnimatingProjects);
    
    // Update sichtbare Projekte
    setVisibleProjects(newVisible);
    
    // Entferne Animation-State nach Abschluss
    setTimeout(() => {
      setAnimatingProjects(new Set());
    }, 600);
  };

  // Funktion: Weniger anzeigen (zurücksetzen auf 4 und hochscrollen)
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
        Projekte
      </h2>
      
      {/* Grid zeigt nur die Anzahl an, die in visibleProjects definiert ist */}
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

      {/* --- BUTTON STEUERUNG --- */}
      <div className="flex justify-center gap-4 mt-12">
        {/* Mehr anzeigen: Nur wenn es noch versteckte Projekte gibt */}
        {visibleProjects < projects.length && (
          <button
            onClick={showMoreProjects}
            className="px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-full transition-colors duration-300 shadow-lg border border-gray-700"
          >
            Mehr anzeigen
          </button>
        )}

        {/* Weniger anzeigen: Nur wenn wir mehr als 4 sehen */}
        {visibleProjects > initialProjectCount && (
          <button
            onClick={showLessProjects}
            className="px-8 py-3 bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white font-semibold rounded-full transition-colors duration-300 border border-gray-600"
          >
            Weniger anzeigen
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