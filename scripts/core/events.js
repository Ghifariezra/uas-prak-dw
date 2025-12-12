import { btn, openIcon, closeIcon, mobileNav } from "./dom.js";
import { loadPage, handleRoute } from "../router/router.js";

export function initEvents() {
    // hamburger
    btn.addEventListener("click", () => {
        openIcon.classList.toggle("hidden");
        closeIcon.classList.toggle("hidden");
        mobileNav.classList.toggle("hidden");
        mobileNav.classList.toggle("scale-y-0");
    });

    // delegasi link SPA
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-page]")) {
            e.preventDefault();

            loadPage(e.target.dataset.page);

            mobileNav.classList.add("hidden", "scale-y-0");
            openIcon.classList.remove("hidden");
            closeIcon.classList.add("hidden");
        }
    });

    // hash router
    window.addEventListener("hashchange", handleRoute);
}
