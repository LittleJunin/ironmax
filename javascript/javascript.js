const header = document.getElementById("home");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // 200px do topo
    header.classList.add("escondido");
  } else {
    header.classList.remove("escondido");
  }
});
