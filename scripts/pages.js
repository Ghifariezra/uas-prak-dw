const pages = {
    beranda: `
        <h2 class="text-xl font-bold mb-2">Beranda</h2>
        <p>Selamat datang di BeritaKita.</p>
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
                    <h2 class="text-xl font-bold mb-2">Berita Terbaru</h2>
                    <p>Kumpulan berita terbaru dari berbagai kategori.</p>
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