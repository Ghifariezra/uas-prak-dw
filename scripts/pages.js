const pages = {
    beranda: `
    <section class="max-w-15xl mx-auto px-0 mt-5">
        <div class="bg-white shadow-sm rounded-2xl overflow-hidden transition transform duration-300 hover:scale-[1.02] cursor-pointer">
            <img src="https://i.imgur.com/VZbj9h9.jpeg" class="w-full h-52 sm:h-64 md:h-72 object-cover" />

            <div class="p-6 sm:p-8">
                <h1 class="text-2xl sm:text-3xl font-bold mb-2">Berita Utama: Perkembangan AI Terbaru</h1>
                <p class="text-gray-600 md:w-3/4">
                    Baca berita terkini hanya disini.
                </p>
            </div>
        </div>
    </section>

    <section class="max-w-10xl mx-auto px-0 mt-8">
        <h2 class="text-xl sm:text-2xl font-bold mb-4">Berita Terbaru</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

            <div class="bg-white rounded-xl shadow-sm overflow-hidden transform duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="https://i.imgur.com/7Z6P1Gk.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Utama: Perkembangan AI Terbaru</h3>
                    <p class="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet...</p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm overflow-hidden transform duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="https://i.imgur.com/khvXTiX.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Utama: Perkembangan AI</h3>
                    <p class="text-gray-600 text-sm mt-1">Lorem ipsum dolor sit amet...</p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm overflow-hidden transform duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="https://i.imgur.com/2hCIHqW.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Soft: Contoh Olahraga</h3>
                    <p class="text-gray-600 text-sm mt-1">Sensai lorem ipsum...</p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm overflow-hidden transition transform duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="https://i.imgur.com/2hCIHqW.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Soft: Contoh Olahraga</h3>
                    <p class="text-gray-600 text-sm mt-1">Sensai lorem ipsum...</p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm overflow-hidden transition transform duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="https://i.imgur.com/2hCIHqW.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Soft: Contoh Olahraga</h3>
                    <p class="text-gray-600 text-sm mt-1">Sensai lorem ipsum...</p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm overflow-hidden transition transform duration-300 hover:scale-[1.02] cursor-pointer">
                <img src="https://i.imgur.com/2hCIHqW.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Soft: Contoh Olahraga</h3>
                    <p class="text-gray-600 text-sm mt-1">Sensai lorem ipsum...</p>
                </div>
            </div>

        </div>
    </section>

    <section id="kategori" class="max-w-10xl mx-auto px-0 mt-5">
        <h2 class="text-2xl font-bold mb-6">KATEGORI</h2>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

            <a href="/#/kategori" 
            class="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center gap-2 transition transform duration-300 hover:scale-[1.02] cursor-pointer">       
                <span class="text-3xl">🏛</span>
                <p class="font-medium">Politik</p>
            </a>

            <a href="/#/kategori" 
            class="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center gap-2 transition transform duration-300 hover:scale-[1.02] cursor-pointer">
                <span class="text-3xl">💻</span>
                <p class="font-medium">Edukasi</p>
            </a>

            <a href="/#/kategori" 
            class="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center gap-2 transition transform duration-300 hover:scale-[1.02] cursor-pointer">
                <span class="text-3xl">⚽</span>
                <p class="font-medium">Olahraga</p>
            </a>

            <a href="/#/kategori" 
            class="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center gap-2 transition transform duration-300 hover:scale-[1.02] cursor-pointer">
                <span class="text-3xl">🎬</span>
                <p class="font-medium">Hiburan</p>
            </a>

            <a href="/#/kategori" 
            class="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center gap-2 transition transform duration-300 hover:scale-[1.02] cursor-pointer">
                <span class="text-3xl">⋯</span>
                <p class="font-medium">Lainnya</p>
            </a>

        </div>
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

    detail:`
        <div id="detail-container"></div>
    `,

    tentang: `
        <h2 class="text-xl font-bold mb-2">Tentang Kami</h2>
        <p>BeritaKita adalah portal berita sederhana.</p>
    `,

   kontak: `
        <section class="max-w-5xl mx-auto p-6 md:p-10 font-sans">
            <div class="bg-white p-8 md:p-14 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
                
                <h2 class="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-[#1a2b4b] tracking-tight">Kontak</h2>

                <form>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        
                        <div class="space-y-6 md:space-y-8">
                            <div>
                                <label class="block text-base font-bold text-gray-800 uppercase tracking-wide mb-3">Nama</label>
                                <input type="text" 
                                    class="w-full bg-gray-50 border border-gray-200 p-4 md:p-5 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all shadow-sm placeholder:text-gray-400" 
                                    placeholder="Masukkan nama Anda">
                            </div>

                            <div>
                                <label class="block text-base font-bold text-gray-800 uppercase tracking-wide mb-3">Email</label>
                                <input type="email" 
                                    class="w-full bg-gray-50 border border-gray-200 p-4 md:p-5 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all shadow-sm placeholder:text-gray-400" 
                                    placeholder="Masukkan email Anda">
                            </div>
                        </div>

                        <div class="flex flex-col">
                            <label class="block text-base font-bold text-gray-800 uppercase tracking-wide mb-3">Pesan</label>
                            <textarea 
                                class="w-full bg-gray-50 border border-gray-200 p-4 md:p-5 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition-all shadow-sm flex-grow min-h-[150px] md:min-h-[200px] placeholder:text-gray-400" 
                                placeholder="Tulis pesan Anda"></textarea>
                        </div>
                    </div>

                    <div class="mt-8 md:mt-12 flex justify-center"> 
                        <button type="button" 
                            class="w-full md:w-auto md:px-24 bg-[#2D4B73] hover:bg-[#1e3350] text-white text-lg font-bold py-4 md:py-5 rounded-2xl shadow-lg transform hover:-translate-y-1 active:scale-95 transition-all duration-300">
                            Kirim
                        </button>
                    </div>
                </form>
            </div>
        </section>
`
};

export default pages;