import marathonImage from "../../assets/Personal/marathon.png";

const Personal = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        Über mich
      </h2>

      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-gray-300 mb-6">
          Hallo! Ich bin Simon, ein Student im Bereich Informatik. Ich lebe in [Deine Stadt] und habe eine Leidenschaft für Webentwicklung und moderne Technologien.
        </p>

        <p className="text-lg text-gray-300 mb-10">
          Wenn ich nicht gerade code, suche ich den Ausgleich in Bewegung, Büchern und neuen Orten. Ich mag Projekte, die Neugier wecken und Routinen durchbrechen.
        </p>
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
            Mein erster Marathon – ein Meilenstein, der Disziplin und Fokus sichtbar macht.
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
