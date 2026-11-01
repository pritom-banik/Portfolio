import { HashRouter, Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout.jsx";
import { DEFAULT_PATH, PAGES } from "./navigation.js";

/**
 * HashRouter keeps URLs in the form "#/projects", which works on static
 * hosting such as GitHub Pages without any server configuration.
 */
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          {PAGES.map(({ path, element: Page }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
          <Route path="*" element={<Navigate to={DEFAULT_PATH} replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
