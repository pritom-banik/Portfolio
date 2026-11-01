import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { DEFAULT_PATH, PAGES } from "../navigation.js";
import profile from "../data/profile.json";
import Profile from "./Profile.jsx";
import TopNav from "./TopNav.jsx";
import BottomNav from "./BottomNav.jsx";
import CurrentUpdates from "./CurrentUpdates.jsx";
import DotPattern from "./DotPattern.jsx";
import ThemeToggle from "./ThemeToggle.jsx";

/** Page shell: profile on the left, navigation and the current page in the middle, updates on the right. */
export default function Layout() {
  const { pathname, hash } = useLocation();

  // Keep the browser tab title in sync with the current page and start each page at the top
  // (unless the link points at a section, which the page scrolls to itself).
  useEffect(() => {
    const page = PAGES.find((p) => p.path === pathname);
    document.title = page ? `${page.label} | ${profile.name}` : profile.name;
    if (!hash) window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    // lg: profile | page | updates.  md: profile | page, updates underneath the page.  Phones: everything stacked.
    <div className="min-h-screen max-w-[1600px] mx-auto px-4 md:px-6 lg:px-8 py-8 pb-24 lg:pb-8 grid gap-10 md:gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)_minmax(0,1fr)]">
      <DotPattern />
      <ThemeToggle />

      <Profile isHome={pathname === DEFAULT_PATH} />

      <main className="min-w-0">
        <TopNav />
        <BottomNav />
        <Outlet />
      </main>

      <CurrentUpdates showUpdatesBelowLg={pathname !== "/beyond-work"} />
    </div>
  );
}
