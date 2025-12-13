const pages = {
    beranda: `
    <section class="max-w-15xl mx-auto px-0 mt-5">
        <div id="banner-home" class="relative w-full" data-carousel="slide"></div>
    </section>

    <section class="max-w-xl0 mx-auto px-0 mt-8"> 
       <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-gray-800">Rekomendasi untuk Anda</h2>
        </div>
        <div id="newsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
    </section>

    <section class="max-w-10xl mx-auto px-0 mt-8">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-xl sm:text-2xl font-bold mb-4">Berita Terbaru</h2>
            <a href="#/kategori" class="text-blue-600 hover:underline">Selengkapnya →</a>
        </div>
        <div id="cards-home" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"></div>
    </section>
    `,

    kategori: `
        <div class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-0">
                    <h2 class="text-xl font-bold mb-2">Pilih Kategori</h2>
                    <p>Temukan kategori berita sesuai minatmu.</p>
                </div>
                <div id="types-category" class="flex flex-wrap justify-center gap-6 px-4 py-8 bg-white rounded-xl shadow-sm"></div>
            </div>
            <div class="flex flex-col gap-4">
                <div class="flex flex-col gap-0">
                    <h2 id="new-news" class="text-xl font-bold mb-2">Berita Terbaru</h2>
                    <p id="news-desc">Kumpulan berita terbaru dari berbagai kategori.</p>
                </div>
                <div id="cards-category" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            </div>
        </div>
    `,

    detail: `
        <div id="detail-container"></div>
    `,

    tentang: `
    <div class="max-w-7xl mx-auto px-4 py-12">
        <div class="flex flex-col lg:flex-row gap-8 items-start">
            <div class="flex-1 space-y-4">
                <h1 class="text-4xl font-bold mb-6">Tentang Kami</h1>
                
                <p class="text-gray-700 leading-relaxed">
                    BeritaKita adalah portal berita digital terkemuka yang berkomitmen untuk menyajikan
                    informasi akurat, terpercaya, dan berimbang kepada masyarakat Indonesia. Didirikan pada tahun 2025,
                    berkembang menjadi salah satu sumber berita terpercaya dengan jangkauan pembaca di seluruh nusantara.
                </p>
                
                <p class="text-gray-700 leading-relaxed">
                    Tim redaksi kami terdiri dari jurnalis profesional dan berpengalaman yang memiliki dedikasi tinggi 
                    dalam menghadirkan berita berkualitas. Kami meliput berbagai topik mulai dari politik, ekonomi, 
                    teknologi, olahraga, hingga gaya hidup dengan pendekatan jurnalisme yang etis dan bertanggung jawab.
                </p>
            </div>

            <div class="flex-1">
                <div class="bg-gray-300 rounded-lg overflow-hidden h-full">
                    <img 
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop" 
                        alt="Team Photo" 
                        class="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </div>
    `,

    kontak: `
        <section class="max-w-5xl mx-auto p-6 md:p-10 font-sans">
            <div class="bg-white p-8 md:p-14 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
                <h2 class="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-[#1a2b4b] tracking-tight">Kontak</h2>
                <form 
                    id="contact-us" 
                    action="https://formspree.io/f/xeoyvjrj" 
                    method="POST" 
                    class="space-y-8"
                >
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        
                        <!-- Kolom Kiri -->
                        <div class="space-y-8">
                            <!-- Nama -->
                            <div>
                                <label 
                                    for="name"
                                    class="block text-base font-bold text-gray-800 uppercase tracking-wide mb-3"
                                >
                                    Nama
                                </label>
                                <input 
                                    id="name"
                                    name="name"
                                    type="text"
                                    class="w-full bg-gray-50 border border-gray-200 p-4 md:p-5 rounded-2xl 
                                        focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none 
                                        transition-all shadow-sm placeholder:text-gray-400"
                                    placeholder="Masukkan nama Anda"
                                >
                            </div>

                            <!-- Email -->
                            <div>
                                <label 
                                    for="email"
                                    class="block text-base font-bold text-gray-800 uppercase tracking-wide mb-3"
                                >
                                    Email
                                </label>
                                <input 
                                    id="email"
                                    name="email"
                                    type="email"
                                    class="w-full bg-gray-50 border border-gray-200 p-4 md:p-5 rounded-2xl 
                                        focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none 
                                        transition-all shadow-sm placeholder:text-gray-400"
                                    placeholder="Masukkan email Anda"
                                >
                            </div>
                        </div>

                        <!-- Kolom Kanan -->
                        <div class="flex flex-col">
                            <label 
                                for="message"
                                class="block text-base font-bold text-gray-800 uppercase tracking-wide mb-3"
                            >
                                Pesan
                            </label>

                            <textarea 
                                id="message"
                                name="message"
                                class="w-full bg-gray-50 border border-gray-200 p-4 md:p-5 rounded-2xl 
                                    focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none 
                                    transition-all shadow-sm flex-grow min-h-[150px] md:min-h-[200px] 
                                    placeholder:text-gray-400"
                                placeholder="Tulis pesan Anda"
                            ></textarea>
                        </div>

                    </div>

                    <!-- Tombol -->
                    <div class="mt-8 md:mt-12 flex justify-center">
                        <button 
                            type="submit"
                            id="submit-btn"
                            class="w-full md:w-auto md:px-24 bg-[#2D4B73] hover:bg-[#1E3350] 
                                text-white text-lg font-bold py-4 md:py-5 rounded-2xl shadow-lg 
                                transform hover:-translate-y-1 active:scale-95 
                                transition-all duration-300 cursor-pointer"
                        >
                            Kirim
                        </button>
                    </div>
                </form>
            </div>

            <div
                id="toast-default"
                class="hidden fixed top-5 right-5 z-50 flex items-center w-full max-w-xs p-4 bg-white rounded-lg shadow"
                role="alert"
                data-flowbite-toast
                >
                <div id="toast-message" class="ms-3 text-sm text-white font-bold">Pesan berhasil dikirim</div>

                <button
                    type="button"
                    class="ms-auto text-gray-400 hover:text-gray-900"
                    data-dismiss-target="#toast-default"
                >
                    ✕
                </button>
            </div>
        </section>
`
};

export default pages;