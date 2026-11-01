import updates from "../data/updates.json";

/** "Current updates" feed: right-hand column on large screens, last section on smaller ones. */
export default function CurrentUpdates() {
  return (
    <aside
      aria-labelledby="updates-heading"
      className="md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:sticky lg:top-6 lg:self-start"
    >
      <h2 id="updates-heading" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
        <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
          <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </span>
        Current Updates
      </h2>

      <ol className="relative border-l border-white/15 ml-1 space-y-5">
        {updates.map(({ date, text }) => (
          <li key={`${date}-${text}`} className="pl-5 relative">
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-sky-400 ring-4 ring-[rgb(39,36,36)]" aria-hidden="true" />
            <time className="block text-xs font-semibold uppercase tracking-wider text-sky-300">{date}</time>
            <p className="text-gray-200 leading-snug mt-0.5">{text}</p>
          </li>
        ))}
      </ol>
    </aside>
  );
}
