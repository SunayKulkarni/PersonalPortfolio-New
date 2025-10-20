const experience = [
  {
    title: "Capture The Flag Competitions",
    position: "Participant",
    date: "(2024 - Present)",
    description:
      "Solved cybersecurity challenges in online CTF competitions, gaining hands-on experience in cryptography, reverse engineering, and web security.",
  },
  {
    title: "Hackathons",
    position: "Participant",
    date: "(2023 - Present)",
    description: (
      <>
        Participated in multiple hackathons, collaborating with teams to build innovative solutions under time constraints and experimenting with new technologies.
        <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm">
          <li>Smart India Hackathon (SIH)</li>
          <li>Intracollege Hackathons</li>
        </ul>
      </>
    ),
    link: "#",
  },
];

export default function Experience() {
  return (
    <div className="text-white mb-16">
      <h1 className="text-2xl font-bold text-white">
        <span className="text-orange-300">&gt;</span> Technical Activities
      </h1>
      <div className="mt-10">
        {experience.map((exp) => (
          <div key={exp.title} className="mt-10 group">
            <a
              href={exp.link}
              className="text-xl font-bold transition-all duration-300 ease-in-out group-hover:text-green-300"
            >
              {exp.title}
            </a>
            <p className="text-gray-500 text-xs mt-2">
              {exp.position} | {exp.date}
            </p>
            <div className="text-gray-400 mt-5 text-sm">{exp.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
