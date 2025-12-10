const pages = {
    beranda: `
    <!-- HERO -->
    <section class="max-w-15xl mx-auto px-0 mt-0">
        <div class="bg-white shadow-sm rounded-2xl overflow-hidden transition transform duration-300 hover:scale-[1.02] active:scale-[0.95] cursor-pointer">
            <img src="https://i.imgur.com/VZbj9h9.jpeg" class="w-full h-72 object-cover" />

            <div class="p-8">
                <h1 class="text-3xl font-bold mb-2">Berita Utama: Perkembangan AI Terbaru</h1>
                <p class="text-gray-600 w-3/4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
        </div>
    </section>

    <section class="max-w-10xl mx-auto px-0 mt-5">
        <h2 class="text-2xl font-bold mb-4">Berita Terbaru</h2>
        <div class="grid grid-cols-3 gap-10">

            <div class="bg-white rounded-xl shadow-sm overflow-hidden transform duration-300 hover:scale-[1.02] active:scale-[0.95] cursor-pointer">
                <img src="https://i.imgur.com/7Z6P1Gk.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Utama: Perkembangan AI Terbaru</h3>
                    <p class="text-gray-600 text-sm mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-md overflow-hidden transform duration-300 hover:scale-[1.02] active:scale-[0.95] cursor-pointer">
                <img src="https://i.imgur.com/khvXTiX.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Utama: Perkembangan AI</h3>
                    <p class="text-gray-600 text-sm mt-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                    </p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-md overflow-hidden transform duration-300 hover:scale-[1.02] active:scale-[0.95] cursor-pointer">
                <img src="https://i.imgur.com/2hCIHqW.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Soft: Contoh Olahraga</h3>
                    <p class="text-gray-600 text-sm mt-1">
                        Sensai lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-md overflow-hidden transform duration-300 hover:scale-[1.02] active:scale-[0.95] cursor-pointer">
                <img src="https://i.imgur.com/2hCIHqW.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Soft: Contoh Olahraga</h3>
                    <p class="text-gray-600 text-sm mt-1">
                        Sensai lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div>
            
            <div class="bg-white rounded-xl shadow-md overflow-hidden transform duration-300 hover:scale-[1.02] active:scale-[0.95] cursor-pointer">
                <img src="https://i.imgur.com/2hCIHqW.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Soft: Contoh Olahraga</h3>
                    <p class="text-gray-600 text-sm mt-1">
                        Sensai lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div>

            <div class="bg-white rounded-xl shadow-md overflow-hidden transform duration-300 hover:scale-[1.02] active:scale-[0.95] cursor-pointer">
                <img src="https://i.imgur.com/2hCIHqW.jpeg" class="w-full h-40 object-cover"/>
                <div class="p-4">
                    <h3 class="font-semibold">Berita Soft: Contoh Olahraga</h3>
                    <p class="text-gray-600 text-sm mt-1">
                        Sensai lorem ipsum dolor sit amet...
                    </p>
                </div>
            </div>
        </div>
    </section>

    <section id ="kategori" class="max-w-10xl mx-auto px-0 mt-5">
        <h2 class="text-2xl font-bold mb-6">KATEGORI</h2>

        <div class="grid grid-cols-5 gap-6">

            <a href="/#/kategori/politik" class="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center gap-2">
                <span class="text-3xl">🏛</span>
                <p class="font-medium">Politik</p>
            </a>

            <a href="/#/kategori" class="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center gap-2">
                <span class="text-3xl">💻</span>
                <p class="font-medium">Teknologi</p>
            </a>

            <a href="/#/kategori" class="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center gap-2">
                <span class="text-3xl">⚽</span>
                <p class="font-medium">Olahraga</p>
            </a>

            <a href="/#/kategori" class="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center gap-2">
                <span class="text-3xl">🎬</span>
                <p class="font-medium">Hiburan</p>
            </a>

            <a href="/#/kategori" class="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center items-center gap-2">
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
    tentang: `
        <h2 class="text-xl font-bold mb-2">Tentang Kami</h2>
        <p>BeritaKita adalah portal berita sederhana.</p>
    `,
    kontak: `
        <h2 class="text-xl font-bold mb-2">Kontak</h2>
        <p>Hubungi kami melalui email: support@beritakita.com</p>
    `
};

export default pages;