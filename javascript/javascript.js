document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".header-menu");
  const hamburger = document.querySelector(".hamburger");
  const menuLinks = document.querySelectorAll(".header-menu a");

  if (!menu || !hamburger) {
    console.warn("header-menu ou hamburger não encontrados", {
      menu,
      hamburger,
    });
    return;
  }

  // expõe a função para o onclick existente: onclick="toggleMenu(this)"
  window.toggleMenu = function (el) {
    // usa as referências encontradas (mais seguro)
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");

    // opcional: bloqueia rolagem quando o menu estiver aberto
    document.body.classList.toggle(
      "no-scroll",
      menu.classList.contains("active")
    );
  };

  // fecha o menu ao clicar em qualquer link
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  });

  // opcional: fecha ao clicar fora do menu (útil para UX)
  document.addEventListener("click", function (e) {
    if (
      menu.classList.contains("active") &&
      !e.target.closest(".header-menu") &&
      !e.target.closest(".hamburger")
    ) {
      menu.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.classList.remove("no-scroll");
    }
  });
});
