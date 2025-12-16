import {
    categories,
    politik,
    hiburan,
    edukasi,
    olahraga,
    lingkunganSocial
} from "../../data/category.js"

function loadComments(key) {
    const commentList = document.getElementById("comment-list");
    const comments = JSON.parse(localStorage.getItem(key)) || [];

    if (comments.length === 0) {
        commentList.innerHTML = `<p class="text-gray-400">Belum ada komentar.</p>`;
        return;
    }

    commentList.innerHTML = comments.map(c => `
    <div class="group flex gap-4 p-4 bg-white rounded-2xl 
                border border-gray-100 shadow-sm">

        <!-- Avatar -->
        <div class="flex-shrink-0 w-11 h-11 rounded-full 
                    bg-gradient-to-br from-blue-600 to-indigo-500
                    text-white flex items-center justify-center 
                    font-bold text-lg uppercase">
            ${c.name.charAt(0).toUpperCase()}
        </div>

        <!-- Content -->
        <div class="flex-1">
            <div class="flex items-center flex-wrap justify-between gap-2">
                <p class="font-semibold text-gray-900 capitalize line-clamp-1">
                    ${c.name}
                </p>
                <span class="text-[11px] font-medium text-gray-600 
                             px-3 py-1 bg-gray-100 rounded-full">
                    ${c.date.split(",")[0]}
                </span>
            </div>

            <p class="mt-2 text-gray-700 leading-relaxed break-words">
                ${c.text}
            </p>
        </div>
    </div>
`).join("");

}

function handleCommentSubmit(key) {
    const form = document.getElementById("comment-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("comment-name").value.trim();
        const text = document.getElementById("comment-text").value.trim();

        if (!name || !text) return;

        const comments = JSON.parse(localStorage.getItem(key)) || [];

        comments.unshift({
            name,
            text,
            date: new Date().toLocaleString("id-ID")
        });

        localStorage.setItem(key, JSON.stringify(comments));

        form.reset();
        loadComments(key);
    });
}

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

    const commentKey = `comments_${item.title}`;

    container.innerHTML = `
        <div class="w-full mx-auto bg-white p-6 rounded-xl shadow-md">
            <img src="${item.image}" class="w-full rounded-xl mb-4" />

            <h1 class="text-3xl font-bold mb-2">${item.title}</h1>
            <p class="text-gray-500 text-sm mb-4">${item.published}</p>

            <p class="text-gray-700 text-justify leading-relaxed whitespace-pre-line">
                ${item.content}
            </p>

            <!-- COMMENT SECTION -->
            <div class="mt-10 border-t pt-6">
                <h2 class="text-xl font-semibold mb-4">Komentar</h2>

                <form id="comment-form" class="mb-8">
                    <div class="flex gap-4 items-start">

                        <!-- Avatar Preview -->
                        <div class="flex-shrink-0 w-11 h-11 rounded-full 
                                    bg-gradient-to-br from-blue-600 to-indigo-500
                                    text-white flex items-center justify-center 
                                    font-bold text-lg uppercase">
                            <span id="avatar-preview">?</span>
                        </div>

                        <!-- Inputs -->
                        <div class="flex-1 space-y-3">

                            <!-- Name -->
                            <input 
                                type="text"
                                id="comment-name"
                                placeholder="Tulis nama Anda"
                                class="w-full px-4 py-3 rounded-xl 
                                    bg-gray-50 border border-gray-200 
                                    focus:bg-white focus:border-blue-500 
                                    focus:ring-2 focus:ring-blue-100 
                                    outline-none transition"
                                required
                            />

                            <!-- Comment -->
                            <textarea 
                                id="comment-text"
                                placeholder="Bagikan pendapat Anda..."
                                rows="3"
                                class="w-full px-4 py-3 rounded-xl 
                                    bg-gray-50 border border-gray-200 
                                    focus:bg-white focus:border-blue-500 
                                    focus:ring-2 focus:ring-blue-100 
                                    outline-none resize-none transition"
                                required
                            ></textarea>

                           <div class="flex flex-col sm:flex-row gap-4 items-start">
                                <p class="text-xs text-gray-400">
                                    Komentar akan ditampilkan secara publik
                                </p>

                                <button 
                                    type="submit"
                                    class="ml-auto px-6 py-2.5 rounded-xl 
                                        bg-gradient-to-r from-blue-600 to-indigo-600
                                        text-white font-semibold 
                                        hover:from-blue-700 hover:to-indigo-700 
                                        active:scale-95 transition-all shadow-sm"
                                >
                                    Kirim
                                </button>
                            </div>


                        </div>
                    </div>
                </form>
                <div id="comment-list" class="space-y-4"></div>
            </div>

            <button onclick="history.back()" 
                class="mt-6 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition">
                Kembali
            </button>
        </div>
    `;

    loadComments(commentKey);
    handleCommentSubmit(commentKey);
}
