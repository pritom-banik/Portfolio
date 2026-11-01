# Portfolio

Personal portfolio website of Pritom Banik, built with **React**, **Vite**,
**React Router** and **Tailwind CSS**.

## Getting started

```bash
npm install        # install dependencies (once)
npm run dev        # start the development server at http://localhost:5173
npm run build      # create a production build in dist/
npm run preview    # serve the production build locally
```

## Project structure

```
├── index.html               HTML shell that loads src/main.jsx
├── public/images/           Static images, referenced as "images/<file>"
├── vite.config.js           Vite + React + Tailwind configuration
└── src/
    ├── main.jsx             Entry point: mounts <App /> into #root
    ├── App.jsx              Router: one route per page
    ├── navigation.js        List of pages (path, label, icon, component)
    ├── index.css            Tailwind CSS import
    ├── components/          Reusable building blocks
    │   ├── Layout.jsx           Page shell: profile + navigation + current page
    │   ├── Profile.jsx          Left column: photo, name, typewriter roles, CV, socials
    │   ├── TopNav.jsx           Desktop navigation (hides on scroll down)
    │   ├── BottomNav.jsx        Mobile navigation
    │   ├── Section.jsx          Numbered page section heading
    │   ├── PostCard.jsx         News post (Others page)
    │   ├── ProjectCard.jsx      Featured project with picture, period and links
    │   ├── RepoGrid.jsx         All GitHub repos, fetched live from the GitHub API
    │   ├── ShowMoreList.jsx     List that reveals 4 more items per click
    │   ├── CurrentUpdates.jsx   Right column: latest life updates + contact form
    │   ├── EntryCard.jsx        Work / education / achievement entry
    │   ├── ContactForm.jsx      Contact form (opens the visitor's email client)
    │   └── icons.jsx            Inline SVG icons
    ├── pages/               One component per page
    │   ├── OverviewPage.jsx     #/overview
    │   ├── ProjectsPage.jsx     #/projects
    │   ├── SkillsPage.jsx       #/skills
    │   └── BeyondWorkPage.jsx   #/beyond-work ("Others" tab)
    └── data/                All site content, as JSON
```

**Data flows one way:** `data/*.json` → `pages/` → `components/`.
To change what the site says, edit the JSON files in `src/data/`. No component
code needs to change.

| File                       | Content                                         |
| -------------------------- | ----------------------------------------------- |
| `profile.json`             | Name, headline, bio, CV link, email, social links |
| `posts.json`               | Overview posts                                  |
| `projects.json`            | Project cards (see fields below)                |
| `work.json`                | Work experience                                 |
| `education.json`           | Education                                       |
| `achievements.json`        | Achievements & activities                       |
| `expertise.json`           | Areas of expertise                              |
| `interests.json`           | Interests                                       |
| `problem-solving.json`     | Online judge statistics                         |
| `programming-skills.json`  | Languages and frameworks                        |
| `repositories.json`        | GitHub repositories                             |

### Project fields

| Field         | Required | Description                               |
| ------------- | -------- | ----------------------------------------- |
| `title`       | Yes      | Project name                              |
| `image`       | Yes      | Thumbnail, e.g. `"images/my-project.png"` |
| `description` | Yes      | Short summary                             |
| `status`      | No       | e.g. `"Completed · April 2020"`           |
| `tags`        | No       | Array of keywords shown as tags           |
| `link`        | No       | Outbound URL (repository, demo, etc.)     |
| `linkLabel`   | No       | Link text; defaults to "View project"     |

### Adding a page

1. Create `src/pages/MyPage.jsx`.
2. Add an entry to `PAGES` in `src/navigation.js`.

Both navigation bars and the router update automatically.

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site
and publishes it to GitHub Pages. In the repository settings, set
**Pages → Source** to **GitHub Actions** (one-time setup).
