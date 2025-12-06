// MENU MOBILE
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("show");
});

// FECHAR MENU AO CLICAR
document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("show");
    });
});

// EFEITO VIDA (leve)
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.1)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});
