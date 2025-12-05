console.log("Terraria Enciclopédia carregada!");


// MENU MOBILE
const menuBtn = document.querySelector("#menu-btn");
const nav = document.querySelector("nav");


if (menuBtn) {
menuBtn.addEventListener("click", () => {
nav.classList.toggle("aberto");
});
}
