const experience = [
  {
    title: "Tenjiku Innovations Pvt. Ltd. (Minato)",
    position: "Full Stack Developer Intern",
    date: "June 2026 – Present",
    description: (
      <>
        Working on a multi-role PG rental platform with React Native/Expo mobile
        apps and a Node.js/Express/TypeScript/Prisma/PostgreSQL backend.
        <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm">
          <li>Built the Residents management page in the React/Ant Design admin console</li>
          <li>Fixed a React Query cache persistence bug causing data isolation across user sessions</li>
          <li>Added Prisma schema migrations for user login tracking</li>
          <li>Independently onboarded into a GitLab monorepo with 5+ services and raised structured bug reports within the first week</li>
        </ul>
      </>
    ),
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      <div className="space-y-8">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-6 bg-gray-900 shadow-md"
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3">
              <div>
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-blue-400">{exp.position}</p>
              </div>

              <span className="text-sm text-gray-400 mt-2 sm:mt-0">
                {exp.date}
              </span>
            </div>

            <div className="text-gray-300">{exp.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}