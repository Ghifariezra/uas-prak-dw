const btn = document.getElementById("hamburger-btn");
const openIcon = document.getElementById("icon-open");
const closeIcon = document.getElementById("icon-close");
const mobileNav = document.getElementById("mobile-nav");

btn.addEventListener("click", () => {
    openIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");

    // Slide toggle mobile nav
    mobileNav.classList.toggle("hidden");
    mobileNav.classList.toggle("scale-y-0");
});
