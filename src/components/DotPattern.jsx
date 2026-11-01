import { useEffect, useRef } from "react";

/** A mask on the whole field, so the dots fade into what's behind them. */
const FADE = {
  none: "",
  radial: "[mask-image:radial-gradient(ellipse_at_center,#000_50%,transparent)]",
  top: "[mask-image:linear-gradient(to_top,#000_40%,transparent)]",
  bottom: "[mask-image:linear-gradient(to_bottom,#000_40%,transparent)]",
};

const px = (value) => (value === undefined ? undefined : `${value}px`);

/**
 * Full-page dot grid drawn behind everything. A slow diagonal wave brightens the dots in turn,
 * and dots near the mouse light up and grow. The dots are a CSS mask (see index.css); the pointer
 * only writes two CSS variables, so there's no canvas, no frame loop and no re-render.
 * Pointer moves are read from the window because the page content sits on top of the dots.
 * Touch doesn't light dots; reduced motion freezes the wave.
 */
export default function DotPattern({
  className = "fixed inset-0 -z-10",
  dotColor,
  glowColor,
  dotSize,
  gap,
  proximity,
  speed = 1,
  fade = "radial",
}) {
  const glow = useRef(null);

  useEffect(() => {
    const node = glow.current;
    if (!node) return;

    const handleMove = (event) => {
      if (event.pointerType === "touch") return;
      const box = node.getBoundingClientRect();
      node.style.setProperty("--dot-pattern-x", `${event.clientX - box.left}px`);
      node.style.setProperty("--dot-pattern-y", `${event.clientY - box.top}px`);
      // The light lands where the pointer comes in, and glides from the next move on.
      node.dataset.pointer = node.dataset.pointer ? "move" : "enter";
    };
    // The position stays, so the light fades out where it was.
    const handleLeave = () => delete node.dataset.pointer;

    window.addEventListener("pointermove", handleMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", handleLeave);
    return () => {
      window.removeEventListener("pointermove", handleMove);
      document.documentElement.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none overflow-hidden ${FADE[fade]} ${className}`}
      style={{
        "--dot-pattern-color": dotColor,
        "--dot-pattern-glow": glowColor,
        "--dot-pattern-size": px(dotSize),
        "--dot-pattern-gap": px(gap),
        "--dot-pattern-proximity": px(proximity),
        "--dot-pattern-duration": speed > 0 ? `${12 / speed}s` : undefined,
      }}
    >
      <div className="dot-pattern-dots absolute inset-0">
        {speed > 0 && <div className="dot-pattern-wave absolute inset-0" />}
      </div>
      <div className="dot-pattern-lit absolute inset-0">
        <div ref={glow} className="dot-pattern-glow absolute inset-0" />
      </div>
    </div>
  );
}
