import { NavLink } from "react-router";
import { PAGES } from "../navigation.js";

const ACTIVE = "text-white border-white bg-gray-500";
const INACTIVE = "text-gray-300 border-transparent";

/** Mobile navigation, fixed to the bottom of the screen. */
export default function BottomNav() {
  return (
    <nav
      aria-label="Primary (mobile)"
      className="lg:hidden fixed bottom-0 left-0 w-full bg-black border-t border-gray-700 shadow-lg flex justify-around items-center z-50"
    >
      {PAGES.map(({ path, label, icon: Icon }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `rounded-lg flex-1 flex flex-col items-center justify-center py-0.5 cursor-pointer hover:text-white border-b-4 hover:border-white transition duration-400 ${
              isActive ? ACTIVE : INACTIVE
            }`
          }
        >
          <Icon className="w-6 h-6 mb-1" />
          <span className="text-xs">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
