export default function initContactForm() {
    const form = document.getElementById("contact-us");
    const btn = document.getElementById("submit-btn");
    const error = document.getElementById("message-error");

    if (!form || !btn) return;

    form.addEventListener("submit", handleSubmit);
    btn.addEventListener("click", () => form.requestSubmit()); // untuk klik tombol
}

async function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const btn = document.getElementById("submit-btn");
    const error = document.getElementById("message-error");
    const status = document.getElementById("form-status");

    const name = form.querySelector("input[name=name]").value.trim();
    const email = form.querySelector("input[name=email]").value.trim();
    const message = form.querySelector("textarea[name=message]").value.trim();

    if (!name || !email || !message) {
        error.textContent = "Semua field wajib diisi!";
        return;
    }

    error.textContent = "";
    btn.disabled = true;
    btn.textContent = "Mengirim...";

    const data = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: data,
            headers: { "Accept": "application/json" }
        });

        if (response.ok) {
            status.textContent = "Terima kasih, pesanmu sudah terkirim!";
            form.reset();
        } else {
            const resData = await response.json();
            if (resData.errors) {
                status.textContent = resData.errors.map(e => e.message).join(", ");
            } else {
                status.textContent = "Terjadi masalah saat mengirim formulir.";
            }
        }
    } catch (err) {
        status.textContent = "Gagal menghubungi server.";
    }

    btn.disabled = false;
    btn.textContent = "Kirim";
}
