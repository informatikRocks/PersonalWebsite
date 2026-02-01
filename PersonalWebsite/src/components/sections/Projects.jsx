const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Eine vollständige E-Commerce-Plattform mit React, Node.js und MongoDB. Features: Produktkatalog, Warenkorb, Zahlungsintegration.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/username/ecommerce',
      demo: 'https://demo-ecommerce.com',
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'AI Chat Bot',
      description: 'Intelligenter Chatbot mit Natural Language Processing. Nutzt PyTorch für Machine Learning und FastAPI als Backend.',
      technologies: ['Python', 'PyTorch', 'FastAPI', 'React'],
      github: 'https://github.com/username/ai-chatbot',
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'Task Management App',
      description: 'Mobile-First Task Manager mit Drag & Drop, Kategorien und Erinnerungen. Entwickelt mit Swift für iOS.',
      technologies: ['Swift', 'SwiftUI', 'CoreData'],
      github: 'https://github.com/username/task-manager',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Docker DevOps Pipeline',
      description: 'Automatisierte CI/CD Pipeline mit Docker und Kubernetes. Deployment auf AWS mit automatischen Tests.',
      technologies: ['Docker', 'Kubernetes', 'AWS', 'Jenkins'],
      github: 'https://github.com/username/devops-pipeline',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Projekte
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
    </section>
  );
};

export default Projects;