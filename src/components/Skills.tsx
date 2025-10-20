

export default function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "Java",
    "Python",
    "Node.js",
    "React",
    "Next.js",
    "PostgresSQL",
    "MongoDB",
    "Git",
    "Docker",
    "Linux",
  ];

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8">
        <span className="text-orange-300">&gt;</span> Skills
      </h2>
      <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="bg-zinc-800 text-gray-300 px-4 py-2 rounded-md text-center text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
