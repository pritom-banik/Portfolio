import { HomeIcon, MoreIcon, ProjectsIcon, SkillsIcon } from "./components/icons.jsx";
import OverviewPage from "./pages/OverviewPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import SkillsPage from "./pages/SkillsPage.jsx";
import BeyondWorkPage from "./pages/BeyondWorkPage.jsx";

/**
 * Single source of truth for the site's pages.
 * Both navigation bars and the router are generated from this list.
 */
export const PAGES = [
  { path: "/", label: "Overview", icon: HomeIcon, element: OverviewPage },
  { path: "/projects", label: "Projects", icon: ProjectsIcon, element: ProjectsPage },
  { path: "/skills", label: "Skills", icon: SkillsIcon, element: SkillsPage },
  { path: "/beyond-work", label: "Others", icon: MoreIcon, element: BeyondWorkPage },
];

export const DEFAULT_PATH = PAGES[0].path;
