import reactLogo from '../../assets/react.svg';
import pythonLogo from '../../assets/python.png';
import javaLogo from '../../assets/java.png';
import swiftLogo from '../../assets/swift.png';
import pytorchLogo from '../../assets/pytorch.jpeg';
import fastapiLogo from '../../assets/fastapi.jpg';
import dockerLogo from '../../assets/docker.png';

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
            <div className="mb-3 w-16 h-16 flex items-center justify-center">
              <img 
                src={tech.logo} 
                alt={`${tech.name} Logo`}
                className="w-full h-full object-contain"
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
