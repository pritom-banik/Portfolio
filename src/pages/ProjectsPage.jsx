import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.json";

export default function ProjectsPage() {
  return (
    <section aria-label="Projects" className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
}
