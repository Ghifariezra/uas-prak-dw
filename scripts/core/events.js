import { btn, openIcon, closeIcon, mobileNav } from "./dom.js";
import { loadPage, handleRoute } from "../router/router.js";
import { closeSearchView } from "../components/search/search.js";

export function initEvents() {

    // === HAMBURGER MENU ===
    btn.addEventListener("click", () => {
        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
        mobileNav.classList.toggle("hidden");
        mobileNav.classList.toggle("scale-y-0");
    });


    // === Search Close ===
    document.querySelectorAll("[data-page]").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const page = item.dataset.page;

            closeSearchView();
            loadPage(page);

            mobileNav.classList.add("hidden", "scale-y-0");
            openIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
        });
    });


    // === HASH ROUTER ===
    window.addEventListener("hashchange", handleRoute);
}
