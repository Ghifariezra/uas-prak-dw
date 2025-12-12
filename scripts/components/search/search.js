import { categories } from "../../data/category.js";

// Menyimpan hasil pencarian terakhir
let lastSearchResults = [];
let lastQuery = "";

export function initSearchToggle() {
    const searchIconDesktop = document.getElementById("search-icon-desktop");
    const searchIconMobile = document.getElementById("search-icon-mobile");
    const searchView = document.getElementById("search-view");
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");

    if (!content || !searchView || !footer) return;

    const toggleView = () => {
        const isOpen = !searchView.classList.contains("hidden");

        if (isOpen) {
            searchView.classList.add("hidden");
            content.classList.remove("hidden");
            footer.classList.remove("hidden");
        } else {
            searchView.classList.remove("hidden");
            content.classList.add("hidden");
            footer.classList.add("hidden");

            const input = document.getElementById("search-input");
            if (input) input.focus();
        }
    };

    if (searchIconDesktop) searchIconDesktop.addEventListener("click", toggleView);
    if (searchIconMobile) searchIconMobile.addEventListener("click", toggleView);
}

export function bukaDetail(title) {
    const cat = categories.find(c => c.title === title);
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");
    const searchView = document.getElementById("search-view");

    if (!cat || !content || !footer) return;

    if (searchView) searchView.classList.add("hidden");

    content.innerHTML = `
        <div class="p-6 bg-white rounded-xl shadow-lg">
            <h2 class="text-2xl font-bold mb-4">${cat.title}</h2>
            <img src="${cat.image}" alt="${cat.title}" class="w-full h-64 object-cover rounded mb-4"/>
            <p class="text-gray-700 mb-4">${cat.desc}</p>
            <div class="text-gray-800 mb-6">${cat.content || ""}</div>
            <button id="back-btn" class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Kembali
            </button>
        </div>
    `;

    const backBtn = document.getElementById("back-btn");
    if (backBtn) {
        backBtn.addEventListener("click", () => {
            renderSearchResults(lastQuery, lastSearchResults);
        });
    }

    content.classList.remove("hidden");
    footer.classList.remove("hidden");
}

// Render hasil pencarian
function renderSearchResults(query, resultsArray) {
    const results = document.getElementById("search-results");
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");
    const searchView = document.getElementById("search-view");

    if (!results || !content || !footer || !searchView) return;

    searchView.classList.remove("hidden");
    content.classList.add("hidden");
    footer.classList.add("hidden");

    results.innerHTML = "";

    if (!query) {
        results.innerHTML = `
            <div class="p-4 rounded-lg shadow bg-white border col-span-2">
                <p class="text-gray-700 text-sm">Mulai ketik untuk mencari...</p>
            </div>`;
        return;
    }

    if (resultsArray.length === 0) {
        results.innerHTML = `
            <div class="p-4 rounded-lg shadow bg-white border col-span-2">
                <p class="text-gray-700 text-sm">Tidak ada hasil ditemukan.</p>
            </div>`;
        return;
    }

    resultsArray.forEach(cat => {
        const card = document.createElement("div");
        card.className = "flex bg-white border rounded-xl shadow overflow-hidden hover:shadow-lg transition mb-4 cursor-pointer";

        card.innerHTML = `
            <div class="w-40 h-32 sm:w-48 sm:h-36 bg-gray-200 flex-shrink-0">
                <img src="${cat.image}" alt="${cat.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-4 flex flex-col justify-center">
                <h3 class="text-lg font-bold text-gray-800 mb-1">${cat.title}</h3>
                <p class="text-gray-600 text-sm line-clamp-3">${cat.desc}</p>
            </div>
        `;

        card.addEventListener("click", () => bukaDetail(cat.title));

        results.appendChild(card);
    });
}

export function initSearchInput() {
    const input = document.getElementById("search-input");
    const results = document.getElementById("search-results");

    if (!input || !results) return;

    input.addEventListener("input", () => {
        const query = input.value.trim().toLowerCase();

        const filtered = categories.filter(cat =>
            cat.title.toLowerCase().startsWith(query)
        );

        lastQuery = query;
        lastSearchResults = filtered;

        renderSearchResults(query, filtered);
    });
}

// Tutup search view
export function closeSearchView() {
    const searchView = document.getElementById("search-view");
    const content = document.getElementById("content");
    const footer = document.getElementById("footer");

    if (!searchView || !content || !footer) return;

    searchView.classList.add("hidden");
    content.classList.remove("hidden");
    footer.classList.remove("hidden");
}
