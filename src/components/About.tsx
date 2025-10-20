export default function About() {
  return (
    <section className="mb-16 space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-orange-300">&gt;</span> About
        </h2>
        <p className="text-gray-500 italic text-xs mb-4">
          [ Backend, Algorithms, Cybersecurity ]
        </p>
      </div>

      <div className="space-y-5 text-sm">
        <p className="text-gray-300 leading-relaxed tracking-wide">
          20 y/o cs  cybersec undergrad. i build things—mostly with code.
        </p>

        <p className="text-gray-300 leading-relaxed tracking-wide">
          i like taking ideas and pushing them till they turn into something
          real. curious by default and problem solving is my jam.
        </p>

        <p className="text-gray-300 leading-relaxed tracking-wide">
          into linux distros, building websites, and random tinkering. also into
          books and movies.
        </p>
      </div>
    </section>
  );
}
