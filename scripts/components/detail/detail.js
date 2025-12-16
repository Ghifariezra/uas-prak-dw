import {
    categories,
    politik,
    hiburan,
    edukasi,
    olahraga,
    lingkunganSocial
} from "../../data/category.js"
import {
    handleCommentSubmit,
    loadComments
} from "../../utils/comments.js";
import { textToSpeech } from "../../utils/tts.js";

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

            <button 
                id="tts-toggle"
                class="mb-4 px-4 py-2 rounded-lg 
                    bg-blue-600 text-white text-sm font-medium 
                    hover:bg-blue-700 transition cursor-pointer"
                aria-label="Baca artikel">
                🔊 Baca
            </button>

            <article class="text-gray-700 text-justify leading-relaxed whitespace-pre-line">
                ${item.content.trimStart()}
            </article>

            <!-- COMMENT SECTION -->
            <div class="mt-4 border-t pt-6">
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
                                        active:scale-95 transition-all shadow-sm cursor-pointer"
                                >
                                    Kirim
                                </button>
                            </div>


                        </div>
                    </div>
                </form>
                <div id="comment-list" class="space-y-4"></div>
            </div>
        </div>
    `;

    loadComments(commentKey);
    handleCommentSubmit(commentKey);
    textToSpeech(item);
}