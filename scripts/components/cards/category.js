import categories from "../../data.js"

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
                    <h1 class="text-lg font-semibold text-gray-800">${cat.title}</h1>
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
