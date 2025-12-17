import { categories, edukasi, hiburan, lingkunganSocial, olahraga, politik } from "../../data/category.js";

const searchState = {
    lastResults: [],
    lastQuery: ""
};

const allData = [
    ...categories,
    ...politik,
    ...hiburan,
    ...edukasi,
    ...olahraga,
    ...lingkunganSocial
];

export function initSearchToggle() {
    const desktop = document.getElementById("search-icon-desktop");
    const mobile = document.getElementById("search-icon-mobile");

    desktop?.addEventListener("click", toggleSearchView);
    mobile?.addEventListener("click", toggleSearchView);
}

function toggleSearchView() {
    const searchView = document.getElementById("search-view");
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");

    if (!searchView || !content || !footer) return;

    searchView.classList.contains("hidden")
        ? openSearchView()
        : closeSearchView();
}

function openSearchView() {
    document.getElementById("search-view")?.classList.remove("hidden");
    document.getElementById("content")?.classList.add("hidden");
    document.getElementById("footer")?.classList.add("hidden");
    document.getElementById("search-input")?.focus();
}

export function closeSearchView() {
    document.getElementById("search-view")?.classList.add("hidden");
    document.getElementById("content")?.classList.remove("hidden");
    document.getElementById("footer")?.classList.remove("hidden");
}

export function initSearchInput() {
    const input = document.getElementById("search-input");
    if (!input) return;

    input.addEventListener("input", handleSearchInput);
}

function handleSearchInput(e) {
    const query = e.target.value.trim().toLowerCase();

    if (!query) {
        renderSearchResults("", []);
        return;
    }

    const results = allData.filter(item =>
        item.title?.toLowerCase().startsWith(query)
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
        renderEmptyState(container);
        return;
    }

    if (resultsArray.length === 0) {
        renderNoResults(container);
        return;
    }

    renderResultCount(container, resultsArray.length);
    renderResultCards(container, resultsArray);
}

function renderEmptyState(container) {
    container.innerHTML = `
        <div class="col-span-1 sm:col-span-2 p-4 bg-white border rounded text-center">
            <p class="text-sm text-gray-600">Mulai ketik untuk mencari...</p>
        </div>
    `;
}

function renderNoResults(container) {
    container.innerHTML = `
        <div class="col-span-1 sm:col-span-2 p-4 bg-white border rounded text-center">
            <p class="text-sm text-gray-600">Tidak ada hasil ditemukan.</p>
        </div>
    `;
}

function renderResultCount(container, count) {
    const div = document.createElement("div");
    div.className =
        "col-span-1 sm:col-span-2 text-sm sm:text-base font-semibold text-gray-800";
    div.textContent = `Total berita ditemukan: ${count}`;
    container.appendChild(div);
}

function renderResultCards(container, results) {
    results.forEach(item => {
        container.appendChild(createResultCard(item));
    });
}

function createResultCard(item) {
    const card = document.createElement("div");
    card.className =
        "group flex flex-col sm:flex-row bg-white rounded-xl shadow-sm " +
        "hover:shadow-lg transition cursor-pointer overflow-hidden";

    card.innerHTML = `
    <!-- Image wrapper (PARENT) -->
    <div class="relative w-full h-48 sm:w-44 sm:h-full flex-shrink-0 overflow-hidden">
        <img 
            src="${item.image}"
            alt="${item.title}"
            class="absolute inset-0 w-full h-full object-cover">
    </div>

    <!-- Content -->
    <div class="p-4 flex flex-col justify-center">
        <h3 class="text-base sm:text-lg font-bold text-gray-800 mb-1 line-clamp-2">
            ${item.title}
        </h3>
        <p class="text-sm text-gray-600 line-clamp-3">
            ${item.desc || ""}
        </p>
    </div>
`;


    card.addEventListener("click", () => {
        closeSearchView();
        window.bukaDetail(item.title);
    });

    return card;
}

