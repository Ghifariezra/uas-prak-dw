import { typeCategory } from "../../data/category.js"

export default function renderMenuTypeCategory() {
    const containerTypes = document.getElementById("types-category")
    if (!containerTypes) return;

    containerTypes.innerHTML = typeCategory.map(
        type => `
            <div class="flex flex-col items-center gap-3 
    flex-[0_0_100%] sm:flex-[0_0_45%] lg:flex-[0_0_28%]
    p-4 bg-gray-50 rounded-xl border border-gray-200 shadow-sm 
    hover:shadow-md hover:bg-gray-100 hover:-translate-y-1
    transition-all duration-300 cursor-pointer">

    <div class="w-14 h-14 flex items-center justify-center rounded-lg bg-white shadow-inner">
        <img 
            class="w-10 h-10 object-contain"
            src="${type.image}" 
            alt="${type.alt}"
        >
    </div>

    <span class="text-gray-800 font-medium text-sm sm:text-base tracking-wide">
        ${type.title}
    </span>
</div>

        `
    )
}