import { LinkIcon } from "./icons.jsx";
import { buttonClass } from "./buttons.js";

/** Featured project: picture, time period, description, tags and GitHub / live links. */
export default function ProjectCard({ project }) {
  const { title, image, period, description, tags = [], github, live } = project;

  return (
    <article className="group h-full rounded-lg bg-black border border-gray-700 shadow-lg hover:border-white transition-colors duration-300">
      <div className="h-full flex flex-col rounded-lg overflow-hidden">
        <img
          src={image}
          alt={`Preview of ${title}`}
          loading="lazy"
          className="w-full aspect-[2/1] object-cover bg-gray-900 group-hover:scale-[1.03] transition-transform duration-500"
        />

        <div className="flex flex-col flex-1 gap-3 p-5">
          {period && <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{period}</p>}
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-400 flex-1">{description}</p>

          {tags.length > 0 && (
            <ul aria-label="Technologies" className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li key={tag} className="px-2.5 py-0.5 rounded-lg text-xs text-gray-200 bg-gray-800 border border-gray-700">
                  {tag}
                </li>
              ))}
            </ul>
          )}

          <div className="flex gap-2 pt-3 border-t border-gray-700">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary", "sm")}>
                GitHub
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className={buttonClass("primary", "sm")}>
                <LinkIcon className="w-4 h-4" /> Live demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
