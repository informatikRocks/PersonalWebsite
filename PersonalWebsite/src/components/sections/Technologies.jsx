import reactLogo from '../../assets/technologies/react.svg';
import pythonLogo from '../../assets/technologies/python.png';
import javaLogo from '../../assets/technologies/java.jpg';
import swiftLogo from '../../assets/technologies/swift.png';
import pytorchLogo from '../../assets/technologies/pytorch.png';
import fastapiLogo from '../../assets/technologies/fastapi.jpg';
import dockerLogo from '../../assets/technologies/docker.png';
import tailwind from  '../../assets/technologies/tailwind.png';
import spring from '../../assets/technologies/spring.png';
import gitlogo from '../../assets/technologies/git.png';
import langchain from '../../assets/technologies/langchain.png';

const Technologies = () => {
  const technologies = [
    {
      name: 'React',
      logo: reactLogo,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'Python',
      logo: pythonLogo,
      color: 'from-blue-400 to-yellow-400'
    },
    {
      name: 'Java',
      logo: javaLogo,
      color: 'from-red-600 to-orange-500'
    },
    {
      name: 'Swift',
      logo: swiftLogo,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'PyTorch',
      logo: pytorchLogo,
      color: 'from-orange-600 to-red-600'
    },
    {
        name: 'Docker',
        logo: dockerLogo,
        color: 'from-blue-500 to-blue-700'
    },
    {
      name: 'FastAPI',
      logo: fastapiLogo,
      color: 'from-teal-500 to-green-500'
    },
     {
      name: 'Tailwind CSS',
      logo: tailwind,
      color: 'from-blue-400 to-cyan-400'
    },
    {
      name: 'Spring Boot',
      logo: spring,
      color: 'from-green-600 to-green-800'
    },
    {
      name: 'Git',
      logo: gitlogo,
      color: 'from-red-500 to-red-700'
    },
    {
      name: 'LangChain',
      logo: langchain,
      color: 'from-purple-500 to-indigo-700'
    }
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Technologien
      </h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center justify-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <div className="mb-3 w-16 h-16 flex items-center justify-center bg-white">
              <img 
                src={tech.logo} 
                alt={`${tech.name} Logo`}
                className="w-full h-full object-contain"
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            <p className="text-sm font-medium text-gray-700 text-center">
              {tech.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
