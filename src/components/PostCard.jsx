import { HeartIcon, LinkIcon, MessageIcon } from "./icons.jsx";

/** Large post card used on the Overview page. */
export default function PostCard({ post }) {
  return (
    <article className="bg-black w-[80vw] lg:w-[50vw] border border-gray-300 shadow-lg py-2 rounded-lg mx-auto hover:scale-101 transition-all duration-400">
      <p className="text-white text-3xl font-bold p-2.5">{post.date}</p>
      <img src={post.image} alt={post.title} loading="lazy" className="w-[80vw] lg:w-[50vw] h-[30vw] mt-12 mx-auto" />
      <h2 className="text-white text-2xl font-bold p-2.5">{post.title}</h2>
      <p className="text-white text-lg p-2.5">{post.description}</p>

      <div className="mt-2.5 py-5 flex gap-6 justify-around items-center text-white border-t border-white">
        <HeartIcon className="w-8 h-8 hover:text-blue-400 cursor-pointer" />
        <div className="w-px h-6 bg-white" aria-hidden="true" />
        <MessageIcon className="w-8 h-8 hover:text-blue-400 cursor-pointer" />
        <div className="w-px h-6 bg-white" aria-hidden="true" />
        <a href={post.link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${post.title}`}>
          <LinkIcon className="w-8 h-8 hover:text-blue-400 cursor-pointer" />
        </a>
      </div>
    </article>
  );
}
