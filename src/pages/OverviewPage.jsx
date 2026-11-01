import { Link } from "react-router";
import { LinkIcon } from "../components/icons.jsx";
import profile from "../data/profile.json";
import techStack from "../data/tech-stack.json";
import pinnedRepos from "../data/pinned-repos.json";
import academics from "../data/academics.json";

/** GitHub's colours for the languages used by the pinned repositories. */
const LANGUAGE_COLORS = {
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  "C++": "#f34b7d",
  GDScript: "#355570",
  Python: "#3572A5",
};

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-14 mt-8">
      <Section title="About Me" kicker="01">
        <p className="text-lg leading-relaxed text-gray-300">{profile.about}</p>
      </Section>

      <Section title="Tech Skills" kicker="02">
        <dl className="grid gap-x-6 gap-y-4 sm:grid-cols-[max-content_1fr]">
          {techStack.map(({ category, items }) => (
            <div key={category} className="contents">
              <dt className="text-sm font-semibold uppercase tracking-wider text-sky-300 sm:pt-1.5">{category}</dt>
              <dd className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm text-gray-100 bg-white/5 border border-white/10 hover:border-sky-400/60 hover:bg-sky-400/10 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="Featured Projects" kicker="03">
        <ul className="grid gap-4 sm:grid-cols-2">
          {pinnedRepos.map((repo) => (
            <li key={repo.name}>
              <RepoCard repo={repo} />
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={`${profile.githubUrl}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold hover:brightness-110 transition duration-300"
          >
            Explore all my repos &rarr;
          </a>
          <Link
            to="/projects"
            className="px-5 py-2 rounded-full border border-white/20 text-gray-100 font-semibold hover:bg-white/10 transition duration-300"
          >
            Check out the Projects tab
          </Link>
        </div>
      </Section>

      <Section title="Education" kicker="04">
        <ol className="relative border-l border-white/15 ml-1 space-y-8">
          {academics.map(({ degree, detail, institution, location, period }) => (
            <li key={degree} className="pl-6 relative">
              <span
                className="absolute -left-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 ring-4 ring-[rgb(39,36,36)]"
                aria-hidden="true"
              />
              <p className="text-sm font-semibold text-sky-300">{period}</p>
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
        <Teaser to="/skills" cta="Visit Skills">
          Curious about my problem-solving skills and competitive programming journey?
        </Teaser>
        <Teaser to="/beyond-work" cta="Visit Beyond Work">
          Want to explore my achievements, leadership experiences, and extracurricular activities?
        </Teaser>
      </div>
    </div>
  );
}

function Section({ title, kicker, children }) {
  return (
    <section aria-label={title}>
      <h2 className="flex items-baseline gap-3 text-2xl font-bold text-white mb-5">
        <span className="text-sm font-mono text-sky-400">{kicker}</span>
        {title}
        <span className="flex-1 h-px self-center bg-gradient-to-r from-white/20 to-transparent" aria-hidden="true" />
      </h2>
      {children}
    </section>
  );
}

function RepoCard({ repo }) {
  const { name, description, language, url, homepage } = repo;

  return (
    <article className="group relative h-full rounded-2xl p-px bg-gradient-to-br from-white/15 via-white/5 to-transparent hover:from-sky-400/70 hover:to-violet-500/70 transition-colors duration-500">
      <div className="h-full flex flex-col gap-3 rounded-2xl bg-[rgb(30,28,28)] p-5 group-hover:-translate-y-0.5 transition-transform duration-300">
        <h3 className="font-bold text-white break-words">
          <a href={url} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
            {name.replaceAll("-", " ")}
          </a>
        </h3>
        <p className="text-sm text-gray-400 flex-1">{description}</p>

        <div className="flex items-center justify-between text-sm">
          <span className="flex items-center gap-2 text-gray-300">
            <span className="w-3 h-3 rounded-full" style={{ backgroundColor: LANGUAGE_COLORS[language] ?? "#888" }} aria-hidden="true" />
            {language}
          </span>
          {homepage && (
            <a
              href={homepage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Live demo of ${name}`}
              className="relative z-10 flex items-center gap-1 text-sky-300 hover:text-sky-200"
            >
              <LinkIcon className="w-4 h-4" /> Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Teaser({ to, cta, children }) {
  return (
    <Link
      to={to}
      className="group block rounded-2xl p-5 bg-gradient-to-br from-sky-500/10 to-violet-500/10 border border-white/10 hover:border-sky-400/50 transition-colors duration-300"
    >
      <p className="text-gray-200">{children}</p>
      <span className="inline-block mt-3 font-semibold text-sky-300 group-hover:translate-x-1 transition-transform duration-300">
        {cta} &rarr;
      </span>
    </Link>
  );
}
