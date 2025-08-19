document.addEventListener("DOMContentLoaded", () => {
  fetch("js/post.json")
    .then((res) => res.json())
    .then((data) => renderPosts(data))
    .catch((err) => console.error("Error fetching JSON:", err));
});

function renderPosts(posts) {
  const container = document.getElementById("Content");
  posts.forEach((post) => {
    const postHTML = `
      <div class="post bg-black w-[80vw] lg:w-[50vw] border border-gray-300 shadow-lg py-2 z-50 rounded-lg mx-auto hover:scale-101 transition-all duration-400">
        <p class="text-white text-3xl font-bold p-2.5">${post.date}</p>
        <img src="${post.image}" alt="Post Image" class="image w-[80vw] lg:w-[50vw] h-[30vw] mt-12 mx-auto" />
        <h1 class="heading text-white text-2xl font-bold p-2.5">${post.title}</h1>
        <p class="description text-white text-lg p-2.5">${post.description}</p>
        <div class="link mt-2.5 py-5 flex gap-6 justify-around items-center text-white text-3xl border-t-3 border-white">
          <i class="fa-solid fa-heart hover:text-blue-400 cursor-pointer"></i>
          <div class="w-px h-6 bg-white"></div>
          <i class="fa-solid fa-message hover:text-blue-400 cursor-pointer"></i>
          <div class="w-px h-6 bg-white"></div>
          <a href="${post.link}" target="_blank" rel="noopener noreferrer">
            <i class="link fa-solid fa-link hover:text-blue-400 cursor-pointer"></i>
          </a>
        </div>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", postHTML);
  });
}
// This code fetches a JSON file containing post data and renders it into the HTML.
// Each post includes a date, image, title, description, and links for interaction.

const tabs = document.querySelectorAll(".navigationBar > div");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => {
        t.classList.remove("text-white", "border-white", "bg-gray-500");
        t.classList.add("text-gray-300", "border-transparent");
      });

      tab.classList.remove("text-gray-300", "border-transparent");
      tab.classList.add("text-white", "border-white", "bg-gray-500");
    });
  });

  // Bottom navigation
const bottom_tabs = document.querySelectorAll(".bottom-navigation-bar > div");

tabs.forEach((tab) => {
  bottom_tab.addEventListener("click", () => {
    // Reset all tabs
    tabs.forEach((t) => {
      t.classList.remove("text-white", "border-white", "bg-gray-700");
      t.classList.add("text-gray-400", "border-transparent");
    });

    // Activate clicked tab
    tab.classList.remove("text-gray-400", "border-transparent");
    tab.classList.add("text-white", "border-white", "bg-gray-700");
  });
});