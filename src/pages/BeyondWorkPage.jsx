import Accordion from "../components/Accordion.jsx";
import ContactForm from "../components/ContactForm.jsx";
import EntryCard from "../components/EntryCard.jsx";
import achievements from "../data/achievements.json";

export default function BeyondWorkPage() {
  return (
    <section aria-label="Beyond Work" className="w-full flex flex-col p-4">
      <Accordion title="Achievements & Activities" defaultOpen>
        {achievements.map((entry, index) => (
          <EntryCard key={index} entry={entry} />
        ))}
      </Accordion>

      <div className="bg-black rounded-lg shadow-lg p-6 w-full">
        <h2 className="text-white text-2xl font-bold mb-4">Contact</h2>
        <ContactForm />
      </div>
    </section>
  );
}
