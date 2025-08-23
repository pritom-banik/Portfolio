// Fetch posts when page loads
let lastid = "home";
all_data = [];
document.addEventListener("DOMContentLoaded", () => {
  fetch("js/post.json")
    .then((res) => res.json())
    .then((data) => {
      all_data = data; // Store the fetched data in a global variable
      renderPosts(data);
    })
    .catch((err) => console.error("Error fetching JSON:", err));
});

// Function to render posts
function renderPosts(posts) {
  const container = document.getElementById("Content");
  container.innerHTML = ""; // <-- Added this to clear previous posts before adding new
  posts.forEach((post) => {
    const postHTML = `
<div class="post bg-black w-[80vw] lg:w-[50vw] border border-gray-300 shadow-lg py-2 rounded-lg mx-auto hover:scale-101 transition-all duration-400">
<p class="text-white text-3xl font-bold p-2.5">${post.date}</p>
<img src="${post.image}" alt="Post Image" class="image w-[80vw] lg:w-[50vw] h-[30vw] mt-12 mx-auto" />
<h1 class="heading text-white text-2xl font-bold p-2.5">${post.title}</h1>
<p class="description text-white text-lg p-2.5">${post.description}</p>
<div class="link mt-2.5 py-5 flex gap-6 justify-around items-center text-white text-3xl border-t border-white">
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

function get(section) {
  if (section != "home") {
    return;
  }
  const container = document.getElementById("Content");
  container.innerHTML = ""; // <-- Added this to clear previous posts before adding new
  all_data.forEach((data) => {
    // console.log(data.sections);
    // console.log(data.sections.includes(section) + " " + section);
    if (data.sections.includes(section)) {
      let addHTML = `
<div class="post bg-black w-[80vw] lg:w-[50vw] border border-gray-300 shadow-lg py-2 rounded-lg mx-auto hover:scale-101 transition-all duration-400">
<p class="text-white text-3xl font-bold p-2.5">${data.date}</p>
<img src="${data.image}" alt="Post Image" class="image w-[80vw] lg:w-[50vw] h-[30vw] mt-12 mx-auto" />
<h1 class="heading text-white text-2xl font-bold p-2.5">${data.title}</h1>
<p class="description text-white text-lg p-2.5">${data.description}</p>
<div class="link mt-2.5 py-5 flex gap-6 justify-around items-center text-white text-3xl border-t border-white">
<i class="fa-solid fa-heart hover:text-blue-400 cursor-pointer"></i>
<div class="w-px h-6 bg-white"></div>
<i class="fa-solid fa-message hover:text-blue-400 cursor-pointer"></i>
<div class="w-px h-6 bg-white"></div>
<a href="${data.link}" target="_blank" rel="noopener noreferrer">
<i class="link fa-solid fa-link hover:text-blue-400 cursor-pointer"></i>
</a>
</div>
</div>
`;
      container.insertAdjacentHTML("beforeend", addHTML);
    }
  });
}
//==========================================

const tabs_up = document.querySelectorAll(".navigationBar > div");
const tabs_bottom = document.querySelectorAll(".bottom-navigationBar > div");

function Highlight(name) {
  get(name);
  const prev = document.getElementById(lastid);
  prev.classList.add("hidden");
  const id = document.getElementById(name);
  id.classList.remove("hidden");
  lastid = name;

  tabs_up.forEach((tab) => {
    if (tab.classList.contains(name)) {
      tab.classList.remove("text-gray-300", "border-transparent");
      tab.classList.add("text-white", "border-white", "bg-gray-500");
    } else {
      tab.classList.add("text-gray-300", "border-transparent");
      tab.classList.remove("text-white", "border-white", "bg-gray-500");
    }
  });
  tabs_bottom.forEach((tab) => {
    if (tab.classList.contains(name)) {
      tab.classList.remove("text-gray-300", "border-transparent");
      tab.classList.add("text-white", "border-white", "bg-gray-500");
    } else {
      tab.classList.add("text-gray-300", "border-transparent");
      tab.classList.remove("text-white", "border-white", "bg-gray-500");
    }
  });
}

tabs_up.forEach((tab) => {
  tab.addEventListener("click", () => {
    const name = tab.classList[0];
    Highlight(name);
  });
});

tabs_bottom.forEach((tab) => {
  tab.addEventListener("click", () => {
    const name = tab.classList[0];
    Highlight(name);
  });
});

Highlight("home");

const navbar = document.getElementById("topNavBar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling down → hide navbar
    navbar.style.transform = "translateY(-200%)";
    navbar.style.transition = "transform 0.3s ease";
  } else {
    // Scrolling up → show navbar
    navbar.style.transform = "translateY(0)";
    navbar.style.transition = "transform 0.3s ease";
  }

  lastScrollY = currentScrollY;
});

function toggleWork(sectionId, arrowId, extension) {
  const allWork = document.getElementById(sectionId);
  const arrow = document.getElementById(arrowId);

  // Toggle show/hide
  allWork.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");

  let path = "js/" + sectionId + extension;

  // Fetch posts dynamically
  fetch(`${path}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      // If the extension is .json, parse as JSON; if .txt, parse as text
      if (extension === ".json") {
        return res.json();
      } else {
        return res.text();
      }
    })
    .then((data) => renderPosts_2(sectionId, data, extension))
    .catch((err) => console.error("Error fetching JSON:", err));
}

function renderPosts_2(containerId, posts, extension) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // clear old posts

  if (extension === ".json") {
    posts.forEach((post) => {
      //console.log(post);
      const postHTML = `
      <div class="post bg-black border border-white rounded-lg p-4">
                <img
                  src="${post.image}"
                  alt="Image 1"
                  class="image w-full rounded-lg my-4"
                />
                <h1 class="heading text-white text-xl font-bold mb-2">
                  ${post.title}
                </h1>
                <p class="description text-gray-300 text-base mb-4">
                  ${post.description}
                </p>
                <p class="duration text-white text-lg font-semibold mb-2">
                  ${post.duration}
                </p>
              </div>
    `;
      container.insertAdjacentHTML("beforeend", postHTML);
    });
  } else {
    container.innerHTML = posts;
  }
}
