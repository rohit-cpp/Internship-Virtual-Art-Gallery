const artworks = [
  {
    id: 1,
    image: "./images/colorful-chaos.jpeg",
    title: "Colorful Chaos",
    description: "An abstract representation of urban energy.",
    style: "abstract",
  },
  {
    id: 2,
    image: "./images/geometric-harmony.jpg",
    title: "Geometric Harmony",
    description: "A modern take on symmetry and shapes.",
    style: "geometric",
  },
  {
    id: 3,
    image: "./images/modern-whisper.webp",
    title: "Modern Whisper",
    description: "A minimalistic whisper of emotion and calm.",
    style: "minimal",
  },
  {
    id: 4,
    image: "./images/digital-fragment.avif",
    title: "Digital Fragment",
    description: "A digital take on the identity of modern beings.",
    style: "digital",
  },
];

function renderGallery(arts) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  arts.forEach((art) => {
    const img = document.createElement("img");
    img.src = art.image;
    img.alt = art.title;
    img.onclick = () => showDetails(art);
    gallery.appendChild(img);
  });
}

function filterArt(style) {
  if (style === "all") {
    renderGallery(artworks);
  } else {
    const filtered = artworks.filter((art) => art.style === style);
    renderGallery(filtered);
  }

  // Hide details if filter is applied
  document.getElementById("art-details").classList.add("hidden");
}

function showDetails(art) {
  document.getElementById("detail-title").textContent = art.title;
  document.getElementById("detail-desc").textContent = art.description;
  document.getElementById("detail-style").textContent = art.style;
  document.getElementById("download-btn").href = art.image;

  document.getElementById("art-details").classList.remove("hidden");
}

// Load all artworks on page load
document.addEventListener("DOMContentLoaded", () => {
  renderGallery(artworks);
});
