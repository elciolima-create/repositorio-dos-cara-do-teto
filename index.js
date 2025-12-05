console.log("Terraria RPG iniciado!");

// MENU MOBILE
const btn = document.querySelector("#menu-btn");
const menu = document.querySelector("#menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("show");
});

// THEME SWITCH
const themeBtn = document.querySelector("#theme-btn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent =
    document.body.classList.contains("light") ? "🌙 Tema Escuro" : "☀️ Tema Claro";
});
