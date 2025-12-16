export function textToSpeech(item) {
    if (!("speechSynthesis" in window)) return;

    const synth = window.speechSynthesis;
    const btn = document.getElementById("tts-toggle");

    let utterance = new SpeechSynthesisUtterance(
        `${item.title}. ${item.content}`
    );
    utterance.lang = "id-ID";

    let isSpeaking = false;
    let isPaused = false;

    btn.addEventListener("click", () => {
        // MULAI BACA
        if (!isSpeaking) {
            synth.cancel();
            synth.speak(utterance);
            isSpeaking = true;
            isPaused = false;
            btn.textContent = "⏸️ Jeda";
            return;
        }

        // JEDA
        if (isSpeaking && !isPaused) {
            synth.pause();
            isPaused = true;
            btn.textContent = "▶️ Lanjutkan";
            return;
        }

        // LANJUT
        if (isSpeaking && isPaused) {
            synth.resume();
            isPaused = false;
            btn.textContent = "⏸️ Jeda";
        }
    });

    // RESET otomatis saat selesai
    utterance.onend = () => {
        isSpeaking = false;
        isPaused = false;
        btn.textContent = "🔊 Baca";
    };

    // STOP kalau user pindah halaman
    window.addEventListener("beforeunload", () => {
        synth.cancel();
    });
}
