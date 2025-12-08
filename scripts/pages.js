const pages = {
    beranda: `
        <h2 class="text-xl font-bold mb-2">Beranda</h2>
        <p>Selamat datang di BeritaKita.</p>
    `,
    kategori: `
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-0">
                <h2 class="text-xl font-bold mb-2">Kategori</h2>
                <p>Pilih kategori berita yang ingin kamu baca.</p>
            </div>
            <div id="cards-category" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" />
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