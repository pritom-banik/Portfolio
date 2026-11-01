import profile from "../data/profile.json";
import Typewriter from "./Typewriter.jsx";

/** Left-hand column: photo, name, rotating roles, CV download and social links. */
export default function Profile() {
  return (
    <aside aria-label="Profile" className="md:sticky md:top-6 md:self-start text-center md:text-left">
      <img
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover mx-auto md:mx-0 ring-4 ring-sky-500/30 shadow-xl"
      />

      <header className="mt-5">
        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-sky-200 to-violet-300 bg-clip-text text-transparent">
          {profile.name}
        </h1>
        <Typewriter phrases={profile.roles} className="mt-2 min-h-[1.75rem] text-lg font-medium text-gray-300" />
      </header>

      <a
        href={profile.cvUrl}
        download={`CV_${profile.name.replace(" ", "_")}.pdf`}
        className="inline-block mt-5 px-5 py-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold shadow-lg hover:brightness-110 transition duration-300"
      >
        Download CV
      </a>

      <ul aria-label="Social media" className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
        {profile.socialLinks.map(({ name, url, icon }) => (
          <li key={name}>
            <a
              href={url}
              aria-label={name}
              title={name}
              className="grid place-items-center w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-300"
              {...(url.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
            >
              <img src={icon} alt="" className="w-6 h-6 object-contain" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
