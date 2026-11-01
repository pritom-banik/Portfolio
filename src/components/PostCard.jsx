import { buttonClass } from "./buttons.js";

/** Life update: date and title, plus an optional picture, description and link. */
export default function PostCard({ post }) {
  return (
    <article className="group flex flex-col sm:flex-row gap-4 rounded-lg p-4 bg-black border border-gray-700 shadow-lg hover:border-white transition-colors duration-300">
      {post.image && (
        <img
          src={post.image}
          alt=""
          loading="lazy"
          className="w-full sm:w-48 aspect-video sm:aspect-[4/3] shrink-0 rounded-lg object-cover bg-gray-900"
        />
      )}
      <div className="flex flex-col gap-1 min-w-0">
        <time className="text-xs font-semibold uppercase tracking-wider text-gray-400">{post.date}</time>
        <h3 className="text-lg font-bold text-white">{post.title}</h3>
        {post.description && <p className="text-gray-400 text-sm flex-1">{post.description}</p>}
        {post.link && (
          <a href={post.link} target="_blank" rel="noopener noreferrer" className={`mt-2 self-start ${buttonClass("secondary", "sm")}`}>
            Read more &rarr;
          </a>
        )}
      </div>
    </article>
  );
}
