import Accordion from "../components/Accordion.jsx";
import { LinkIcon } from "../components/icons.jsx";
import problemSolving from "../data/problem-solving.json";
import programmingSkills from "../data/programming-skills.json";
import repositories from "../data/repositories.json";

const TABLE_COLUMNS = [
  { key: "judge", label: "Online Judge" },
  { key: "handle", label: "Handle" },
  { key: "maxRating", label: "Max Rating" },
  { key: "solved", label: "Solve Count" },
  { key: "contests", label: "Contest Count" },
];

const CELL_CLASSES = "px-4 py-2 border border-gray-500";

export default function SkillsPage() {
  return (
    <section aria-label="Skills" className="w-full flex flex-col gap-4 p-4">
      <Accordion title="Problem Solving" defaultOpen panelClassName="flex flex-col space-y-4 text-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-gray-500 rounded-lg overflow-hidden">
            <thead className="bg-gray-800 text-white">
              <tr>
                {TABLE_COLUMNS.map(({ key, label }) => (
                  <th key={key} scope="col" className={CELL_CLASSES}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-white">
              {problemSolving.map((row, index) => (
                <tr key={row.judge} className={index % 2 === 0 ? "bg-gray-700" : "bg-gray-800"}>
                  {TABLE_COLUMNS.map(({ key }) => (
                    <td key={key} className={CELL_CLASSES}>{row[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Accordion>

      <Accordion title="Languages & Frameworks" panelClassName="flex flex-col space-y-4 text-xl">
        <div className="space-y-6 border border-white rounded-lg p-4">
          {programmingSkills.map(({ title, items }) => (
            <div key={title}>
              <h3 className="text-2xl font-bold mb-2">{title}</h3>
              <ul className="list-disc list-inside">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Accordion>

      <Accordion title="GitHub Repositories" panelClassName="grid grid-cols-3 gap-2.5 text-xl">
        {repositories.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-4 bg-gray-900 text-white rounded-lg shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300 aspect-square"
          >
            <LinkIcon className="w-10 h-10 mb-2" />
            <span className="text-lg font-semibold text-center">{name}</span>
          </a>
        ))}
      </Accordion>
    </section>
  );
}
