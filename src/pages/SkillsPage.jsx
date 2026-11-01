import Section from "../components/Section.jsx";
import expertise from "../data/expertise.json";
import problemSolving from "../data/problem-solving.json";

const STATS = [
  { key: "maxRating", label: "Max rating" },
  { key: "solved", label: "Solved" },
  { key: "contests", label: "Contests" },
];

export default function SkillsPage() {
  return (
    <div className="flex flex-col gap-14 mt-8">
      <Section title="Areas of Expertise">
        <ul className="grid gap-4 sm:grid-cols-2">
          {expertise.map(({ area, details }) => (
            <li key={area} className="rounded-lg p-5 bg-black border border-gray-700 shadow-lg hover:border-white transition-colors duration-300">
              <h3 className="text-lg font-bold text-white mb-3">{area}</h3>
              <dl className="space-y-2 text-sm">
                {details.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-gray-400">{label}</dt>
                    <dd className="text-gray-300">{value}</dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Problem Solving">
        <ul className="grid gap-4 sm:grid-cols-2">
          {problemSolving.map((judge) => (
            <li key={judge.judge} className="rounded-lg p-5 bg-black border border-gray-700 shadow-lg">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-bold text-white">{judge.judge}</h3>
                <span className="text-sm font-mono text-gray-400">@{judge.handle}</span>
              </div>
              <dl className="grid grid-cols-3 gap-3 mt-4 text-center">
                {STATS.map(({ key, label }) => (
                  <div key={key} className="rounded-lg bg-gray-800 py-3">
                    <dd className="text-2xl font-extrabold text-white">{judge[key]}</dd>
                    <dt className="text-xs uppercase tracking-wider text-gray-400 mt-1">{label}</dt>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
