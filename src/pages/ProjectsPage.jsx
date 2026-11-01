import ProjectCard from "../components/ProjectCard.jsx";
import RepoGrid from "../components/RepoGrid.jsx";
import Section from "../components/Section.jsx";
import projects from "../data/projects.json";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-14 mt-8">
      <Section title="Project Highlights">
        <ul className="grid gap-5 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Section>

      <Section title="All GitHub Repositories">
        <RepoGrid />
      </Section>
    </div>
  );
}
