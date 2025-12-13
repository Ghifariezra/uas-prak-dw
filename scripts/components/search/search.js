import { categories } from "../../data/category.js";

const searchState = {
    lastQuery: "",
    lastResults: []
};

export function initSearchToggle() {
    const searchIconDesktop = document.getElementById("search-icon-desktop");
    const searchIconMobile = document.getElementById("search-icon-mobile");

    searchIconDesktop?.addEventListener("click", toggleSearchView);
    searchIconMobile?.addEventListener("click", toggleSearchView);
}

function toggleSearchView() {
    const searchView = document.getElementById("search-view");
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");

    if (!searchView || !content || !footer) return;

    const isOpen = !searchView.classList.contains("hidden");

    if (isOpen) {
        closeSearchView();
    } else {
        openSearchView();
    }
}

function openSearchView() {
    const searchView = document.getElementById("search-view");
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");
    const input = document.getElementById("search-input");

    searchView?.classList.remove("hidden");
    content?.classList.add("hidden");
    footer?.classList.add("hidden");

    input?.focus();
}

export function closeSearchView() {
    const searchView = document.getElementById("search-view");
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");

    searchView?.classList.add("hidden");
    content?.classList.remove("hidden");
    footer?.classList.remove("hidden");
}

export function initSearchInput() {
    const input = document.getElementById("search-input");
    if (!input) return;

    input.addEventListener("input", handleSearchInput);
}

function handleSearchInput(e) {
    const query = e.target.value.trim().toLowerCase();

    const results = categories.filter(cat =>
        cat.title.toLowerCase().startsWith(query)
    );

    searchState.lastQuery = query;
    searchState.lastResults = results;

    renderSearchResults(query, results);
}

function renderSearchResults(query, resultsArray) {
    const container = document.getElementById("search-results");
    if (!container) return;

    container.innerHTML = "";

    if (!query) {
        renderEmpty(container);
        return;
    }

    if (resultsArray.length === 0) {
        renderNotFound(container);
        return;
    }

    renderTotal(container, resultsArray.length);
    renderCards(container, resultsArray);
}

function renderEmpty(container) {
    container.innerHTML = `
        <div class="p-4 bg-white border rounded-lg col-span-2">
            <p class="text-sm text-gray-600">
                Mulai ketik untuk mencari berita...
            </p>
        </div>
    `;
}

function renderNotFound(container) {
    container.innerHTML = `
        <div class="p-4 bg-white border rounded-lg col-span-2">
            <p class="text-sm text-gray-600">
                Berita tidak ditemukan.
            </p>
        </div>
    `;
}

function renderTotal(container, total) {
    const div = document.createElement("div");
    div.className = "mb-4 font-semibold text-gray-800 col-span-2";
    div.textContent = `Total berita ditemukan: ${total}`;
    container.appendChild(div);
}

function renderCards(container, resultsArray) {
    resultsArray.forEach(item => {
        container.appendChild(createResultCard(item));
    });
}

function createResultCard(category) {
    const card = document.createElement("div");
    card.className =
        "flex bg-white border rounded-xl shadow hover:shadow-lg transition cursor-pointer col-span-2";

    card.innerHTML = `
        <div class="w-40 h-32 sm:w-48 sm:h-36 bg-gray-200">
            <img src="${category.image}"
                 alt="${category.title}"
                 class="w-full h-full object-cover">
        </div>
        <div class="p-4 flex flex-col justify-center">
            <h3 class="text-lg font-bold text-gray-800 mb-1">
                ${category.title}
            </h3>
            <p class="text-sm text-gray-600 line-clamp-3">
                ${category.desc}
            </p>
        </div>
    `;

    card.addEventListener("click", () => {
        closeSearchView();
        window.bukaDetail(category.title);
    });

    return card;
}
