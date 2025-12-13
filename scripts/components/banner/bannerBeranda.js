import { categories } from "../../data/category.js";
import { bukaDetail } from "../../router/router.js";

export default function bannerBeranda() {
    const container = document.getElementById("banner-home");
    if (!container) return;

    // ambil max 5 banner
    const banners = categories.slice(0, 5);

    container.innerHTML = `
        <!-- Carousel wrapper -->
        <div class="relative h-56 sm:h-64 md:h-80 overflow-hidden rounded-2xl">
            ${banners.map((item, index) => `
                <div
                    class="${index === 0 ? "" : "hidden"} duration-700 ease-in-out"
                    data-carousel-item
                >
                    <img
                        src="${item.image}"
                        class="absolute block w-full h-full object-cover"
                        alt="${item.title}"
                    />

                    <!-- Overlay -->
                    <div
                        class="absolute inset-0 bg-black/40 flex items-end cursor-pointer"
                        data-title="${item.title}"
                    >
                        <div class="p-6 sm:p-8 text-white">
                            <h1 class="text-2xl sm:text-3xl font-bold mb-2">
                                ${item.title}
                            </h1>
                            <p class="line-clamp-2 text-sm sm:text-base opacity-90">
                                ${item.content}
                            </p>
                        </div>
                    </div>
                </div>
            `).join("")}
        </div>

        <!-- Indicators -->
        <div class="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-3">
            ${banners.map((_, i) => `
                <button
                    type="button"
                    class="w-3 h-3 rounded-full bg-white/50 hover:bg-white"
                    aria-label="Slide ${i + 1}"
                    data-carousel-slide-to="${i}"
                ></button>
            `).join("")}
        </div>

        <!-- Controls -->
        <button
            type="button"
            class="cursor-pointer absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4"
            data-carousel-prev
        >
            <span class="bg-white/40 p-4 rounded-full">❮</span>
        </button>

        <button
            type="button"
            class="cursor-pointer absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4"
            data-carousel-next
        >
            <span class="bg-white/40 p-4 rounded-full">
            ❯
            </span>
        </button>
    `;

    container.querySelectorAll("[data-title]").forEach(el => {
        el.addEventListener("click", () => {
            bukaDetail(el.dataset.title);
        });
    });

    if (window.initCarousels) {
        window.initCarousels();
    }
}
