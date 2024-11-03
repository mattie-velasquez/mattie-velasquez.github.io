import Image from "next/image";


const ProjectCard = ({ projects = [] }) => {
  return (
    <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 justify-between">
      {projects.map((project, index) => (
        <div
          className="flex mx-auto flex-col max-w-[340px] w-full h-full project-card py-4 px-8 bg-white hover:bg-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 rounded-md gap-1"
          key={index}
        >
          <Image
            className="rounded-full p-2 border border-zinc-300 dark:border-zinc-700/40"
            width={48}
            height={48}
            src={project.logo}
            alt={`${project.name} logo`}
          />
          <div className="w-[276px] flex flex-col gap-4">
            <h2 className="leading-7 font-semibold text-zinc-800 dark:text-zinc-100">{project.name}</h2>
            <p className="w-[276px] font-inter text-sm line-clamp-3 leading-6 text-zinc-700 dark:text-zinc-400">
              {project.content}
            </p>
            <a
              className="mt-2 flex items-center justify-center px-4 py-2 hover:underline text-zinc-800 dark:text-zinc-300"
              href={project.link}
              target="_blank"
              rel="noreferrer"
              style={{ wordkBreak: "break-all" }}
            >
              {project.link}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ProjectCard;
