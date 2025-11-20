// ================================
// 🎮 Terraria — Enciclopédia PT‑BR
// Arquivo: main.js (scripts gerais)
// ================================

console.log("Site Terraria carregado com sucesso!");

// 🔧 Exemplo: menu automático abre/fecha no mobile
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector("#menu-btn");
  const nav = document.querySelector("nav");

  if(menuBtn){
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("aberto");
    });
  }
});

// * Você pode adicionar scripts específicos depois
// Ex: animações, trocar tema, tooltips, sistema de busca, etc.

