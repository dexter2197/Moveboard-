function confirmDownload() {
  return confirm("Do you want to download this movie?");
}

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll(".movie").forEach((movie) => {
    const title = movie.getAttribute("data-title").toLowerCase();
    movie.style.display = title.includes(query) ? "block" : "none";
  });
});
