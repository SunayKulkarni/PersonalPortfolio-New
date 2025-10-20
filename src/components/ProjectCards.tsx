import { projectList } from "./Projects";

export function ProjectCards() {
  return (
    <div className="text-white my-10">
      {projectList.map((project) => (
        <div
          key={project.title}
          className="mt-5 border border-zinc-800 hover:border-green-300 transition-all duration-500 ease-in-out p-10 group"
        >
          <a
            href={project.link}
            className="transition-all duration-300 ease-in-out group-hover:text-green-300"
          >
            {project.gif && (
              <img
                src={project.gif}
                alt={`${project.title} preview`}
                className="rounded-lg mb-5 w-full h-auto object-cover"
              />
            )}

            <p className="text-xl font-bold">{project.title}</p>

            <p className="text-gray-400 text-sm mt-5">{project.description}</p>

            <p className="text-sm text-gray-500 mt-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="mr-2">
                  * {tech}
                </span>
              ))}
            </p>
          </a>
        </div>
      ))}
    </div>
  );
}
