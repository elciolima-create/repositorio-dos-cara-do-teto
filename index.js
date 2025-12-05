// Menu Mobile
document.addEventListener("DOMContentLoaded", () => {

  const menuBtn = document.querySelector("#menu-btn");
  const nav = document.querySelector("#menu");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("aberto");
  });

  console.log("Site Terraria RPG carregado — JS ativo");
});
