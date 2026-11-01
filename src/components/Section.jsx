import { useEffect, useId, useState } from "react";
import { ChevronDownIcon } from "./icons.jsx";

/**
 * Collapsible page section: clicking the heading shows or hides its content.
 * `defaultOpen` sets the initial state; `open` lets the parent force it open (e.g. when linked to).
 */
export default function Section({ title, id, defaultOpen = true, open, children }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const panelId = useId();

  useEffect(() => {
    if (open) setIsOpen(true);
  }, [open]);

  return (
    <section id={id} aria-label={title} className="scroll-mt-24">
      <h2 className="text-2xl font-bold text-white">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen((o) => !o)}
          className="flex items-center gap-3 w-full text-left cursor-pointer hover:text-gray-300 transition-colors"
        >
          {title}
          <span className="flex-1 h-px bg-gray-700" aria-hidden="true" />
          <ChevronDownIcon className={`w-5 h-5 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </button>
      </h2>
      <div id={panelId} hidden={!isOpen} className="mt-5">
        {children}
      </div>
    </section>
  );
}
