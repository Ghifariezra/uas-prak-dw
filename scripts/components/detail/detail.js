import {
    categories,
    politik,
    hiburan,
    edukasi,
    olahraga,
    lingkunganSocial
} from "../../data/category.js"

export default function renderDetail(title) {
    const container = document.getElementById("detail-container");

    const all = [
        ...categories,
        ...politik,
        ...hiburan,
        ...edukasi,
        ...olahraga,
        ...lingkunganSocial
    ];

    const item = all.find(d => d.title === title);

    if (!item) {
        container.innerHTML = `<p>Data tidak ditemukan.</p>`;
        return;
    }

    container.innerHTML = `
        <div class="w-full mx-auto bg-white p-6 rounded-xl shadow-md mt-5">
            <img src="${item.image}" class="w-full rounded-xl mb-4" />

            <h1 class="text-3xl font-bold mb-2">${item.title}</h1>
            <p class="text-gray-500 text-sm">${item.published}</p>

            <p class="text-gray-700 leading-relaxed whitespace-pre-line">
                ${item.content}
            </p>

            <button onclick="history.back()" 
                class="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer">
                Kembali
            </button>
        </div>
    `;
}