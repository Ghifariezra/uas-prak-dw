import renderCards from "../cards/category.js"
import { typeCategory } from "../../data/category.js"

export default function renderMenuTypeCategory() {
    const containerTypes = document.getElementById("types-category")
    if (!containerTypes) return;

    containerTypes.innerHTML = typeCategory.map(type => `
        <div 
            class="
                group flex flex-col items-center justify-center
                p-6 rounded-2xl border border-gray-200 bg-white 
                shadow-sm hover:shadow-lg 
                hover:border-blue-400 hover:bg-blue-50/40
                transition-all duration-300 cursor-pointer

                flex-[0_0_100%] sm:flex-[0_0_48%] lg:flex-[0_0_30%]
            "
            data-category="${type.key}"
        >

            <!-- ICON WRAPPER -->
            <div class="
                w-16 h-16 flex items-center justify-center 
                rounded-xl bg-white shadow 
                group-hover:shadow-md group-hover:scale-110
                transition-all duration-300
            ">
                <img 
                    src="${type.image}" 
                    alt="${type.alt}" 
                    class="w-12 h-12 object-contain"
                >
            </div>

            <!-- TITLE -->
            <span class="
                mt-3 text-gray-800 font-semibold 
                text-base sm:text-lg tracking-wide
                group-hover:text-blue-600 transition
            ">
                ${type.title}
            </span>
        </div>
    `).join("");

    containerTypes.querySelectorAll("[data-category]").forEach(btn => {
        btn.addEventListener("click", () => {
            const key = btn.dataset.category;

            renderCards(key, "kategori");
        });
    });
}