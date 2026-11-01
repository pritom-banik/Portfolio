import { useState } from "react";
import { buttonClass } from "./buttons.js";

/** Renders the first `pageSize` items, with a button that reveals `pageSize` more per click. */
export default function ShowMoreList({ items, renderItem, getKey = (_, index) => index, pageSize = 4, className = "flex flex-col gap-6" }) {
  const [visible, setVisible] = useState(pageSize);
  const remaining = items.length - visible;

  return (
    <>
      <ul className={className}>
        {items.slice(0, visible).map((item, index) => (
          <li key={getKey(item, index)}>{renderItem(item)}</li>
        ))}
      </ul>

      {remaining > 0 && (
        <button type="button" onClick={() => setVisible((v) => v + pageSize)} className={`mt-6 ${buttonClass("secondary")}`}>
          Show more ({remaining} left)
        </button>
      )}
    </>
  );
}
