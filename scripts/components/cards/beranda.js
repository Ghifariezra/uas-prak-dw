import {
    categories
} from "../../data/category.js";

export default function renderCardsBeranda() {
    const container = document.getElementById("cards-home");
    if (!container) return;

    container.innerHTML = categories.slice(0, 6)
        .map(cat => {
            return `
            <div onclick="bukaDetail('${cat.title}')" class="bg-white rounded-xl shadow-sm overflow-hidden transform duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="${cat.image}" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">${cat.title}</h3>
                    <p class="text-gray-600 text-sm mt-1">${cat.desc}</p>
                </div>
            </div>
        `
        })
        .join("");
}