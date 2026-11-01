/** Card for work, education and achievement entries. */
export default function EntryCard({ entry }) {
  return (
    <article className="bg-black border border-white rounded-lg p-4">
      <img src={entry.image} alt={entry.title} loading="lazy" className="w-full rounded-lg my-4" />
      <h3 className="text-white text-xl font-bold mb-2">{entry.title}</h3>
      <p className="text-gray-300 text-base mb-4">{entry.description}</p>
      <p className="text-white text-lg font-semibold mb-2">{entry.duration}</p>
    </article>
  );
}
