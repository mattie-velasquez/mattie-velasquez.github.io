import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projectList } from "@/components/Data";

export const metadata = {
  title: "Portfolio - Projects",
  description: "The projects page of my portfolio.",
};

export default function Projects() {
  return (
    <div className="flex flex-col pt-6 px-6 lg:px-36 pb-16 gap-6">
      <div className="flx flex-col gap-6">
        <h1 className="text-zinc-800 dark:text-zinc-100 text-5xl leading-12 font-bold mb-4">
          Welcome to my collection of projects. Please enjoy.
        </h1>
        <p className="text-zinc-600 dark:text-zinc400 leading-7">
          Here you will find a collection of projects that I have worked on, including this website. Some are personal projects, some are professional projects, and some are projects that I have worked on with others. I hope you enjoy looking through them.
        </p>
      </div>
      <ProjectCard projects={projectList} />
    </div>
  );
}
