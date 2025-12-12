import {
    categories
} from "../../data/category.js";

export default function bannerBeranda() {
    const container = document.getElementById("banner-home");
    if (!container) return;

    const randomCategory = categories[Math.floor(Math.random() * categories.length)];

    container.innerHTML = `
        <img src="${randomCategory.image}" class="w-full h-52 sm:h-64 md:h-72 object-cover" />

        <div class="p-6 sm:p-8">
            <h1 class="text-2xl sm:text-3xl font-bold mb-2">${randomCategory.title}</h1>
            <p class="text-gray-600 w-full line-clamp-2">
                ${randomCategory.content}
            </p>
        </div>
    `;
}