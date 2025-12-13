export function showToast(message, type) {
    const toastEl = document.getElementById("toast-default");
    const messageEl = document.getElementById("toast-message");

    if (!toastEl || !messageEl) return;

    messageEl.textContent = message;

    toastEl.classList.remove(
      "hidden",
      "bg-white", "bg-green-500", "bg-red-600",
      "text-gray-700", "text-green-800", "text-red-800",
      "border-green-500", "border-red-500"
    );

    if (type === "success") {
      toastEl.classList.add("bg-green-500", "text-green-800", "border-green-500");
    } else {
      toastEl.classList.add("bg-red-600", "text-red-800", "border-red-500");
    }

    toastEl.classList.remove("hidden");

    // Hilangkan toast setelah 3 detik
    setTimeout(() => {
      toastEl.classList.add("hidden");
    }, 3000);
}
