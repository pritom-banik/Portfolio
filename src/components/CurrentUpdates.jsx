import { Link } from "react-router";
import lifeUpdates from "../data/life-updates.json";
import { buttonClass } from "./buttons.js";
import ContactForm from "./ContactForm.jsx";

const LATEST_COUNT = 3;

/**
 * Right-hand column on large screens (last section on smaller ones):
 * the latest life updates with a link to the full list, then the contact form.
 */
export default function CurrentUpdates() {
  return (
    <aside className="md:col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-1 lg:sticky lg:top-6 lg:self-start flex flex-col gap-6">
      <section aria-labelledby="updates-heading" className="bg-black border border-gray-700 rounded-lg shadow-lg p-5">
        <h2 id="updates-heading" className="flex items-center gap-2 text-xl font-bold text-white mb-4">
          <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
            <span className="absolute inline-flex w-full h-full rounded-full bg-white opacity-75 animate-ping" />
            <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-white" />
          </span>
          Life Updates
        </h2>

        <ol className="relative border-l border-gray-700 ml-1 space-y-5">
          {lifeUpdates.slice(0, LATEST_COUNT).map(({ date, title }) => (
            <li key={`${date}-${title}`} className="pl-5 relative">
              <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-400" aria-hidden="true" />
              <time className="block text-xs font-semibold uppercase tracking-wider text-gray-400">{date}</time>
              <p className="text-gray-200 leading-snug mt-0.5">{title}</p>
            </li>
          ))}
        </ol>

        {lifeUpdates.length > LATEST_COUNT && (
          <Link to={{ pathname: "/beyond-work", hash: "life-updates" }} className={`mt-5 ${buttonClass("secondary", "sm")}`}>
            More updates &rarr;
          </Link>
        )}
      </section>

      <section aria-labelledby="contact-heading">
        <h2 id="contact-heading" className="text-xl font-bold text-white mb-4">Contact</h2>
        <ContactForm />
      </section>
    </aside>
  );
}
