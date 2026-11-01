import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons.jsx";

const STORAGE_KEY = "theme";
const LIGHT_QUERY = "(prefers-color-scheme: light)";

/**
 * Floating light/dark switch. The starting theme is set in index.html (saved choice, else the
 * browser's setting). Until the visitor picks one, the site keeps following the browser setting.
 */
export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme ?? "dark");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia(LIGHT_QUERY);
    const followBrowser = (event) => {
      if (!readSaved()) setTheme(event.matches ? "light" : "dark");
    };
    media.addEventListener("change", followBrowser);
    return () => media.removeEventListener("change", followBrowser);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage blocked (e.g. private mode): the switch still works for this visit.
    }
    setTheme(next);
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light theme" : "Dark theme"}
      className="fixed right-4 bottom-20 lg:bottom-6 lg:right-6 z-50 grid place-items-center w-11 h-11 rounded-lg bg-black text-white border border-gray-700 shadow-lg cursor-pointer hover:border-white transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      {isDark ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
    </button>
  );
}

function readSaved() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}
