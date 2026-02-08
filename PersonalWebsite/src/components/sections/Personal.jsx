import marathonImage from "../../assets/Personal/marathon.png";
import tumLogo from "../../assets/Personal/tum.png";

const Personal = () => {
  const experiences = [
    {
      company: "DR. JOHANNES HEIDENHAIN GmbH",
      role: "AI Engineer",
      period: "Mar 2025 - Apr 2025",
      description: "Details to follow.", // Oder: "Upcoming role focused on Artificial Intelligence."
      technologies: ["TBD"] // TBD = To Be Determined
    },
    {
      company: "DR. JOHANNES HEIDENHAIN GmbH",
      role: "Business Intelligence Intern",
      period: "Sep 2025 - Oct 2025",
      description: "During my internship in the BI department, I worked intensively with Microsoft SQL Server to analyze and evaluate data. I independently created queries, processed data, and performed evaluations for various business processes. Furthermore, I developed a deployment automation process using Jenkins. This script detects changes in a repository and automatically transfers the modified files to the corresponding server, streamlining processes and optimizing data delivery for the team.",
      technologies: ["Python", "Microsoft SQL Server", "Jenkins"]
    },
    {
      company: "DR. JOHANNES HEIDENHAIN GmbH",
      role: "Enterprise Architecture Management Intern",
      period: "Mar 2025 - Apr 2025",
      description: "During this internship, I analyzed the current visualization of actual and target developments within the EAM tool. I identified the existing usage of capabilities as both entities and attributes. Based on this, I designed a new visualization utilizing the capability entity and intelligent business mapping to accurately represent both developments. Finally, I developed a detailed migration concept outlining the transfer of existing data to the new model, ensuring data integrity and consistency. The practical implementation was achieved by developing Python scripts to create and modify Excel spreadsheets.",
      technologies: ["Python", "LUY"]
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        About Me
      </h2>

      {/* Studium Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl border border-blue-500/20 p-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img 
                src={tumLogo} 
                alt="TUM Logo" 
                className="w-24 h-24 object-contain bg-white/10 rounded-xl p-3"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Information Systems (B.Sc.)
              </h3>
              <p className="text-lg text-blue-300 mb-2">
                Technical University of Munich
              </p>
              <p className="text-gray-300">
                3rd Semester • Focus: Software Engineering & Data Science
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-300 mb-6">
          Hi! I'm Simon, an Information Systems student at TUM with a passion for modern software development and innovative technologies.
        </p>

        <p className="text-lg text-gray-300 mb-10">
          When I'm not coding, I find balance in movement, books, and new places. I love projects that spark curiosity and break routines.
        </p>
      </div>

      {/* Praxiserfahrung Timeline */}
      <div className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-white mb-10 text-center">
          Professional Experience
        </h3>
        <div className="relative">
          {/* Vertikaler Strich */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 md:-translate-x-1/2"></div>
          
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className={`relative mb-12 md:grid md:grid-cols-2 md:gap-8 ${isLeft ? '' : 'md:grid-flow-dense'}`}>
                {/* Mobile & Tablet: Immer links ausgerichtet */}
                <div className="md:hidden ml-16">
                  <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <span className="text-sm text-blue-400 font-medium mb-2 block">{exp.period}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-gray-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop: Wechselndes Layout */}
                <div className={`hidden md:block ${isLeft ? 'text-right pr-8' : 'md:col-start-2 pl-8'}`}>
                  <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 p-6 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                    <span className="text-sm text-blue-400 font-medium mb-2 block">{exp.period}</span>
                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                    <p className="text-gray-400 font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-end' : 'justify-start'}`}>
                      {exp.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-300 rounded-full border border-blue-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Punkt auf der Timeline */}
                <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full md:-translate-x-1/2 ring-4 ring-gray-900 z-10"></div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <figure className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-lg">
          <img
            src={marathonImage}
            alt="Marathon Finisher Moment"
            className="w-full h-64 object-contain bg-white"
            loading="lazy"
          />
          <figcaption className="px-6 py-4 text-sm text-gray-300">
            My first (official) marathon – A personal milestone
          </figcaption>
        </figure>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <h3 className="text-xl font-semibold text-white mb-2">Hobbies & Passions</h3>
            <p className="text-gray-300">
              Endurance gives me structure: I have already run a marathon and am currently training for an Ironman. For my mind, I love quiet evenings with a book, and for my soul, being on the move – new cities, new perspectives, new ideas.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">Sports</p>
              <p className="text-white font-medium">Marathon Finisher</p>
              <p className="text-gray-300 text-sm">Goal achieved, eyes forward.</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">Next Goal</p>
              <p className="text-white font-medium">Ironman Training</p>
              <p className="text-gray-300 text-sm">Consistency beats motivation.</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">Reading</p>
              <p className="text-white font-medium">Non-fiction & Sci-Fi</p>
              <p className="text-gray-300 text-sm">Ideas that stick.</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">Travel</p>
              <p className="text-white font-medium">City Trips & Nature</p>
              <p className="text-gray-300 text-sm">Between maps and spontaneity.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-12">
        <p className="text-lg text-gray-300">
          If you want to learn more about my projects or just want to chat, feel free to look around my website or contact me!
        </p>
      </div>
    </section>
  );
};

export default Personal;