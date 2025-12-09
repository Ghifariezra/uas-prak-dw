const categories = [
    {
        title: "Teknologi Modern",
        desc: "Berita terbaru tentang teknologi masa kini.",
        published: "29 Oktober 2024",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500"
    },
    {
        title: "Politik",
        desc: "Update politik nasional dan internasional.",
        published: "11 Januari 2024",
        image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9saXRpY3N8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "Olahraga",
        desc: "Berita seputar liga dunia dan olahraga nasional.",
        published: "20 Juni 2024",
        image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=500"
    },
    {
        title: "Ekonomi",
        desc: "Analisis perkembangan ekonomi global dan nasional.",
        published: "5 Februari 2024",
        image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWNvbm9teXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Kesehatan",
        desc: "Informasi kesehatan terbaru untuk menjaga hidup sehat.",
        published: "14 Maret 2024",
        image: "https://images.unsplash.com/photo-1467453678174-768ec283a940?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aGVhbHRoeXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        title: "Pendidikan",
        desc: "Tren pendidikan modern dan dunia akademis.",
        published: "8 April 2024",
        image: "https://plus.unsplash.com/premium_photo-1661767552224-ef72bb6b671f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN0dWR5fGVufDB8fDB8fHww"
    },
    {
        title: "Sains",
        desc: "Penemuan ilmiah terbaru dari seluruh dunia.",
        published: "19 Desember 2024",
        image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=500"
    },
    {
        title: "Hiburan",
        desc: "Info terbaru dunia film, musik, dan selebriti.",
        published: "7 Mei 2024",
        image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500"
    },
    {
        title: "Otomotif",
        desc: "Berita otomotif, mobil, dan motor terbaru.",
        published: "22 Juli 2024",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500"
    },
    {
        title: "Kuliner",
        desc: "Rekomendasi kuliner dan tren makanan terbaru.",
        published: "1 Juni 2024",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500"
    },
    {
        title: "Travel",
        desc: "Panduan dan rekomendasi tempat wisata menarik.",
        published: "12 Agustus 2024",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500"
    },
    {
        title: "Bisnis",
        desc: "Insight dunia bisnis dan perkembangan startup.",
        published: "30 September 2024",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500"
    },
    {
        title: "Gaya Hidup",
        desc: "Tren lifestyle dan tips hidup modern.",
        published: "16 November 2024",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500"
    },
    {
        title: "Lingkungan",
        desc: "Berita lingkungan dan dampak perubahan iklim.",
        published: "2 Oktober 2024",
        image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=500"
    },
    {
        title: "Sejarah",
        desc: "Ulasan peristiwa sejarah dunia dan Indonesia.",
        published: "9 September 2024",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500"
    }
];

const politik = [
    {
        title: "Pemilu Nasional 2024",
        desc: "Perkembangan terbaru jelang pemilu nasional.",
        published: "12 Januari 2024",
        image: "https://images.unsplash.com/photo-1504714146340-959ca07b2a10?w=500",
        content: ``
    },
    {
        title: "Debat Publik Antar Kandidat",
        desc: "Debat terbuka yang menyoroti isu ekonomi dan sosial.",
        published: "20 Februari 2024",
        image: "https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=500"
    },
    {
        title: "Kebijakan Baru Tentang Pajak",
        desc: "Pemerintah mengumumkan aturan pajak terbaru.",
        published: "3 Maret 2024",
        image: "https://images.unsplash.com/photo-1581091870623-e0b1a4e3d9a5?w=500"
    },
    {
        title: "Hubungan Diplomatik Meningkat",
        desc: "Indonesia menjalin kerjasama strategis baru.",
        published: "15 Maret 2024",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500"
    },
    {
        title: "Revisi UU Ketenagakerjaan",
        desc: "Pemerintah mengajukan revisi aturan ketenagakerjaan.",
        published: "29 April 2024",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=500"
    },
    {
        title: "Isu Korupsi Pejabat",
        desc: "Kasus korupsi kembali mencuat di kalangan pejabat.",
        published: "8 Mei 2024",
        image: "https://images.unsplash.com/photo-1546074177-ffdda98d214f?w=500"
    },
    {
        title: "Kenaikan Anggaran Infrastruktur",
        desc: "Pemerintah meningkatkan anggaran pembangunan wilayah.",
        published: "16 Mei 2024",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500"
    },
    {
        title: "Isu Pertahanan Negara",
        desc: "Meningkatnya perhatian pemerintah terhadap keamanan.",
        published: "25 Mei 2024",
        image: "https://images.unsplash.com/photo-1606788075760-3b8403b0b5c0?w=500"
    },
    {
        title: "Aksi Demo Mahasiswa",
        desc: "Ribuan mahasiswa turun ke jalan menolak rancangan UU.",
        published: "10 Juni 2024",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=500"
    },
    {
        title: "Isu Kenaikan BBM",
        desc: "Pemerintah mempertimbangkan regulasi harga energi.",
        published: "24 Juni 2024",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500"
    },
    {
        title: "Pertemuan Tingkat Tinggi",
        desc: "Delegasi Indonesia menghadiri pertemuan internasional.",
        published: "5 Juli 2024",
        image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=500"
    },
    {
        title: "Kebijakan Pertanian Baru",
        desc: "Pemerintah menetapkan subsidi untuk sektor pertanian.",
        published: "22 Juli 2024",
        image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f09?w=500"
    },
    {
        title: "Reformasi Sistem Pendidikan",
        desc: "Parlemen membahas kurikulum pendidikan nasional.",
        published: "9 Agustus 2024",
        image: "https://images.unsplash.com/photo-1588072432904-843af37f0c9f?w=500"
    },
    {
        title: "Rencana Pemindahan Ibu Kota",
        desc: "Tahap pembangunan ibu kota baru terus berjalan.",
        published: "19 September 2024",
        image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c9bb?w=500"
    },
    {
        title: "Isu Keamanan Siber",
        desc: "Pemerintah meningkatkan sistem keamanan digital nasional.",
        published: "30 September 2024",
        image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?w=500"
    }
]

const hiburan = [
    {
        title: "Film Box Office Terbaru",
        desc: "Film terbaru mendominasi box office dunia.",
        published: "4 Januari 2024",
        image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=500"
    },
    {
        title: "Konser Musik Akbar",
        desc: "Konser internasional yang dinanti akhirnya digelar.",
        published: "14 Februari 2024",
        image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=500"
    },
    {
        title: "Aktor Baru Mencuri Perhatian",
        desc: "Bintang baru mulai menjadi sorotan publik.",
        published: "1 Maret 2024",
        image: "https://images.unsplash.com/photo-1598387993441-a364f854c3fb?w=500"
    },
    {
        title: "Drama Korea Trending",
        desc: "Drama terbaru berhasil menarik perhatian global.",
        published: "19 Maret 2024",
        image: "https://images.unsplash.com/photo-1605697481325-d74eab259c33?w=500"
    },
    {
        title: "Festival Film Internasional",
        desc: "Puluhan film terbaik dunia dipamerkan.",
        published: "3 April 2024",
        image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=500"
    },
    {
        title: "Idol K-Pop Comeback",
        desc: "Grup ternama mengumumkan comeback terbaru.",
        published: "12 April 2024",
        image: "https://images.unsplash.com/photo-1520975918318-3a8a98a3a1b6?w=500"
    },
    {
        title: "Penghargaan Musik Tahunan",
        desc: "Ajang penghargaan musik paling bergengsi digelar.",
        published: "1 Mei 2024",
        image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=500"
    },
    {
        title: "Komedi Stand-Up Viral",
        desc: "Komika lokal menjadi tren di media sosial.",
        published: "23 Mei 2024",
        image: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?w=500"
    },
    {
        title: "Game Baru Dirilis",
        desc: "Game AAA terbaru menarik perhatian gamer dunia.",
        published: "3 Juni 2024",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500"
    },
    {
        title: "Album Artis Global Rilis",
        desc: "Album terbaru artis kelas dunia menduduki chart.",
        published: "18 Juni 2024",
        image: "https://images.unsplash.com/photo-1520443132540-359b4b52f30d?w=500"
    },
    {
        title: "Aktor Indonesia Go International",
        desc: "Aktor tanah air berperan dalam film Hollywood.",
        published: "25 Juni 2024",
        image: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc5b?w=500"
    },
    {
        title: "Serial Anime Populer",
        desc: "Season baru anime paling ditunggu akhirnya tayang.",
        published: "3 Juli 2024",
        image: "https://images.unsplash.com/photo-1526481280695-3c720685208b?w=500"
    },
    {
        title: "Trailer Film Horor Viral",
        desc: "Trailer film horor membuat heboh internet.",
        published: "19 Juli 2024",
        image: "https://images.unsplash.com/photo-1516571137133-1be29e1b0b43?w=500"
    },
    {
        title: "Kolaborasi Musik Mengejutkan",
        desc: "Dua artis terkenal mengumumkan kolaborasi besar.",
        published: "8 Agustus 2024",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500"
    },
    {
        title: "Artis Terkemuka Menikah",
        desc: "Kabar bahagia datang dari artis papan atas.",
        published: "23 Agustus 2024",
        image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500"
    }
]

const edukasi = [
    {
        title: "Kurikulum Baru Diterapkan",
        desc: "Pemerintah mulai menerapkan kurikulum modern.",
        published: "8 Januari 2024",
        image: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=500"
    },
    {
        title: "Beasiswa Global Dibuka",
        desc: "Kesempatan besar bagi pelajar untuk kuliah di luar negeri.",
        published: "19 Januari 2024",
        image: "https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=500"
    },
    {
        title: "Sekolah Digital Semakin Populer",
        desc: "Metode pembelajaran digital kian diminati.",
        published: "4 Februari 2024",
        image: "https://images.unsplash.com/photo-1586327678141-36c6a3a78796?w=500"
    },
    {
        title: "Metode Belajar Hybrid",
        desc: "Kolaborasi belajar online dan offline semakin diterapkan.",
        published: "13 Februari 2024",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=500"
    },
    {
        title: "Universitas Baru Dibuka",
        desc: "Kampus teknologi modern mulai beroperasi.",
        published: "26 Februari 2024",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=500"
    },
    {
        title: "Kelas Coding Gratis",
        desc: "Program pemerintah memberikan pelatihan coding gratis.",
        published: "10 Maret 2024",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500"
    },
    {
        title: "Pelatihan Guru Nasional",
        desc: "Ribuan guru mengikuti pelatihan digital.",
        published: "25 Maret 2024",
        image: "https://images.unsplash.com/photo-1604881991720-f91add269bed?w=500"
    },
    {
        title: "Perpustakaan Digital Diluncurkan",
        desc: "Ribuan buku digital tersedia gratis.",
        published: "8 April 2024",
        image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500"
    },
    {
        title: "Pendidikan Anak Usia Dini Meningkat",
        desc: "Pemerintah fokus pada kualitas pendidikan dasar.",
        published: "18 April 2024",
        image: "https://images.unsplash.com/photo-1490337457138-40a5d09df6ce?w=500"
    },
    {
        title: "Mahasiswa Indonesia Berprestasi",
        desc: "Mahasiswa tampil di kompetisi internasional.",
        published: "1 Mei 2024",
        image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=500"
    },
    {
        title: "Pendidikan Jarak Jauh Berkembang",
        desc: "Sekolah meningkatkan platform pembelajaran daring.",
        published: "17 Mei 2024",
        image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500"
    },
    {
        title: "Program Magang Industri",
        desc: "Kerjasama kampus dan perusahaan semakin besar.",
        published: "27 Mei 2024",
        image: "https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?w=500"
    },
    {
        title: "Festival Sains Pelajar",
        desc: "Ajang kreativitas pelajar tingkat nasional.",
        published: "12 Juni 2024",
        image: "https://images.unsplash.com/photo-1509223197845-458d87318791?w=500"
    },
    {
        title: "Peluncuran Aplikasi Edukasi",
        desc: "Aplikasi belajar online hadir dengan fitur baru.",
        published: "24 Juni 2024",
        image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500"
    },
    {
        title: "Kampus Hijau Ramah Lingkungan",
        desc: "Universitas menerapkan kebijakan ramah lingkungan.",
        published: "7 Juli 2024",
        image: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=500"
    }
]

const olahraga = [
    {
        title: "Piala Dunia Dimulai",
        desc: "Turnamen sepak bola terbesar dunia resmi dibuka.",
        published: "5 Januari 2024",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500"
    },
    {
        title: "Atlet Nasional Raih Emas",
        desc: "Atlet Indonesia berhasil membawa pulang medali emas.",
        published: "17 Januari 2024",
        image: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=500"
    },
    {
        title: "Final Liga Champions",
        desc: "Pertandingan besar akan mempertemukan dua klub elite.",
        published: "3 Februari 2024",
        image: "https://images.unsplash.com/photo-1508602632967-c7b28b6a8282?w=500"
    },
    {
        title: "Pebasket Muda Berprestasi",
        desc: "Pemain basket muda mencetak rekor baru.",
        published: "20 Februari 2024",
        image: "https://images.unsplash.com/photo-1517649493560-4f4e0fadin1e?w=500"
    },
    {
        title: "Kompetisi Bulu Tangkis Internasional",
        desc: "Turnamen bulu tangkis terbesar berlangsung meriah.",
        published: "8 Maret 2024",
        image: "https://images.unsplash.com/photo-1600170311836-a7ed685538aa?w=500"
    },
    {
        title: "Maraton Tahunan Digelar",
        desc: "Ribuan pelari mengikuti maraton internasional.",
        published: "15 Maret 2024",
        image: "https://images.unsplash.com/photo-1520974735194-8d8a4957d2ba?w=500"
    },
    {
        title: "Juara Tinju Dunia",
        desc: "Petinju kelas berat mempertahankan gelarnya.",
        published: "20 Maret 2024",
        image: "https://images.unsplash.com/photo-1521412080232-69c5619f80e9?w=500"
    },
    {
        title: "Liga Basket Nasional Dimulai",
        desc: "Puluhan tim memperebutkan gelar juara nasional.",
        published: "1 April 2024",
        image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=500"
    },
    {
        title: "Balap Motor Internasional",
        desc: "Lintasan balap dunia dipenuhi para pembalap hebat.",
        published: "16 April 2024",
        image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?w=500"
    },
    {
        title: "Kejuaraan Renang Dunia",
        desc: "Atlet renang mencetak rekor baru.",
        published: "2 Mei 2024",
        image: "https://images.unsplash.com/photo-1529439320301-b9565c05ed85?w=500"
    },
    {
        title: "Turnamen Tenis Terbesar",
        desc: "Petenis dunia bersaing memperebutkan gelar.",
        published: "19 Mei 2024",
        image: "https://images.unsplash.com/photo-1521217582786-e92f8f2d8c6a?w=500"
    },
    {
        title: "E-Sports Semakin Diminati",
        desc: "Kompetisi game internasional semakin besar.",
        published: "6 Juni 2024",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=500"
    },
    {
        title: "Atlet Muda Pecahkan Rekor",
        desc: "Rekor baru tercipta dalam kejuaraan nasional.",
        published: "21 Juni 2024",
        image: "https://images.unsplash.com/photo-1553773077-91673524aefa?w=500"
    },
    {
        title: "Kejuaraan Golf Dunia",
        desc: "Turnamen golf megah digelar di berbagai negara.",
        published: "4 Juli 2024",
        image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500"
    },
    {
        title: "Pertandingan Futsal Nasional",
        desc: "Kompetisi futsal bergengsi kembali digelar.",
        published: "19 Juli 2024",
        image: "https://images.unsplash.com/photo-1519750157634-525a275b6355?w=500"
    }
]

const lingkunganSocial = [
    {
        title: "Gerakan Penghijauan Nasional",
        desc: "Gerakan besar menanam pohon di seluruh Indonesia.",
        published: "6 Januari 2024",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500"
    },
    {
        title: "Kampanye Kurangi Sampah Plastik",
        desc: "Gerakan sosial untuk mengurangi sampah plastik sekali pakai.",
        published: "14 Januari 2024",
        image: "https://images.unsplash.com/photo-1453473552141-5eb0e5a9dd12?w=500"
    },
    {
        title: "Bencana Alam dan Bantuan Sosial",
        desc: "Ribuan relawan turun membantu korban bencana.",
        published: "2 Februari 2024",
        image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=500"
    },
    {
        title: "Program Air Bersih",
        desc: "Program penyediaan air bersih di daerah terpencil.",
        published: "15 Februari 2024",
        image: "https://images.unsplash.com/photo-1581578029043-909f28693db3?w=500"
    },
    {
        title: "Pelestarian Satwa Langka",
        desc: "Upaya penyelamatan spesies langka Indonesia.",
        published: "28 Februari 2024",
        image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=500"
    },
    {
        title: "Aksi Donor Darah Massal",
        desc: "Ribuan warga ikut serta dalam donor darah.",
        published: "9 Maret 2024",
        image: "https://images.unsplash.com/photo-1611143669185-1f5c2aa820c7?w=500"
    },
    {
        title: "Program Rumah Layak Huni",
        desc: "Pemerintah membangun rumah untuk warga kurang mampu.",
        published: "21 Maret 2024",
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=500"
    },
    {
        title: "Gerakan Hemat Energi",
        desc: "Masyarakat diajak mengurangi penggunaan listrik.",
        published: "3 April 2024",
        image: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?w=500"
    },
    {
        title: "Kegiatan Bersih Pantai",
        desc: "Relawan membersihkan sampah di wilayah pesisir.",
        published: "16 April 2024",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=500"
    },
    {
        title: "Edukasi Ramah Lingkungan",
        desc: "Program sekolah mengenai pentingnya menjaga lingkungan.",
        published: "30 April 2024",
        image: "https://images.unsplash.com/photo-1581579188871-45ea61f2f7ad?w=500"
    },
    {
        title: "Aksi Sosial Komunitas",
        desc: "Komunitas lokal mengadakan kegiatan sosial.",
        published: "12 Mei 2024",
        image: "https://images.unsplash.com/photo-1529973565451-4ec1a75583a5?w=500"
    },
    {
        title: "Gerakan Peduli Sungai",
        desc: "Warga bekerja sama membersihkan aliran sungai.",
        published: "24 Mei 2024",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500"
    },
    {
        title: "Bantuan Sosial Kemanusiaan",
        desc: "Bantuan besar dikirimkan ke daerah terdampak krisis.",
        published: "7 Juni 2024",
        image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500"
    },
    {
        title: "Kampanye Pengurangan Emisi",
        desc: "Program nasional untuk menekan polusi udara.",
        published: "19 Juni 2024",
        image: "https://images.unsplash.com/photo-1502303756785-e8d3a8e3f21f?w=500"
    },
    {
        title: "Inisiatif Bank Sampah",
        desc: "Program bank sampah meningkatkan kesadaran masyarakat.",
        published: "1 Juli 2024",
        image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e9?w=500"
    }
]

const typeCategory = [
    {
        title: "Politik",
        image: "./assets/images/politician.png",
        alt: "Politik",
        key: "politik"
    },
    {
        title: "Hiburan",
        image: "./assets/images/video.png",
        alt: "Hiburan",
        key: "hiburan"
    },
    {
        title: "Edukasi",
        image: "./assets/images/education.png",
        alt: "Edukasi",
        key: "edukasi"
    },
    {
        title: "Olahraga",
        image: "./assets/images/basketball.png",
        alt: "Olahraga",
        key: "olahraga"
    },
    {
        title: "Lingkungan & Social",
        image: "./assets/images/planet-earth.png",
        alt: "Lingkungan & Social",
        key: "lingkungan-social"
    }
]

export {
    categories,
    typeCategory,
    politik,
    hiburan,
    edukasi,
    olahraga,
    lingkunganSocial
};