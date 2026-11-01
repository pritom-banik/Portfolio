import { useEffect, useState } from "react";
import profile from "../data/profile.json";
import { buttonClass } from "./buttons.js";

const USERNAME = new URL(profile.githubUrl).pathname.replaceAll("/", "");
const REPOS_URL = `https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=pushed`;

const DATE_FORMAT = new Intl.DateTimeFormat("en", { month: "short", year: "numeric" });

/** Every public GitHub repository, fetched live, each with GitHub's generated preview image. */
export default function RepoGrid() {
  const { repos, error } = useGitHubRepos();

  if (error) {
    return (
      <p className="text-gray-400">
        Couldn't load repositories from GitHub right now.{" "}
        <a href={`${profile.githubUrl}?tab=repositories`} target="_blank" rel="noopener noreferrer" className={`ml-2 ${buttonClass("secondary", "sm")}`}>
          See them on GitHub
        </a>
      </p>
    );
  }

  if (!repos) {
    return (
      <ul aria-busy="true" aria-label="Loading repositories" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <li key={i} className="h-56 rounded-lg bg-gray-800 animate-pulse" />
        ))}
      </ul>
    );
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {repos.map((repo) => (
        <li key={repo.id}>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col h-full rounded-lg overflow-hidden bg-black border border-gray-700 shadow-lg hover:border-white transition-colors duration-300"
          >
            <img
              src={`https://opengraph.githubassets.com/1/${repo.full_name}`}
              alt=""
              loading="lazy"
              className="w-full aspect-[2/1] object-cover bg-gray-900"
            />
            <div className="flex flex-col flex-1 gap-2 p-4">
              <h3 className="font-bold text-white break-words group-hover:text-gray-300 transition-colors">{repo.name}</h3>
              {repo.description && <p className="text-sm text-gray-400 line-clamp-2 flex-1">{repo.description}</p>}
              <p className="flex flex-wrap gap-x-3 text-xs text-gray-400 mt-auto">
                {repo.language && <span>{repo.language}</span>}
                <span>★ {repo.stargazers_count}</span>
                <span>Updated {DATE_FORMAT.format(new Date(repo.pushed_at))}</span>
              </p>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

function useGitHubRepos() {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(REPOS_URL, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub responded with ${response.status}`);
        return response.json();
      })
      // Skip the profile README repository (named after the user).
      .then((data) => setRepos(data.filter((repo) => repo.name.toLowerCase() !== USERNAME.toLowerCase())))
      .catch((err) => {
        if (err.name !== "AbortError") setError(err);
      });

    return () => controller.abort();
  }, []);

  return { repos, error };
}
