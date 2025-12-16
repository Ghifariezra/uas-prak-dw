export function loadComments(key) {
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

export function handleCommentSubmit(key) {
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