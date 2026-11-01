import { useId, useState } from "react";
import { ChevronDownIcon } from "./icons.jsx";

/**
 * Collapsible panel with a header button.
 * `panelClassName` controls the panel's inner layout (e.g. flex column or grid).
 */
export default function Accordion({ title, defaultOpen = false, panelClassName = "flex flex-col space-y-4", children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div>
      <h2>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((open) => !open)}
          className="bg-black text-white font-bold rounded-lg p-4 cursor-pointer flex items-center justify-between w-full text-left"
        >
          <span className="text-2xl">{title}</span>
          <ChevronDownIcon className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </h2>

      <div
        id={panelId}
        hidden={!isOpen}
        className={`text-white bg-black w-full border border-gray-700 shadow-lg py-4 px-4 rounded-b-2xl mx-auto ${panelClassName}`}
      >
        {children}
      </div>
    </div>
  );
}
