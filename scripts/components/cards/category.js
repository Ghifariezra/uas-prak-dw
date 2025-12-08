import { categories } from "../../data/category.js"

export default function renderCards() {
    const container = document.getElementById("cards-category");
    if (!container) return;

    container.innerHTML = categories
        .map(cat => `
            <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
                <!-- Image -->
                <div class="w-full aspect-[4/3] overflow-hidden">
                    <img class="w-full h-full object-cover"
                        src="${cat.image}"
                        alt="${cat.title}" />
                </div>

                <!-- Content -->
                <div class="p-4 flex flex-col gap-2 flex-grow">
                    <div class="flex justify-between items-start">
                        <h1 class="text-lg font-semibold text-gray-800 leading-tight">
                            ${cat.title}
                        </h1>
                        <span class="text-xs text-gray-500 whitespace-nowrap">
                            ${cat.published}
                        </span>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed line-clamp-3">${cat.desc}</p>
                </div>

                <!-- Button -->
                <div class="p-4 pt-0 self-end">
                    <button class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors cursor-pointer">
                        Baca Selengkapnya...
                    </button>
                </div>
            </div>
        `)
        .join("");
}
