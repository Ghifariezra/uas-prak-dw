import pages from "../pages.js";
import renderCards from "../components/cards/category.js";
import renderMenuTypeCategory from "../components/menus/typeCategory.js";
import renderDetail from "../components/detail/detail.js";
import { content } from "../core/dom.js";
import bannerBeranda from "../components/banner/bannerBeranda.js";
import initContactForm from "../components/form/contactForm.js";

export function bukaDetail(title) {
    location.hash = `/detail/${encodeURIComponent(title)}`;
}
window.bukaDetail = bukaDetail;

export function loadPage(page) {
    if (!pages[page]) return;

    content.style.opacity = 0;

    setTimeout(() => {
        content.innerHTML = pages[page];
        content.style.opacity = 1;

        switch (page) {
            case 'beranda':
                bannerBeranda();
                renderCards("all", "beranda");
                break;

            case 'kategori':
                renderMenuTypeCategory();
                renderCards("all", "kategori");
                break;

            case 'kontak':
                initContactForm();
                break;
        }
    }, 150);

    location.hash = `/${page}`;
}

export function handleRoute() {
    const hash = location.hash.replace("#/", "");

    if (hash.startsWith("detail/")) {
        const title = decodeURIComponent(hash.split("/")[1]);
        content.innerHTML = pages.detail;
        renderDetail(title);
        return;
    }

    const page = hash || "beranda";
    loadPage(page);
}
