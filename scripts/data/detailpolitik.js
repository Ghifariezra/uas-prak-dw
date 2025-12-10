// File: scripts/data/detailpolitik.js

// --- 1. DATA BERITA DENGAN GAMBAR ASLI ---
const dataBerita = [
    {
        id: 1,
        judul: "Pemilu Nasional 2024",
        tanggal: "12 Januari 2024",
        // Gambar diganti link asli
        gambar: "https://images.unsplash.com/photo-1504714146340-959ca07b2a10?w=800", 
        isi: "Persiapan menuju Pemilu Nasional 2024 telah memasuki tahap akhir. KPU memastikan distribusi logistik ke daerah terpencil sudah mencapai 90%. Antusiasme masyarakat terlihat sangat tinggi, terutama di kalangan pemilih pemula."
    },
    {
        id: 2,
        judul: "Debat Publik Antar Kandidat",
        tanggal: "20 Februari 2024",
        gambar: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=800",
        isi: "Debat publik kedua berlangsung panas tadi malam. Para kandidat saling adu gagasan mengenai strategi pemulihan ekonomi pasca-krisis global. Isu ketimpangan sosial dan lapangan kerja menjadi sorotan utama."
    },
    {
        id: 3,
        judul: "Kebijakan Baru Tentang Pajak",
        tanggal: "03 Maret 2024",
        gambar: "https://images.unsplash.com/photo-1581091870623-e0b1a4e3d9a5?w=800",
        isi: "Kementerian Keuangan resmi merilis aturan turunan mengenai harmonisasi peraturan perpajakan. Kebijakan ini mencakup penyesuaian tarif PPN dan insentif bagi UMKM."
    },
    {
        id: 4,
        judul: "Hubungan Diplomatik Meningkat",
        tanggal: "15 Maret 2024",
        gambar: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
        isi: "Indonesia dan negara-negara mitra strategis sepakat untuk mempererat hubungan diplomatik melalui serangkaian perjanjian bilateral baru. Fokus utama kerjasama meliputi sektor perdagangan dan energi terbarukan."
    },
    {
        id: 5,
        judul: "Revisi UU Ketenagakerjaan",
        tanggal: "29 April 2024",
        gambar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800",
        isi: "Dewan Perwakilan Rakyat (DPR) mulai membahas draf revisi Undang-Undang Ketenagakerjaan. Poin krusial yang dibahas meliputi skema pengupahan dan jaminan kehilangan pekerjaan."
    },
    {
        id: 6,
        judul: "Isu Korupsi Pejabat",
        tanggal: "08 Mei 2024",
        gambar: "https://images.unsplash.com/photo-1546074177-ffdda98d214f?w=800",
        isi: "KPK kembali melakukan operasi tangkap tangan (OTT) terhadap oknum pejabat daerah terkait dugaan suap perizinan proyek. Kasus ini menambah daftar panjang pejabat yang terjerat hukum tahun ini."
    },
    {
        id: 7,
        judul: "Kenaikan Anggaran Infrastruktur",
        tanggal: "16 Mei 2024",
        gambar: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800",
        isi: "Pemerintah mengalokasikan tambahan dana sebesar 50 Triliun Rupiah untuk percepatan pembangunan infrastruktur di luar Jawa. Fokus utama adalah penyelesaian jalan tol trans-pulau."
    },
    {
        id: 8,
        judul: "Isu Pertahanan Negara",
        tanggal: "25 Mei 2024",
        gambar: "https://images.unsplash.com/photo-1606788075760-3b8403b0b5c0?w=800",
        isi: "Kementerian Pertahanan mengumumkan rencana modernisasi Alutsista untuk memperkuat kedaulatan di wilayah perbatasan. Pengadaan kapal patroli cepat menjadi prioritas."
    },
    {
        id: 9,
        judul: "Aksi Demo Mahasiswa",
        tanggal: "10 Juni 2024",
        gambar: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800",
        isi: "Ribuan mahasiswa menggelar aksi damai di depan gedung parlemen. Mereka menuntut pemerintah segera menstabilkan harga bahan pokok dan meninjau ulang kebijakan pendidikan."
    },
    {
        id: 10,
        judul: "Isu Kenaikan BBM",
        tanggal: "24 Juni 2024",
        gambar: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
        isi: "Harga minyak dunia yang melambung memaksa pemerintah untuk menyesuaikan harga BBM bersubsidi. Menteri ESDM menyatakan keputusan ini sulit namun diperlukan untuk menyelamatkan APBN."
    },
    {
        id: 11,
        judul: "Pertemuan Tingkat Tinggi",
        tanggal: "05 Juli 2024",
        gambar: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800",
        isi: "Jakarta menjadi tuan rumah konferensi tingkat tinggi (KTT) yang dihadiri oleh 20 kepala negara. Agenda utama membahas perubahan iklim dan transisi energi hijau."
    },
    {
        id: 12,
        judul: "Kebijakan Pertanian Baru",
        tanggal: "22 Juli 2024",
        gambar: "https://images.unsplash.com/photo-1470509037663-253afd7f0f09?w=800",
        isi: "Kementerian Pertanian meluncurkan program digitalisasi pertanian. Program ini memberikan subsidi teknologi bagi petani milenial untuk meningkatkan produktivitas panen."
    },
    {
        id: 13,
        judul: "Reformasi Sistem Pendidikan",
        tanggal: "09 Agustus 2024",
        gambar: "https://images.unsplash.com/photo-1588072432904-843af37f0c9f?w=800",
        isi: "Kurikulum baru yang berfokus pada pengembangan karakter dan keahlian praktis mulai diujicobakan. Menteri Pendidikan menekankan pentingnya adaptasi teknologi dalam kegiatan belajar mengajar."
    },
    {
        id: 14,
        judul: "Rencana Pemindahan Ibu Kota",
        tanggal: "19 September 2024",
        gambar: "https://images.unsplash.com/photo-1576013551627-0cc20b96c9bb?w=800",
        isi: "Progres pembangunan Ibu Kota Nusantara (IKN) telah mencapai 75% untuk kawasan inti pemerintahan. Presiden dijadwalkan akan meresmikan istana negara baru dalam waktu dekat."
    },
    {
        id: 15,
        judul: "Isu Keamanan Siber",
        tanggal: "30 September 2024",
        gambar: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=800",
        isi: "BSSN melaporkan peningkatan serangan siber terhadap infrastruktur vital nasional. Pemerintah segera membentuk satuan tugas khusus untuk memperkuat firewall data kependudukan."
    }
];

// --- 2. FUNGSI LOGIKA (Tetap sama seperti sebelumnya) ---
function bukaDetail(id) {
    const berita = dataBerita.find(item => item.id === id);

    if (berita) {
        document.getElementById('detail-title').innerText = berita.judul;
        document.getElementById('detail-date').innerText = berita.tanggal;
        document.getElementById('detail-img').src = berita.gambar;
        document.getElementById('detail-desc').innerText = berita.isi;

        document.getElementById('content').classList.add('hidden');
        document.getElementById('detail-berita').classList.remove('hidden');
        window.scrollTo(0, 0);
    }
}

function kembaliKeList() {
    document.getElementById('detail-berita').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
}