import Accordion from "../components/Accordion.jsx";
import EntryCard from "../components/EntryCard.jsx";
import work from "../data/work.json";
import education from "../data/education.json";
import expertise from "../data/expertise.json";
import interests from "../data/interests.json";

export default function BackgroundPage() {
  return (
    <section aria-label="Background" className="w-full flex flex-col gap-4 p-4">

      <Accordion title="Areas of Expertise" panelClassName="flex flex-col space-y-4 text-xl">
        <div className="space-y-6 border border-white rounded-lg p-4">
          {expertise.map(({ area, details }) => (
            <div key={area}>
              <h3 className="text-xl font-bold underline mb-2">{area}</h3>
              <ul className="ml-4 list-disc">
                {details.map(({ label, value }) => (
                  <li key={label}>
                    <strong>{label}:</strong> {value}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Accordion>
      
      <Accordion title="Work Experience" defaultOpen>
        {work.map((entry, index) => (
          <EntryCard key={index} entry={entry} />
        ))}
      </Accordion>

      <Accordion title="Education">
        {education.map((entry, index) => (
          <EntryCard key={index} entry={entry} />
        ))}
      </Accordion>

      

      <Accordion title="Interests" panelClassName="flex flex-col space-y-4 text-xl">
        <div className="space-y-6 border border-white rounded-lg p-4">
          {interests.map(({ title, highlights }) => (
            <div key={title}>
              <h3 className="text-2xl font-bold underline mb-2">{title}</h3>
              <ul className="list-disc text-gray-500 pl-6 space-y-2">
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Accordion>
    </section>
  );
}
