import { categories as newsData } from "../../data/category.js";

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default function renderNews() {
    const container = document.getElementById("newsGrid");
    if (!container) return;

    const randomNews = shuffle([...newsData]).slice(0, 6);

    container.innerHTML = randomNews
        .map(news => {
            return `
            <div 
                class="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
                onclick="bukaDetail('${news.title}')"
            >
                <img src="${news.image}" class="w-full h-40 object-cover" />

                <div class="p-4">
                    <p class="text-orange-600 text-sm">${news.published}</p>
                    <h3 class="mt-1 text-gray-800 font-semibold leading-tight">
                        ${news.title}
                    </h3>
                </div>
            </div>
            `;
        })
        .join("");
}
