import { useEffect } from "react";
import { useLocation } from "react-router";
import EntryCard from "../components/EntryCard.jsx";
import PostCard from "../components/PostCard.jsx";
import Section from "../components/Section.jsx";
import ShowMoreList from "../components/ShowMoreList.jsx";
import achievements from "../data/achievements.json";
import education from "../data/education.json";
import lifeUpdates from "../data/life-updates.json";
import work from "../data/work.json";

const LIFE_UPDATES_ID = "life-updates";

/** The "Others" tab. */
export default function BeyondWorkPage() {
  const { hash } = useLocation();
  const target = hash.slice(1);

  // Arriving via "#/beyond-work#life-updates" (the sidebar's "More" link): scroll to that section.
  useEffect(() => {
    if (target) document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  }, [target]);

  return (
    <div className="flex flex-col gap-14 mt-8">
      <Section title="Education">
        <ul className="flex flex-col gap-6">
          {education.map((entry, index) => (
            <li key={index}>
              <EntryCard entry={entry} />
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Work Experience" defaultOpen={false}>
        <ShowMoreList items={work} renderItem={(entry) => <EntryCard entry={entry} />} />
      </Section>

      <Section title="Achievements" defaultOpen={false}>
        <ShowMoreList items={achievements} renderItem={(entry) => <EntryCard entry={entry} />} />
      </Section>

      <Section id={LIFE_UPDATES_ID} title="Life Updates" open={target === LIFE_UPDATES_ID}>
        <ShowMoreList
          items={lifeUpdates}
          getKey={(post) => `${post.date}-${post.title}`}
          renderItem={(post) => <PostCard post={post} />}
          className="flex flex-col gap-4"
        />
      </Section>
    </div>
  );
}
