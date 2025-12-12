import {
    categories,
    politik,
    hiburan,
    edukasi,
    olahraga,
    lingkunganSocial
} from "../../data/category.js";
import tooltipDesc from "../tooltips/tooltip.js";

export default function renderCards(key = "all", page = "beranda") {
    const container = document.getElementById(
        page === "kategori" ? "cards-category" : "cards-home"
    );
    const titleNews = document.getElementById("new-news");
    if (!container) return;

    let data = [];

    switch (key) {
        case "politik": data = politik; break;
        case "hiburan": data = hiburan; break;
        case "edukasi": data = edukasi; break;
        case "olahraga": data = olahraga; break;
        case "lingkungan-social": data = lingkunganSocial; break;
        default: data = categories; break;
    }

    if (titleNews) {
        const titles = {
            politik: "Berita Politik",
            hiburan: "Berita Hiburan",
            edukasi: "Berita Edukasi",
            olahraga: "Berita Olahraga",
            "lingkungan-social": "Berita Lingkungan & Social",
            all: "Berita Terbaru"
        };
        titleNews.textContent = titles[key] || "Berita Terbaru";
    }

    if (page === "beranda") {
        data = data.slice(0, 3);
    }

    container.innerHTML = data
        .map((cat, index) => {
            const tooltipId = `tooltip-${page}-${key}-${index}`;

            return `
                <div class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 flex flex-col relative">

                    <div class="w-full aspect-[4/3] overflow-hidden">
                        <img class="w-full h-full object-cover" src="${cat.image}" alt="${cat.title}" />
                    </div>

                    <div class="p-4 flex flex-col gap-2 flex-grow">
                        <div class="flex justify-between items-start">
                            <h1 class="text-lg font-semibold text-gray-800 leading-tight">${cat.title}</h1>
                            <span class="text-xs text-gray-500 whitespace-nowrap">${cat.published}</span>
                        </div>

                        ${tooltipDesc(cat.content, tooltipId)}
                    </div>
                    
                    <div class="p-4 pt-0 self-end">
                        <button onclick="bukaDetail('${cat.title}')"
                                class="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-md cursor-pointer">
                            Baca Selengkapnya...
                        </button>
                    </div>
                </div>
            `;
        })
        .join("");

    window.initTooltips();
}
