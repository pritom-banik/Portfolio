/** Project card with thumbnail, status line, keyword tags and an outbound link. */
export default function ProjectCard({ project }) {
  const { title, image, status, description, tags = [], link, linkLabel = "View project" } = project;

  return (
    <article className="flex flex-col bg-black border border-gray-300 shadow-lg rounded-lg overflow-hidden hover:scale-101 transition-all duration-400">
      <img src={image} alt={title} loading="lazy" className="w-full h-48 object-cover bg-gray-900" />

      <div className="flex flex-col flex-1 gap-3 p-4">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        {status && <p className="text-gray-400 text-sm font-semibold">{status}</p>}
        <p className="text-gray-300 text-base">{description}</p>

        {tags.length > 0 && (
          <ul aria-label="Technologies" className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag} className="rounded-full bg-gray-800 border border-gray-600 text-gray-200 text-xs font-medium px-3 py-1">
                {tag}
              </li>
            ))}
          </ul>
        )}

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto pt-3 border-t border-gray-700 text-blue-400 font-semibold hover:text-blue-300 transition duration-300"
          >
            {linkLabel} &rarr;
          </a>
        )}
      </div>
    </article>
  );
}
