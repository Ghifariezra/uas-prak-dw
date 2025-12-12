import { categories } from "../../data/category.js";

// ========== STATE MANAGEMENT ==========
const searchState = {
    lastResults: [],
    lastQuery: ""
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
    isOpen ? closeSearchView() : openSearchView();
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

// ========== SEARCH INPUT ==========
export function initSearchInput() {
    const input = document.getElementById("search-input");
    if (!input) return;

    input.addEventListener("input", handleSearchInput);
}

function handleSearchInput(e) {
    const query = e.target.value.trim().toLowerCase();

    const filteredResults = categories.filter(cat =>
        cat.title.toLowerCase().startsWith(query)
    );

    // Update state
    searchState.lastQuery = query;
    searchState.lastResults = filteredResults;

    renderSearchResults(query, filteredResults);
}

// ========== RENDER SEARCH RESULTS ==========
function renderSearchResults(query, resultsArray) {
    const results = document.getElementById("search-results");
    if (!results) return;

    results.innerHTML = "";

    if (!query) return renderEmptyState(results);
    if (resultsArray.length === 0) return renderNoResults(results);

    renderResultCount(results, resultsArray.length);
    renderResultCards(results, resultsArray);
}

function renderEmptyState(container) {
    container.innerHTML = `
        <div class="p-4 rounded-lg shadow bg-white border col-span-2">
            <p class="text-gray-700 text-sm">Mulai ketik untuk mencari...</p>
        </div>
    `;
}

function renderNoResults(container) {
    container.innerHTML = `
        <div class="p-4 rounded-lg shadow bg-white border col-span-2">
            <p class="text-gray-700 text-sm">Tidak ada hasil ditemukan.</p>
        </div>
    `;
}

function renderResultCount(container, count) {
    const totalDiv = document.createElement("div");
    totalDiv.className = "mb-4 text-gray-800 font-semibold col-span-2";
    totalDiv.textContent = `Berita Yang Ditemukan: ${count}`;
    container.appendChild(totalDiv);
}

function renderResultCards(container, resultsArray) {
    resultsArray.forEach(cat => {
        const card = createResultCard(cat);
        container.appendChild(card);
    });
}

function createResultCard(category) {
    const card = document.createElement("div");
    card.className = "flex bg-white border rounded-xl shadow overflow-hidden hover:shadow-lg transition cursor-pointer col-span-2";

    card.innerHTML = `
        <div class="w-40 h-32 sm:w-48 sm:h-36 bg-gray-200 flex-shrink-0">
            <img src="${category.image}" 
                 alt="${category.title}" 
                 class="w-full h-full object-cover">
        </div>
        <div class="p-4 flex flex-col justify-center">
            <h3 class="text-lg font-bold text-gray-800 mb-1">${category.title}</h3>
            <p class="text-gray-600 text-sm line-clamp-3">${category.desc}</p>
        </div>
    `;

    card.addEventListener("click", () => bukaDetail(category.title));
    return card;
}

// ========== DETAIL VIEW ==========
export function bukaDetail(title) {
    const category = categories.find(c => c.title === title);
    if (!category) return;

    const content = document.getElementById("content");
    const footer = document.getElementById("footer");
    const searchView = document.getElementById("search-view");

    if (!content || !footer) return;

    searchView?.classList.add("hidden");
    content.innerHTML = createDetailView(category);

    setupBackButton();
    content.classList.remove("hidden");
    footer.classList.remove("hidden");
}

function createDetailView(category) {
    return `
        <div class="p-6 bg-white rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold mb-4">${category.title}</h2>
            <img src="${category.image}" 
                 alt="${category.title}" 
                 class="w-full h-64 object-cover rounded mb-4">
            <p class="text-gray-700 mb-4">${category.desc}</p>
            <div class="text-gray-800 mb-6">${category.content || ""}</div>
            <button id="back-btn" 
                    class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                Kembali
            </button>
        </div>
    `;
}

function setupBackButton() {
    const backBtn = document.getElementById("back-btn");
    if (!backBtn) return;

    backBtn.addEventListener("click", () => {
        renderSearchResults(searchState.lastQuery, searchState.lastResults);
        openSearchView();
    });
}
