import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { PAGES } from "../navigation.js";

const ACTIVE = "text-white border-white bg-gray-500";
const INACTIVE = "text-gray-300 border-transparent";

/** Desktop navigation. Hides while scrolling down and reappears when scrolling up. */
export default function TopNav() {
  const isHidden = useHideOnScrollDown();

  return (
    <nav
      aria-label="Primary"
      className={`hidden lg:flex w-full bg-black rounded-lg font-extrabold border border-gray-700 shadow-lg z-50 sticky top-0 transition-transform duration-300 ${
        isHidden ? "-translate-y-[200%]" : ""
      }`}
    >
      {PAGES.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `rounded-lg flex-1 text-center py-3 text-xl cursor-pointer hover:text-white border-b-4 hover:border-white transition duration-400 ${
              isActive ? ACTIVE : INACTIVE
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
}

function useHideOnScrollDown() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return isHidden;
}
