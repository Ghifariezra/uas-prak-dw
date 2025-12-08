import pages from "./pages.js";

// Cache DOM
const btn = document.getElementById("hamburger-btn");
const openIcon = document.getElementById("icon-open");
const closeIcon = document.getElementById("icon-close");
const mobileNav = document.getElementById("mobile-nav");
const content = document.getElementById("content");

// Toggle Menu Handler
function toggleMenu() {
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    mobileNav.classList.toggle("hidden");
    mobileNav.classList.toggle("scale-y-0");
}

// Load Page Content
function loadPage(page) {
    if (!pages[page]) return;

    content.style.opacity = 0;

    setTimeout(() => {
        content.innerHTML = pages[page];
        content.style.opacity = 1;
    }, 200);

    location.hash = `/${page}`;
}

// Routing Based on Hash (#/beranda …)
function handleRoute() {
    const page = location.hash.replace("#/", "") || "beranda";
    loadPage(page);
}

// Delegasi Event untuk Semua Link SPA
document.body.addEventListener("click", function (e) {
    if (e.target.matches("[data-page]")) {
        e.preventDefault();

        const page = e.target.dataset.page;
        loadPage(page);

        mobileNav.classList.add("hidden", "scale-y-0");
        openIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
    }
});

// Init
btn.addEventListener("click", toggleMenu);
window.addEventListener("hashchange", handleRoute);

// First load
handleRoute();
