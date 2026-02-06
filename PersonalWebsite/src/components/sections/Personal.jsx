import marathonImage from "../../assets/Personal/marathon.png";
import tumLogo from "../../assets/Personal/tum.png";

const Personal = () => {
  const experiences = [
    {
      company: "DR. JOHANNES HEIDENHAIN GmbH",
      role: "AI Engineer",
      period: "Jul 2025 - Sep 2025",
      description: "Entwicklung einer React-basierten Web-App mit FastAPI Backend. Implementierung von RESTful APIs und PostgreSQL-Datenbankintegration.",
      technologies: ["React", "Python", "FastAPI", "PostgreSQL"]
    },
    {
      company: "DR. JOHANNES HEIDENHAIN GmbH",
      role: "Business Intelligence Praktikant",
      period: "Feb 2025 - Apr 2025",
      description: "Während meines Praktikums in der BI-Abteilung habe ich intensiv mit Microsoft SQL Server gearbeitet, um Daten zu analysieren und auszuwerten. Ich habe selbstständig Abfragen erstellt, Daten aufbereitet und Auswertungen für verschiedene Geschäftsprozesse durchgeführt. Darüber hinaus habe ich einen Prozess zur Automatisierung der Bereitstellung in Jenkins entwickelt. Dieses Skript erkennt Änderungen in einem Repository und überträgt die geänderten Dateien automatisch auf den entsprechenden Server. Dadurch konnte ich Prozesse effizienter gestalten und die Datenbereitstellung für das Team optimieren.",
      technologies: ["Python", "Microsoft SQL Server", "Jenkins"]
    },
    {
      company: "DR. JOHANNES HEIDENHAIN GmbH",
      role: "Enterprise Architecture Management Praktikant",
      period: "Aug 2024 - Okt 2024",
      description: "Während meines Praktikums habe ich die aktuelle Darstellung der tatsächlichen und angestrebten Entwicklungen im EAM-Tool analysiert. Zunächst habe ich die bestehende Verwendung von Fähigkeiten sowohl als Entitäten als auch als Attribute identifiziert. Darauf aufbauend habe ich eine neue Darstellung entworfen, die die Fähigkeitsentität und intelligentes Business Mapping nutzt, um beide Entwicklungen genau abzubilden. Schließlich entwickelte ich ein detailliertes Migrationskonzept, das die Übertragung bestehender Daten in das neue Modell beschreibt und dabei die Notwendigkeit berücksichtigt, die Datenintegrität und -konsistenz während der Migration sicherzustellen. Die praktische Umsetzung und Lösung der Aufgabe erfolgte durch die Entwicklung von Python-Skripten, die zum Erstellen und Ändern von Excel-Tabellen verwendet wurden.",
      technologies: ["Python", "LUY"]
    }
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Über mich
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
                Wirtschaftsinformatik (B.Sc.)
              </h3>
              <p className="text-lg text-blue-300 mb-2">
                Technische Universität München
              </p>
              <p className="text-gray-300">
                3. Semester • Schwerpunkt: Software Engineering & Data Science
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mb-12">
        <p className="text-lg text-gray-300 mb-6">
          Hallo! Ich bin Simon, ein Wirtschaftsinformatik-Student an der TUM mit einer Leidenschaft für moderne Softwareentwicklung und innovative Technologien.
        </p>

        <p className="text-lg text-gray-300 mb-10">
          Wenn ich nicht gerade code, suche ich den Ausgleich in Bewegung, Büchern und neuen Orten. Ich mag Projekte, die Neugier wecken und Routinen durchbrechen.
        </p>
      </div>

      {/* Praxiserfahrung Timeline */}
      <div className="max-w-5xl mx-auto mb-16">
        <h3 className="text-2xl font-bold text-white mb-10 text-center">
          Praxiserfahrung
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
            alt="Marathon-Finisher-Moment"
            className="w-full h-64 object-contain bg-white"
            loading="lazy"
          />
          <figcaption className="px-6 py-4 text-sm text-gray-300">
            Mein erster (offizieller) Marathon – Ein persönlicher Meilenstein
          </figcaption>
        </figure>

        <div className="space-y-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <h3 className="text-xl font-semibold text-white mb-2">Freizeit & Energiequellen</h3>
            <p className="text-gray-300">
              Ausdauer gibt mir Struktur: Ich bin bereits einen Marathon gelaufen und trainiere aktuell für einen Ironman. Für den Kopf liebe ich ruhige Leseabende und fürs Herz das Unterwegssein – neue Städte, neue Perspektiven, neue Ideen.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">Sport</p>
              <p className="text-white font-medium">Marathon-Finisher</p>
              <p className="text-gray-300 text-sm">Ziel erreicht, Blick nach vorn.</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">Nächstes Ziel</p>
              <p className="text-white font-medium">Ironman-Training</p>
              <p className="text-gray-300 text-sm">Konstanz schlägt Motivation.</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">Lesen</p>
              <p className="text-white font-medium">Sachbücher & Sci‑Fi</p>
              <p className="text-gray-300 text-sm">Ideen, die hängen bleiben.</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm uppercase tracking-wide text-gray-400">Reisen</p>
              <p className="text-white font-medium">City‑Trips & Natur</p>
              <p className="text-gray-300 text-sm">Zwischen Karte und Zufall.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto text-center mt-12">
        <p className="text-lg text-gray-300">
          Wenn du mehr über meine Projekte erfahren möchtest oder einfach nur plaudern willst, schau dich gerne auf meiner Website um oder kontaktiere mich!
        </p>
      </div>
    </section>
  );
};

export default Personal;
