// Fetch posts when page loads
let lastid = "home";
all_data = [];

document.addEventListener("DOMContentLoaded", () => {
  home();
  projects();
  fetchDate();
  const activeSection = localStorage.getItem("activeSection");
  if (activeSection) {
  Highlight(activeSection); // show saved section
} else {
  Highlight("home"); // default to home
}
});

function home() {
  const container = document.getElementById("home");
  container.innerHTML = "<p class='text-white text-xl'>Loading...</p>"; // optional loading text

  fetch("js/post.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((posts) => {
      container.innerHTML = "";
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
    })
    .catch((err) => {
      console.error("Error fetching JSON:", err);
      container.innerHTML = "<p class='text-red-500'>Failed to load posts.</p>";
    });
}

//==========================================

function projects() {
  const container = document.getElementById("projects");
  container.innerHTML = "<p class='text-white text-xl'>Loading...</p>"; // optional loading text

  fetch("js/project.json")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      return res.json();
    })
    .then((posts) => {
      container.innerHTML = "";
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
    })
    .catch((err) => {
      console.error("Error fetching JSON:", err);
      container.innerHTML = "<p class='text-red-500'>Failed to load posts.</p>";
    });
}

//===========================================

const tabs_up = document.querySelectorAll(".navigationBar > div");
const tabs_bottom = document.querySelectorAll(".bottom-navigationBar > div");

function Highlight(name) {
  const prev = document.getElementById(lastid);
  prev.classList.add("hidden");
  const id = document.getElementById(name);
  id.classList.remove("hidden");
  lastid = name;
  localStorage.setItem("activeSection", name);

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

//===========================================

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

//===========================================

function toggleWork(sectionId, arrowId, extension) {
  const allWork = document.getElementById(sectionId);
  const arrow = document.getElementById(arrowId);

  // Toggle show/hide
  allWork.classList.toggle("hidden");
  arrow.classList.toggle("rotate-180");


}

function renderPosts(containerId, posts, extension) {
  const container = document.getElementById(containerId);
  container.innerHTML = ""; 

  if (extension === "json") {
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

//===========================================

const files = [
  ["json", "js/all-achievement.json", "all-achievement"],
  ["json", "js/all-education.json", "all-education"],
  ["json", "js/all-work.json", "all-work"],
  ["txt", "js/all-coding-skill.txt", "all-coding-skill"],
  ["txt", "js/all-github-repo.txt", "all-github-repo"],
  ["txt", "js/all-interest.txt", "all-interest"],
  ["txt", "js/all-problem-solving.txt", "all-problem-solving"],
  ["txt", "js/all-skill.txt", "all-skill"],
];

const fetchDate = () => {
  files
    .forEach((file) => {
      if (file[0] === "json") {
        fetch(file[1])
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok for " + file[2]);
            }
            return res.json();
          })
          .then((data) => renderPosts(file[2], data, "json"))
          .catch((err) => console.error("Error fetching data:", err));
      } else {
        fetch(file[1])
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok for " + file[2]);
            }
            return res.text();
          })
          .then((data) => renderPosts(file[2], data, "txt"))
          .catch((err) => console.error("Error fetching data:", err));
      }
    })
};
