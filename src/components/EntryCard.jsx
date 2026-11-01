/** Timeline entry for education, work and achievements: picture beside the title, details and date. */
export default function EntryCard({ entry }) {
  const { image, title, description, duration } = entry;

  return (
    <article className="flex gap-4 items-start">
      {image ? (
        <img
          src={image}
          alt=""
          loading="lazy"
          className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg object-cover bg-[#fff] p-0.5"
        />
      ) : (
        <div
          aria-hidden="true"
          className="grid place-items-center w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg bg-gray-800 border border-gray-700 text-2xl font-bold text-white"
        >
          {title.charAt(0)}
        </div>
      )}

      <div className="min-w-0">
        {duration && <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">{duration}</p>}
        <h3 className="text-lg font-bold text-white mt-0.5">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </article>
  );
}
