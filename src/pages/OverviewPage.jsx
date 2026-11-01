import { Link } from "react-router";
import ProjectCard from "../components/ProjectCard.jsx";
import profile from "../data/profile.json";
import techStack from "../data/tech-stack.json";
import projects from "../data/projects.json";
import academics from "../data/academics.json";
import { buttonClass } from "../components/buttons.js";

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-14 mt-8">
      <Section title="About Me">
        <p className="text-lg leading-relaxed text-gray-300">{profile.about}</p>
      </Section>

      <Section title="Tech Skills">
        <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-[max-content_1fr]">
          {techStack.map(({ category, items }) => (
            <div key={category} className="contents">
              <dt className="text-sm font-semibold uppercase tracking-wider text-gray-400 sm:pt-1.5">{category}</dt>
              <dd className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg text-sm text-gray-200 bg-gray-800 border border-gray-700 hover:text-white hover:border-white transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
         
      </Section>
      <Teaser to="/skills" cta="Visit Skills">
          Curious about my problem-solving skills and competitive programming journey?
        </Teaser>

      <Section title="Featured Projects">
        <ul className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/projects"
            className={buttonClass("secondary")}
          >
            Explore all my repos &rarr;
          </Link>
        </div>
      </Section>

      <Section title="Education">
        <ol className="relative border-l border-gray-700 ml-1 space-y-8">
          {academics.map(({ degree, detail, institution, location, period }) => (
            <li key={degree} className="pl-6 relative">
              <span
                className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-white"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-gray-400">{period}</p>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {degree}
                {detail && <span className="font-normal text-gray-400"> ({detail})</span>}
              </h3>
              <p className="text-gray-300">
                {institution} — {location}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      <div className="grid gap-4 sm:grid-cols-2">
       
        <Teaser to="/beyond-work" cta="Visit Beyond Work">
          Want to explore my achievements, leadership experiences, and extracurricular activities?
        </Teaser>
      </div>
    </div>
  );
}

function Section({ title, children }) {
  return (
    <section aria-label={title}>
      <h2 className="flex items-baseline gap-3 text-2xl font-bold text-white mb-5">
        {title}
        <span className="flex-1 h-px self-center bg-gray-700" aria-hidden="true" />
      </h2>
      {children}
    </section>
  );
}

function Teaser({ to, cta, children }) {
  return (
    <Link
      to={to}
      className="group block rounded-lg p-5 bg-black border border-gray-700 shadow-lg hover:border-white transition-colors duration-300"
    >
      <p className="text-gray-200">{children}</p>
      <span className={`mt-4 ${buttonClass("secondary", "sm")}`}>
        {cta}
      </span>
    </Link>
  );
}
