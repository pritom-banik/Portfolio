import { useEffect, useState } from "react";

const TYPE_DELAY = 70;
const DELETE_DELAY = 35;
const HOLD_DELAY = 1600;

/** Types each phrase out, holds it, deletes it, then moves on to the next one. */
export default function Typewriter({ phrases, className = "" }) {
  const [index, setIndex] = useState(0);
  const [length, setLength] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrase = phrases[index % phrases.length];

  useEffect(() => {
    let delay = isDeleting ? DELETE_DELAY : TYPE_DELAY;
    let next;

    if (!isDeleting && length === phrase.length) {
      delay = HOLD_DELAY;
      next = () => setIsDeleting(true);
    } else if (isDeleting && length === 0) {
      next = () => {
        setIsDeleting(false);
        setIndex((i) => i + 1);
      };
    } else {
      next = () => setLength((l) => l + (isDeleting ? -1 : 1));
    }

    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [length, isDeleting, phrase]);

  return (
    <p className={className}>
      {/* Screen readers get the full list once instead of the animation. */}
      <span className="sr-only">{phrases.join(", ")}</span>
      <span aria-hidden="true">
        {phrase.slice(0, length)}
        <span className="caret-blink ml-0.5 inline-block w-0.5 h-[1.1em] align-[-0.15em] bg-sky-400" />
      </span>
    </p>
  );
}
