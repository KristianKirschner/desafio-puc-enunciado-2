const photos = [
  { title: "Montanha", url: "https://picsum.photos/id/29/400/300" },
  { title: "Floresta", url: "https://picsum.photos/id/28/400/300" },
  { title: "Praia", url: "https://picsum.photos/id/12/400/300" },
  { title: "Cidade", url: "https://picsum.photos/id/43/400/300" },
  { title: "Deserto", url: "https://picsum.photos/id/141/400/300" },
  { title: "Cachorro", url: "https://picsum.photos/id/1025/400/300" },
  { title: "Flor", url: "https://picsum.photos/id/152/400/300" },
  { title: "Parede", url: "https://picsum.photos/id/210/400/300" },
  { title: "Ursos", url: "https://picsum.photos/id/1020/400/300" },
  { title: "Neblina", url: "https://picsum.photos/id/1021/400/300" }
];

const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

function renderPhotos(filteredPhotos) {
  gallery.innerHTML = "";

  if (filteredPhotos.length === 0) {
    noResults.classList.remove("hidden");
    return;
  }

  noResults.classList.add("hidden");

  filteredPhotos.forEach(photo => {
    const div = document.createElement("div");
    div.className = "photo bg-white rounded shadow hover:scale-105 hover:shadow-lg transition transform";

    div.innerHTML = `
      <img src="${photo.url}" alt="${photo.title}" class="w-full rounded-t">
      <p class="mt-2 text-center font-semibold">${photo.title}</p>
    `;

    gallery.appendChild(div);
  });
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filtered = photos.filter(photo =>
    photo.title.toLowerCase().includes(searchTerm)
  );
  renderPhotos(filtered);
});

// inicial
renderPhotos(photos);
