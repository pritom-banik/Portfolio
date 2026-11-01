import profile from "../data/profile.json";
import Typewriter from "./Typewriter.jsx";
import { buttonClass } from "./buttons.js";

/** Left-hand column: photo, name, rotating roles, CV download and social links. */
export default function Profile() {
  return (
    <aside aria-label="Profile" className="md:sticky md:top-6 md:self-start text-center md:text-left">
      <img
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        className="w-full lg:w-auto mx-auto rounded-lg mb-4"
      />

      <header className="mt-5">
        <h1 className="text-4xl font-extrabold tracking-tight text-white">
          {profile.name}
        </h1>
        <Typewriter phrases={profile.roles} className="mt-2 min-h-[1.75rem] text-lg font-medium text-gray-300" />
      </header>

      <a
        href={profile.cvUrl}
        download={`CV_${profile.name.replace(" ", "_")}.pdf`}
        className={`mt-5 ${buttonClass()}`}
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
              className="grid place-items-center w-11 h-11 rounded-lg bg-black border border-gray-700 hover:border-white hover:bg-gray-800 hover:-translate-y-0.5 transition-all duration-300"
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
