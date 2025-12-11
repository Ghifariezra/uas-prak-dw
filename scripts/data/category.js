const categories = [
    {
        title: "Teknologi Modern",
        desc: "Berita terbaru tentang teknologi masa kini.",
        published: "29 Oktober 2024",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500",
        content: `
            Cara buat content, tinggal tambahain kaya gini aja yaaaa....

            edit - edit nya di category.js ini yakkkkkkk
        `
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
        title: "Single Baru Tiara Andini Ngeluwihi Dibuat oleh Produser Musik Justin Bieber, EXO, hingga NCT",
        desc: "Lagu baru Tiara Andini berjudul Ngeluwihi menampilkan lirik berbahasa Jawa dan Inggris yang digarap produser musik internasional, Hyuk Shin.",
        published: "5 Januari 2025",
        image: "https://imgur.com/C8IR70B?w=500",
        content: `
        BeritaKita ~~ Penyanyi, Tiara Andini, kembali merilis single baru berjudul Ngeluwihi. 
        Video musik untuk lagu baru itu tayang tepat tengah malam tadi pada Jumat, 5 Januari 2024. 
        Tak main-main, dalam lagu ini, Tiara menghadirkan gebrakan baru yang makin menunjukkan eksistensinya sebagai bintang pop populer Indonesia.

        Belum sampai sehari, musik video single baru Tiara Andini itu langsung menempati trending tiga besar di Youtube, tepatnya berada di posisi kedua hingga artikel ini ditulis. 
        Para penggemarnya pun bangga dengan pencapaian Tiara dalam lagu barunya ini yang kembali keluar dari zona nyamannya. 
        Pasalnya, Tiara Andini mengeksplor musiknya, yang berbeda dari lagu-lagu sebelumnya. 
        Ditambah lagi, penampilannya mengenakan aksesori khas Jawa yang dimodifikasi dengan busana modern serta gunungan wayang yang jadi latar di video klipnya.    
        
        Lagu yang liriknya terdiri dari bahasa Inggris dan Jawa itu diproduseri oleh Hyuk Shin(153/Joombas). 
        Dia merupakan produser rekaman internasional atau eksekutif musik ternama yang telah bekerja sama dengan superstar global, seperti Justin Bieber, 
        NCT, Super Junior, TXT, EXO, Monsta X, Shinee, Girls' Generation (SNSD), dan masih banyak lagi.

        Selain Hyuk Shin, musiknya juga disusun oleh Chris M Yong dari 153/Joombas Music Group. 
        Sebagai informasi, 153/Joombas Music Group adalah perusahaan produksi dan penerbitan musik yang didirikan pada 2011 oleh produser Hyuk Shin yang saat ini berbasis di Hollywood, 
        New York dan Seoul, Korea Selatan.

        Lagu Ngeluwihi bercerita tentang seseorang yang rela melakukan apa saja demi orang yang dicintainya.
        Kembali bekerja sama dengan produser musik global, Tiara mengangkat budaya tradisional Indonesia, yakni bahasa Jawa di lagu barunya ini. 
        Yang menarik, Tiara Andini sendiri yang menciptakan lirik berbahasa Jawa untuk lagu Ngeluwihi.
        
        Sementara itu, lirik berbahasa Inggris dan pembuatan rap digarap oleh SYA. 
        Dia merupakan rapper perempuan asal Malaysia dengan nama lengkap Nur Batrisya Mohammad Nazri. 
        Namanya masuk dalam Forbes 30 Under 30 Asia kategori Entertainment & Sports pada 2022.

        Meski sebelumnya sudah pernah bekerja sama dengan produser kondang asal Korea Selatan dalam lagu Flip It Up, para penggemar menyukai lagu baru Tiara Andini ini. 
        Mereka tidak menyangka bila hasilnya melebihi ekspektasi. Sesuai dengan arti judul lagunya, yakni "Ngeluwihi" yang berarti "Melebihi."

        Dukungan mengalir untuk penyanyi jebolan ajang pencarian bakat itu di unggahan Instagram soal lagu barunya. 
        Teman seperjuangannya, penyanyi Ziva Magnolya, juga mengomentari lagu tersebut. 
        Menurutnya, Tiara Andini selalu keren dalam menghadirkan lagu-lagu barunya. 

        "Di luar ekspektasi! Tiara keren nuemen sak pol e," tulis @esadeg***. 

        "Ngeluwihi ekspektasi ini mah, keren abis," tulis @diki_*****.

        "Ga expect banget keren," tulis @rzks*****.

        "Hah ini sih local pride, you got it Ti so proud of you," tulis @sari*****.

        "Kamu tau ngga? Ini yg aku inginkan dari musisi" indonesia sejak dulu, new genreeee of indonesian artist that's crazyy," @afi*****.
        `
    },

    {
        title: "Rizky Febian dan Tiara Andini Siap Guncang Pontianak di Harmony Fest Xperience 2026",
        desc: "Harmony Fest Xperience yang bakal digelar HFX Vibes pada Januari 2026 mendatang, Press Conference berlangsung di Goffee, Minggu, 30 November 2025.",
        published: "30 November 2025",
        image: "https://imgur.com/a/Snkur7q?w=500",
        content: `
        BeritaKita ~~ Penyanyi Rizky Febian hingga Tiara Andini bakal tampil di Harmony Fest Xperience yang digelar HFX Vibes di Halaman Grand Mahkota Hotel Pontianak pada 24 Januari 2026 mendatang. 
        HFX Vibes bakal memberikan pengalaman berbeda kepada penonton pada konser kali ini, lewat berbagai kolaborasi apik.

        Direktur HVX VIBES, Stefano Mendez, menyampaikan bahwa Harmony Fest Xperience akan menjadi konser musik yang berbeda dibandingkan dengan event-event lainnya.
        Pada konser ini akan  menghadirkan sensasi pengalaman ngonser yang tidak biasa, salah satunya yaitu dengan menggandeng komunitas Corak Insan untuk turut berkain saat konser.

        "Kami HFX Vibes adalah promotor baru untuk event ini yang tujuan utamanya kita itu untuk menghadirkan, memberikan pilihan bagi para penikmat musik di Kalimantan Barat, khususnya Pontianak, untuk merasakan experience yang berbeda di dalam suatu event konser," ujar Stefano saat Press Conference di Goffee, Minggu, 30 November 2025.
        Penjualan tiket resmi dibuka mulai 1 Desember 2025 pada pukul 19.00 WIB yang dapat dibeli secara online melalui YesPlis dan di Goffee Pontianak untuk tempat pembelian tiket secara offline. 
        Saat ini, hanya tersedia tiket presale 1 untuk kategori festival yang dibanderol senilai Rp 150 ribu dan tiket presale VIP seharga Rp 300 ribu.
        "Kuota online dapat dibeli di website YesPlis, yang link-nya ada di bio Instagram. Dan kuota offline dapat dibeli di store Goffee Pontianak di Jalan S. Parman," ujarnya. 
        `
    },
    {
        title: "Mahalini, Axelo, Nuca, Shakirra Vier, dan 5 Musisi Lain Bakal Ramaikan Kota Bandung",
        desc: "Star Media Nusantara mengungkapkan Mahalini, Axelo, Nuca, Peter Holly, Angie Carvalho, Novia Bachmid, Piche, Shakirra, dan Vanessa Zee akan hadir di Bandung.",
        published: "08 Desember 2025",
        image: "https://imgur.com/a/MRl0Io9?w=500",
        content: `
        BeritaKita ~~ Star Media Nusantara, talent management di bawah naungan MNC Group lewat akun Instagram @starmedianusantara mengungkapkan Mahalini bersama Axelo, Nuca, Peter Holly, Angie Carvalho, Novia Bachmid, Piche Kota, Shakirra Vier, dan Vanessa Zee akan mampir ke Bandung. 
        Mereka hadir dalam acara Journey of Stars Volume 23, pada 8 - 12 Desember 2025. 

        Masing-masing talent akan mempromosikan karya terbarunya. 
        Mereka akan berkeliling beberapa radio di Bandung, seperti HITS Unikom, Ardan Radio, Oz Radio, Paramuda FM, dan masih banyak lagi.

        Tak hanya berkeliling radio, Mahalini dan kawan-kawan juga akan tampil membawakan lagu-lagu terbarunya di Kopi Bajawa Flores Laswi, Bandung pada Rabu, 10 Desember 2025. 
        Untuk informasi detail tentang Journey of Stars Volume 23, kamu bisa cek di Instagram @starmedianusantara.

        Journey of Stars (JOS) adalah pertunjukan acara musik yang diadakan Star Media Nusantara sejak 2020. 
        Event ini menampilkan musisi di bawah naungan talent management Star Media Nusantara di berbagai kota di Indonesia, seperti Bandung, Malang, Bali, Jogja, Serang, dan Semarang. 

        JOS tak hanya sebagai media promosi dari para musisi, tapi juga momen para musisi bertemu langsung dengan para penggemarnya di berbagai kota.   
        `
    },
    {
        title: "Mahalini Comeback, Guncang Panggung Spotify Wrapped 2025.",
        desc: "Mahalini tampil memukau di panggung Spotify Wrapped Live Indonesia 2025 pada Kamis (4/12/2025) di Studio RCTI+.",
        published: "04 Desember 2025",
        image: "https://imgur.com/zfzNnP5?w=500",
        content: `
        Mahalini kembali ke industri hiburan Tanah Air. 
        Setelah setahun hiatus, Mahalini tampil memukau di panggung Spotify Wrapped Live Indonesia 2025 pada Kamis (4/12/2025) di Studio RCTI+. 

        Munculnya Mahalini di panggung Spotify Wrapped 2025 disambut riuh penonton. 
        Mereka merasa rindu menonton langsung penampilan Mahalini setelah setahun hiatus. 

        "Mahalini!!" teriak para penonton.


        Mengawali penampilannya, Mahalini membawakan lagu berjudul Rindu Ku Rindu dari album barunya, KOMA.
        Penampilan epik Mahalini kemudian menyanyikan lagu barunya yang berjudul 'Untuk yang Bersamanya'. 

        Mahalini sempat menangis terharu mendengar sorakan penonton yang meneriaki namanya seusai lagu keduanya. 
        Mahalini tampil memukau mengenakan gaun menjuntai dengan puff di bahunya yang membuat tampilannya makin mewah.

        Rambut panjang Mahalini dikepang panjang menjuntai, memberi kesan sleek namun elegan. 
        Dalam acara ini, Mahalini juga sempat bernyanyi bersama dengan Rizky Febian dan Adrian Khalid membawakan lagu 'Alamak'. 

        Sebagai informasi, Spotify, platform streaming berlangganan terpopuler di dunia, mengumumkan akan menggelar acara puncak tahunannya, Spotify Wrapped Live Indonesia 2025, disiarkan langsung dari Studio RCTI+, Kebon Jeruk, pada 4 Desember 2025. 
        Acara ini merupakan tahun ketiga Spotify merayakan lanskap audio Indonesia melalui siaran televisi, yang kali ini dapat disaksikan secara serentak di RCTI, GTV, dan RCTI+. 

        Wrapped merupakan kampanye global akhir tahun bagi lebih dari 713 juta pengguna. 
        Pengalaman ini merangkum lagu, artis, album, podcast yang paling banyak didengarkan sepanjang tahun. 

        Acara Spotify Wrapped Live Indonesia 2025 tidak hanya merayakan data global, tetapi secara spesifik menekankan keragaman dan antusiasme pendengar di Tanah Air. 
        Kategori yang akan diumumkan berdasarkan pada streaming pengguna, sehingga memberikan gambaran terhadap preferensi dan tren budaya yang terjadi tahun ini.
        `
    },
    {
        title: "Merangkai Kisah Indah, Mega Series Terbaru Persembahan Indosiar",
        desc: "INDOSIAR kembali memperkuat posisinya sebagai penyedia drama berkualitas dengan menghadirkan serial terbaru berjudul Merangkai Kisah Indah.",
        published: "11 Juli 2025",
        image: "https://imgur.com/07kNwnn?w=500",
        content: `
        BeritaKita ~~ kembali memperkuat posisinya sebagai penyedia drama berkualitas dengan menghadirkan serial terbaru berjudul "Merangkai Kisah Indah". 
        Drama ini menampilkan aktor dan aktris lintas generasi yang saat ini digemari, seperti Basmalah Gralind, Raden Rakha, dan Panji Saputra.

        Mega series ini akan mulai tayang pada Senin, 14 Juli 2025, setiap hari pukul 17.00 WIB di layar kaca Indosiar.

        "Merangkai Kisah Indah" adalah sebuah drama yang menyentuh hati, penuh dengan pengorbanan, pencarian diri, dan kekuatan cinta sejati. 
        Cerita yang sarat emosi ini semakin hidup dengan alur yang penuh kejutan dan karakter-karakter yang terasa dekat dengan kehidupan sehari-hari. 
        Indosiar memilih lagu Hanya Rindu dari Putri Ariani untuk menambah kedalaman emosional cerita ini.

        “Kami optimis 'Merangkai Kisah Indah' akan menjadi tayangan favorit pemirsa berkat alur cerita yang diramu apik. 
        Apalagi chemistry duo idola remaja saat ini, Basmalah Gralind dan Raden Rakha akan diuji melalui plot dan cerita yang jauh berbeda dari sinetron yang pernah mereka bintangi sebelumnya. 
        Ini kombinasi yang akan menjadi kekuatan 'Merangkai Kisah Indah',” ujar Ibu Harsiwi Achmad selaku Direktur SCM.
        
        Kisah ini dimulai dengan Widuri Ambaruni (Gita Sinaga), yang tengah mengandung anak dari suaminya, Aditya Aditama (Panji Saputra). 
        Namun, kebahagiaannya hancur ketika mengetahui perselingkuhan suaminya dengan Rianti Larasati (Tsania Marwah).

        Dalam keadaan terpuruk, Widuri mengalami kecelakaan yang merenggut nyawa bayinya. 
        Dalam keputusasaan, ia menukar bayinya yang telah tiada dengan bayi Rianti yang baru lahir. 
        Tanpa menyadari pertukaran itu, Rianti mengklaim bayi yang ditinggalkan di rumah sakit sebagai anaknya bersama Aditya, yang diberi nama Kenzo.

        Peristiwa ini mengubah nasib dua anak, Mutiara dan Kenzo, yang hidup dalam dunia yang bertolak belakang. 
        Mutiara (Basmalah Gralind), sebenarnya anak kandung Aditya dan Rianti, tumbuh dalam kesederhanaan bersama Widuri di kampung nelayan.

        Sementara Kenzo (Raden Rakha), yang bukan anak kandung Aditya, dibesarkan dalam kemewahan sebagai pewaris utama keluarga. 
        Ketika dewasa, takdir mempertemukan mereka kembali dalam situasi penuh konflik dan intrik keluarga yang rumit. 
        Dengan bumbu cinta segitiga, kisah mereka berkembang menjadi drama penuh emosi yang sulit ditebak akhirnya.

        Jangan lewatkan penayangan perdana Merangkai Kisah Indah, mulai Senin, 14 Juli 2025, setiap hari pukul 17.00 WIB.  
        `
    },
    {
        title: "Indosiar Kontrak Jebolan Dangdut Academy 5 untuk Mainkan Sinetron Terbaru, Simak Ulasan Lengkapnya!",
        desc: "Indosiar mengeluarkan Judul Sinetron terbaru yang akan diperankan oleh jebolan Dangdut Academy 5.",
        published: "1 Febuari 2025",
        image: "https://imgur.com/fxogN20?w=500",
        content: `
        BeritaKita ~~ Sukses dengan performa sinetron Panggilan yang selalu memperoleh 5 besar rating pertelevisian. 
        Indosiar ditambah dengan tayangan sepak bola membuat Indosiar berhasil menjadi tv nomor 1 dan 2 bergantian dengan saudaranya, SCTV yang berada dalam naungan EMTEK Group.

        Di tengah performa rating Indosiar yang tinggi diantara chanel lainnya. 
        Namun, siapa sangka, semenjak Pemerintah bersama Kominfo memutuskan TV analog secara bergilir, Indosiar kini harus menerima kenyataan performanya yang semakin menurun.

        Dilansir dari akun ratting @sobatvid terlihat perubahan rating yang signifikan sebelum dan sesudah diwajibkan tv digital. 
        Tak hanya karena itu saja, Indosiar memang belum menyangkan sinetron pengganti terbaru.

        Kian hari hanya mengandalkan tayangan Sepak Bola antar club dan tayangan Sinema rerun. 
        Akhirnya Indosiar memberi gebrakan baru.

        Dilansir dari akun Instagram @ikidalimunthe, "Gebrakan baru kembali hadir di dunia beradu akting, dimana rumah produksi Mega Kreasi Film telah mendaftarkan judul terbarunya, yakni Magic 5."

        Melalui situs resmi perizinan Pusbang Film Kemendikbud, Mega Kreasi Film ajukan aktor dan aktris muda Basmalah Gralind, Raden Rakha serta ketiga juara di ajang Dangdut Academy 5 sebut saja Sri Devi, Afan, dan Eby.

        Terlihat di snapgram Iki membuka pertanyaan dan dikomentarin netizen "Wow sudah terdaftar di Pusbang ya kak." 
        Iki menanggapi "Yap, itu hanya untuk lock judul saja. Sebenarnya urusan para pemain nanti bakal di casting ulang apapun bisa berubah nantinya."

        "Ini beneran kan bang! kalau beneran alhamdulilah kita tunggu kabar selanjutnya." kata netizen.

        Iki menanggapi dan memperjelas dengan menampilkan schedule Magic 5 yang diperkirakan akan syuting pada 04 Februari 2023 dan akan segera tayang pada 1 April 2023.

        Para fans pun antusias menanggapi, "Bismillah... semoga dimudahkan, lancar dan sukses... ini yang sangat ditunggu min." 
        ucap @neizha_chield ditambah akun lain "Gass yok bismillah ramaikan tagar #magic5 ." ucap @noetikelana.  
        `
    },
    {
        title: "Wabup Sidoarjo: Jayandaru Sunrise Jazz Festival perkuat identitas lokal",
        desc: "Wabup Sidoarjo Mimik Idayana saat membuka kegiatan Jayandaru Sunrise Jazz Festival di Sidoarjo, Minggu (7/12/2025).",
        published: "7 Desember 2025",
        image: "https://imgur.com/c6VghHo?w=500",
        content: `
        BeritaKIta ~~ Wakil Bupati (Wabup) Sidoarjo Mimik Idayana menyatakan bahwa penyelenggaraan Jayandaru Sunrise Jazz Festival merupakan bentuk nyata semangat Pemerintah Kabupaten (Pemkab) Sidoarjo dalam memperkuat identitas budaya sekaligus meningkatkan sektor pariwisata daerah.

        "Acara Jayandaru Sunrise Festival 2025 merupakan wujud semangat kita dalam memperkuat identitas budaya dan menggairahkan pariwisata," kata Mimik dalam keterangannya di Sidoarjo, Jawa Timur, Senin.

        Menurutnya, festival tersebut menghadirkan beragam pertunjukan, mulai dari peragaan busana, tari tradisional, penampilan musik jazz, angklung, hingga pameran UMKM yang menampilkan produk-produk kreatif khas Sidoarjo.

        Ia menilai ragam kegiatan tersebut sukses menarik antusiasme warga dan menjadi ruang ekspresi bagi pelaku seni serta pelaku usaha lokal.

        Acara yang digelar oleh Dinas Kepemudaan, Olahraga dan Pariwisata (Disporapar) Kabupaten Sidoarjo itu berlangsung meriah di halaman Monumen Jayandaru Sidoarjo tersebut, diharapkan mampu membuka ruang yang lebih luas bagi tumbuhnya ekonomi kreatif di Kabupaten Sidoarjo.

        Menurutnya, keberlanjutan festival semacam sangat penting sebagai wadah menggali potensi dan kreativitas generasi muda.

        "Saya berharap acara ini dapat terus berkelanjutan sebagai sarana menggali potensi anak-anak muda Sidoarjo dalam kesenian dan budaya daerah," kata Mimik.

        Sementara itu, Kepala Disporapar Sidoarjo Yudhi Iriyanto menjelaskan bahwa festival ini merupakan hasil kolaborasi antara Pemkab Sidoarjo dengan sejumlah pelaku wisata lokal.

        Dalam kegiatan tersebut ia juga mengumumkan peluncuran Tari Pesona Delta, tarian yang digagas sebagai ikon budaya baru Kabupaten Sidoarjo.

        "Festival ini merupakan hasil kolaborasi antara pemerintah, pelaku wisata, dan komunitas ekonomi kreatif dalam upaya pengembangan pariwisata di Sidoarjo. 
        Tarian Pesona Delta akan menjadi ikon baru untuk mengenalkan kebudayaan Sidoarjo lebih luas lagi," kata Yudhi.

        Dengan berbagai penampilan seni, kolaborasi kreatif, serta peluncuran tarian baru, Jayandaru Sunrise Jazz Festival 2025 menjadi salah satu agenda budaya tahunan yang mempertegas komitmen Sidoarjo dalam memajukan sektor seni, ekonomi kreatif, dan pariwisata.
        `
    },
    {
        title: "Horor Komedi Penjara Joko Anwar Siap Mengguncang Bioskop",
        desc: "Official Poster Film Ghost in the Cell .",
        published: "09 Desember 2025",
        image: "https://imgur.com/ndIBIkD?w=500",
        content: `
        BeritaKita ~~ Joko Anwar kembali hadir dengan karya terbaru yang siap mengguncang dunia perfilman Indonesia lewat film berjudul Ghost in The Cell. 
        Film ini menjadi sorotan sejak awal diumumkan, terutama karena menghadirkan Abimana Aryasatya sebagai pemeran utama. 

        Kehadiran Abimana menjadi momen penting, mengingat ini adalah comeback-nya ke layar lebar setelah enam tahun vakum sejak membintangi Gundala pada 2019. 
        Ghost in The Cell menampilkan deretan aktor laki-laki lintas generasi yang selama ini dikenal sebagai pemain reguler dalam film-film Joko Anwar. 

        Nama-nama besar seperti Bront Palarae, Danang Suryonegoro, Endy Arfian, Lukman Sardi, Mike Lucock, Yoga Pratama, Morgan Oey, Aming, Kiki Narendra, Rio Dewanto, hingga Tora Sudiro turut memperkuat jajaran pemeran. 
        Film ini juga memperkenalkan sosok pendatang baru Magistus Miftah yang langsung mencuri perhatian.

        Cerita berpusat pada dua geng yang saling bermusuhan di dalam penjara Jakarta yang penuh sesak. 
        Konflik mereka memanas, namun keadaan berubah drastis ketika satu per satu narapidana tewas secara misterius. 

        Ternyata penyebabnya bukan pertarungan antar geng, melainkan teror dari sesosok hantu ganas yang gentayangan di balik tembok penjara. 
        Kedua geng pun terpaksa bekerja sama demi bertahan hidup, meski rasa benci masih membara di antara mereka.

        Film ini memadukan ketegangan horor dengan unsur komedi yang segar. 
        Bayangkan para napi yang terkenal garang justru dibuat ketakutan oleh kehadiran hantu yang jauh lebih mengerikan. 

        Atmosfer ruang sempit penjara semakin memperkuat rasa claustrophobic yang akan membuat penonton ikut gelisah sepanjang film. 
        Ghost in The Cell merupakan karya ke-12 Joko Anwar dan menampilkan daftar pemain yang sangat solid. 

        Deretan aktor seperti Abimana Aryasatya, Morgan Oey, Rio Dewanto, Aming, Bront Palarae, hingga bintang muda seperti Almanzo Konoralma dan Dewa Dayana menjadi kekuatan besar dalam membangun dunia cerita. 
        Dukungan dari banyak aktor pendukung lainnya juga menambah dimensi komedi dan horor yang seimbang.

        Film ini dijadwalkan tayang di bioskop Indonesia pada tahun 2026 dan diprediksi menjadi salah satu rilisan yang paling dinantikan berkat kombinasi genre yang unik, jajaran pemeran berbakat, serta sentuhan khas Joko Anwar yang selalu mencuri perhatian. 
        Ghost in The Cell siap memberikan pengalaman menonton yang berbeda dan menghibur bagi para pecinta film horor komedi.        
        `
    },
    {
        title: "Diguyur Hujan Tak Goyah, Fortuna Fest 2025 Jadi Pengalaman Festival Musik Unik dan Berkesan di Jember",
        desc: "Penonton Fortuna Fest 2025 terus berjingkrak di bawah guyuran hujan.",
        published: "8 Desember 2025",
        image: "https://imgur.com/2Kbg5os?w=500",
        content: `
        BeritaKita ~~ Fortuna Fest 2025, festival musik perdana yang digagas dan diselenggarakan oleh Hotel FortunaGrande JEMBER, resmi berakhir dengan sukses besar pada Sabtu malam 6 Desember 2025. 
        Acara ini bukan hanya menjadi konser musik besar pertama yang diinisiasi oleh sebuah hotel di JEMBER, tetapi juga sukses menarik ribuan penonton yang memadati area Stadion Universitas JEMBER sejak sore hingga penutupan.

        Meskipun sempat diguyur hujan deras pada sore hari, antusiasme pengunjung sama sekali tidak mereda. 
        Ribuan penonton dengan sigap mengenakan jas hujan, tetap bertahan di area konser, dan melanjutkan sing along menikmati penampilan musisi.

        "Suasana justru berubah menjadi pengalaman festival yang unik, hangat, dan penuh kebersamaan. 
        Solidaritas penonton Jember sangat luar biasa," demikian keterangan yang didapat di lokasi.

        Rangkaian penampilan Fortuna Fest 2025 menyuguhkan kombinasi talenta lokal dan nasional yang memikat. 
        Panggung dibuka dengan apik oleh musisi lokal Jember, Shelby dan Sisikitaa, yang berhasil memanaskan suasana.

        Kemudian, Coldiac tampil membawakan set bernuansa pop-alternative dengan energi khas mereka. 
        Menjelang malam, Juicy Luicy sukses membuat area festival bergema oleh nyanyian massal penonton dengan lagu-lagu populer mereka. 
        Sebagai puncak dan penutup yang dinanti, Vierratale tampil sebagai headliner utama, membawakan lagu-lagu ikonik yang menutup gelaran malam itu dengan meriah.

        Apriyanto, selaku penyelenggara Fortuna Fest 2025, menyampaikan apresiasi atas suksesnya acara ini.

        "Fortuna Fest tahun ini menghadirkan energi yang sangat berbeda. 
        Meskipun hujan sempat turun, penonton tetap solid dan menikmati seluruh rangkaian acara. 
        Ini menunjukkan besarnya dukungan dan semangat mereka. 
        Kami berterima kasih kepada seluruh pengunjung, talent, tim produksi, serta sponsor seperti Gajah Baru yang telah berkolaborasi bersama kami,” ujar Apri panggilan akrabnya, Senin 8 Desember 2025.

        Penjualan tiket Fortuna Fest 2025, yang hadir dalam kategori Tribun hingga VVIP, tercatat sangat baik, memperkuat posisi festival ini sebagai salah satu agenda musik yang semakin ditunggu oleh masyarakat Jember dan sekitarnya.

        Hotel FortunaGrande Jember berkomitmen untuk menghadirkan gelaran Fortuna Fest berikutnya dengan skala yang lebih besar, lineup yang lebih variatif, dan pengalaman festival yang semakin berkualitas.
        `
    },
    {
        title: "Review Film Agak Laen: Menyala Pantiku! Standar Baru Film Komedi Indonesia?",
        desc: "Poster Film Agak Laen Menyala Pantiku().",
        published: "27 November 2025",
        image: "https://imgur.com/phTvpkS?w=500",
        content: `
        BeritaKita ~~ Film Agak Laen, Menyala Pantiku! siap menyapa para pecinta film, khususnya komedi di jaringan bioskop-bioskop Tanah Air hari ini, Kamis (27/11/2025). 

        Film produksi Imajinari ini memang sudah dinanti kedatangannya setelah film pertamanya mendapat antusias yang luar biasa dengan capaian 9 juta penonton. 

        Masih ditulis dan disutradarai oleh Muhadkly Acho, Agak Laen Menyala Pantiku mengusung genre komedi investigasi. 

        Menceritakan tentang Bene, Jegel, Boris dan Oki yang mendapat kesempatan terakhir untuk memperjuangkan karier mereka sebagai detektif, dalam sebuah misi penyamaran di panti jompo.

        Kalau pada film yang pertama kuarted ini harus menutupi kematian pejabat di rumah hantu, kini, Boris dkk harus menemukan pelaku pembunuhan anak Wali Kota sebuah wilayah bernama Yamakarta.

        Sejak awal, Acho dan para produser Ernest Prakasa-Dipa Andika memang sudah menekankan bahwa Agak Laen akan menyuguhkan cerita baru pada setiap penggarapannya, seperti Warkop DKI. 

        Namun tak disangka, langkah itu justru menjadi strategi yang bagus untuk membuat film keduanya terasa lebih lucu dengan cerita yang fresh.  

        Acho berhasil menyajikan komedi ringan yang dibangun dari situasi menegangkan, kemudian memberikan sebuah tembakan punchline pada adegan-adegan dalam film, yang hampir tak pernah gagal mengundang gelak tawa penonton.

        Terlebih, dua adegan yang sensasional dan emosional itu. 
        Bisa dijamin, kalimat "kau akan terpingkal sampai lompat dari kursi bioskop" tak akan terdengar berlebihan bila penonton dapat menyimak dengan baik alur cerita hingga sampai di adegan itu. 

        Walaupun pada adegan-adegan emosional, penyelesaiannya seperti agak terburu-buru sehingga terasa patah. 
        'Baru mau sedih, eh udah lucu lagi' Begitulah kira-kira ungkapan yang tepat.  

        Dalam film ini, Boris didapuk memainkan konflik drama yang lebih intens. 
        Perannya sebagai seorang ayah anak satu, yang tengah menghadapi proses perceraian dengan sang istri membuat cerita ini sedikit lebih sentimentil.   

        Bumbu isu personal pada film ini bisa menjadi daya tarik tersendiri (khususnya yang tertarik mengikuti perjalanan pernikahan Boris), mengingat "status duda" kerap jadi bahan roasting Oki, Bene dan Jegel terhadap Boris, setidaknya pada dua preskon filmnya.

        Meski Boris yang dapat tugas pegang beban drama, yang mengherankan adalah peningkatan kualitas akting Bene Dion yang nampak lebih luwes. 
        Kalau di Agak Laen pertama kan angktinya.. ah sudahlah.. (Tolong anggap ini pujian lho ya bang.. he he). 

        Selain cerita yang lebih lucu, unsur budaya Batak juga terasa lebih tebal di film kedua ini.  

        Memilih angle ikatan marga menjadi alasan Bene dkk bisa menyusup ke panti jompo, membuat film ini terasa lebih "batak" dari sebelumnya. 
        Para pasukan bermarga pasti setuju dalam hal ini. 

        Agak Laen: Menyala Pantiku! meninggalkan aftereffect perasaan haru sekaligus harapan baru akan masa depan film komedi Indonesia.  

        Akankah film Agak Laen menjadi standar baru film komedi kita? temukan jawabannya di bioskop mulai 27 November 2025.        
        `
    },
    {
        title: "Gamer Indonesia Juara Kontes Minecraft MrBeast",
        desc: "Tim Indonesia memenangkan kontes membangun kota atau negara dunia Minecraft yang digelar Youtuber Mr. Beast. Tim ini membangun miniatur Indonesia lengkap dengan detail bangunan ikonik hingga tokoh penting di Tanah Air. (Youtube Mr. Beast)",
        published: "22 November 2025",
        image: "https://imgur.com/76A2y94?w=500",
        content: `
        BeritaKita ~~ Gamer atau kreator Minecraft Indonesia mencatat prestasi. 
        Kali ini, para pencinta game Minecraft itu menjadi juara kontes yang digelar oleh Youtuber kenamaan, MrBeast.  

        Kontes ini diikuti oleh sembilan negara, termasuk Brasil, Jerman, Thailand, hingga Indonesia. 
        Dalam kontes ini, peserta diberi waktu selama dua minggu untuk membangun kota atau negara tempat mereka berasal.  

        Tim Indonesia tampil menonjol lewat karya dengan tema budaya dan nasional. 
        Tim Indonesia yang beranggotakan 26 kreator membuat beragam bangunan, flora, fauna, termasuk simbol negara menggunakan elemen-elemen dari game Minecraft. 

        Tim Indonesia membuat "Indonesia mini" yang terdiri dari kepualauan dari Sabang hingga Merauke, termasuk objek-objek yang mewakili daerah-daerah tersebut di dalamnya.

        Saat pertama kali melihat karya tim Indonesia, Youtuber Mr Beast langsung disuguhi kemegahan Candi Borobudur yang dibuat dalam versi Minecraft. 

        Selain itu ada pula miniatur komodo, burung Garuda dan Pancasila, hingga 8 tokoh indonesia. 
        Semua juri yang melihat, termasuk MrBeast, terkesima dengan karya tersebut.  

        "Ini kelihatan gila. Saya terkesan dengan karya buatanmu, bahkan ada pulau-pulau kecil ini. Indonesia ini bukan satu pulau besar, tapi terkumpul dari ribuan pulau, sangat hebat," kata Youtuber MrBeast. 

        Juri lainnya mengatakan bahwa karya tersebut tersusun dengan baik. 
        Tampilannya juga dinilai sangat mirip dengan peta sungguhan dan sangat kreatif. 

        "Banyak cinta dan semangat dituangkan dalam karya ini," kata MrBeast.

        "Ini seperti sebuah karya seni," kata juri lainnya.  

        Karya tim Indonesia ini juga dinilai memiliki kekuatan visual dan konsistensi tema yang lebih unggul dari peserta lain. 

        Para juri juga menilai hasil karya tersebut menunjukkan kedalaman eksplorasi budaya yang jarang terlihat dalam kompetisi Minecraft bertaraf internasional.

        Menurut Alvin, salah satu kreator Minecraft Indonesia yang ikut serta dalam kontes ini, miniatur Indonesia ini dibangun oleh total 26 kreator yang terlibat.  

        Alvin mengatakan, pemenang kontes ini akan mendapatkan patung atau statue sebagai hadiah dari Mr. Beast. 
        Di statue ini akan tercantum nama kreator yang turut membangun kota atau negara tersebut.  

        "Patung itu nantinya akan diletakkan di tempat public/umum di sekitar Jakarta. Tapi saat ini masih dicari tempat yang memungkinkan untuk diletakkan secara permanen," kata Alvin yang memiliki nama pengguna Azrealon ini saat dihubungi KompasTekno.

        Adapun deretan builder yang ikut berperan untuk memenangkan kompetisi ini adalah sebagai berikut: 
        1. Azrealon 
        2. Mey3 
        3. Arheyn 
        4. Baconpancakze 
        5. Barart 
        6. Cgartz_ 
        7. Chapielyous 
        8. Chloriz 
        9. Chokyc_ 
        10. Eyaanlie 
        11. Highlens 
        12. Kord__ 
        13. Luxorith 
        14. Memokgg 
        15. Mikakunyt 
        16. Mindrafauza 
        17. Morgennn 
        18. Mrranzler 
        19. Nagaapi 
        20. Nyapyeey 
        21. Reyylyne_ 
        22. Rynqu 
        23. Silmarey 
        24. Ulstick 
        25. Yonascy 
        26. Zlaine
        `
    },
    {
        title: "Marketplace Gaming Indonesia Ekspansi ke Pasar Internasional",
        desc: "Platform marketplace Itemku.",
        published: "27 November 2025",
        image: "https://imgur.com/IC4zNSO?w=500",
        content: `
        BeritaKita ~~ Itemku, platform e-commerce yang melayani transaksi jual beli item, gold, voucher game, top-up, dan akun game untuk berbagai judul game, mengumumkan langkah strategis untuk memperluas jangkauan bisnis ke pasar internasional.

        Ekspansi internasional menjadi bagian dari strategi jangka panjang perusahaan untuk membangun kehadiran di lebih banyak negara, menyatukan gamer global dalam satu platform pertukaran yang andal, aman, dan kompetitif secara harga.

        “Misi kami adalah memastikan para gamer di seluruh dunia dapat membeli kebutuhan digital mereka dengan cepat, dengan harga terbaik, dan dengan perlindungan maksimal terhadap risiko transaksi. 
        Kami ingin mendemokratisasi akses terhadap ekonomi gaming global,” kata CEO Itemku Prasetya Setiawan dalam keterangan persnya, Kamis (27/11/2025).

        Seiring dengan itu, perusahaan juga mengonfirmasi bahwa ekspansi ini akan tetap berjalan beriringan dengan komitmen utama itemku di pasar Indonesia. 
        Layanan lokal akan terus diperkuat melalui penambahan pilihan pembayaran domestik, peningkatan layanan pelanggan, dan perluasan kategori produk gaming.

        “Selama bertahun-tahun, kami melihat bagaimana industri gaming terus berkembang dan menciptakan peluang ekonomi yang besar bagi gamer, kreator, dan seller. 
        Di Indonesia, itemku tumbuh sebagai marketplace gaming terbesar dengan ekosistem yang sehat, transparan, dan aman. Sekarang, kami siap membawa nilai yang sama ke pasar internasional,” ungkap Prasetya.

        Adapun sejak didirikan pada tahun 2014, itemku telah tumbuh pesat berkat komunitas gamer yang semakin berkembang. 
        Model marketplace-nya yang menyediakan transaksi aman antara penjual dan pembeli-ditambah ekosistem pembayaran, proteksi konsumen, dan pengiriman digital instan-membuat itemku menjadi pilihan utama para gamers di Indonesia.

        “Penjual aktif menawarkan berbagai kebutuhan gaming mulai dari Mobile Legends, Roblox, Free Fire, PUBG Mobile, Genshin Impact, Fortnite, Steam, PlayStation Network, Xbox, hingga Nintendo eShop,” tutur Prasetya.
        `
    },
    {
        title: "Alasan Golden Theater Kediri Masih Bertahan dan Tetap Ada di Hati Masyarakat Kediri",
        desc: "Saat ini Golden Theater Kediri Masih Bertahan dan Tetap Ada di Hati Masyarakat Kediri.",
        published: " 8 Desember 2025",
        image: "https://imgur.com/hahptKO?w=500",
        content: `
        BeritaKita ~~ Golden Theater Kediri tetap bertahan dan jadi idola meski saingan bermunculan.

        Mau nonton film di Kediri bukan hal yang repot karena sudah ada 4 bioskop yang hadir di kota yang katanya digadang-gadang jadi ibu kota Jawa bagian selatan ini. 
        Kediri nggak sebesar beberapa kota di Jawa Timur lainnya seperti Surabaya. Tetapi soal fasilitas publik, masih cukup memadai dan modern.

        Sebelumnya di Terminal Mojok saya juga sudah menulis artikel tentang 4 bioskop di Kediri. 
        Dari semuanya, Golden Theater Kediri adalah bioskop paling tua dan legendaris. 
        Saya kira dengan kehadiran CGV dan XXI yang saat itu mulai menjadi kompetitor, Golden Theater akan redup pamornya karena orang lebih memilih nonton di CGV dan XXI yang lebih modern dan hits.

        Nyatanya nggak juga. 
        Karena sampai sekarang Golden Theater Kediri masih cukup berjaya dan terus update menayangkan film. 
        Bahkan meski bertambah satu saingan lagi, yaitu Sam's Studio, tak membuat masyarakat Kediri berpaling dari Golden.

        1. Golden Theater Kediri, satu-satunya bioskop yang memperbolehkan pengunjung membawa makanan dari luar
        Biasanya kita suka mengeluh kan, pengin ngemil sambil nonton tapi makanan di bioskop harganya mahal. 
        Nah, di Golden Theater, kamu nggak perlu jajan di kantin bioskop karena kamu boleh membawa makanan dari luar. 
        Teman saya bahkan pernah mengatakan kalau dia membawa pentol saat nonton film di Golden. 
        Saya juga pernah melihat pengunjung bioskop yang membawa sosis goreng gerobakan kaki lima saat nonton film di sana.

        Mungkin ini menjadi alasan utama kenapa Golden Theater masih jadi bioskop paling nyaman di hati warga Kediri. 
        Dari dulu memang tak ada larangan membawa makanan dari luar. 
        Rasanya sudah kayak nonton di rumah sendiri, ya. Bebas bawa makanan apa pun.

        2. Harga tiket sedikit lebih murah dari bioskop lain
        Saya kadang memang nggak terlalu ngeh sama harga tiket bioskop. 
        Tapi kalau kita banding-bandingkan tiket bioskop termahal itu CGV. 
        Dan memang tiket bioskop di Golden Theater Kediri lebih murah. 
        Seingat saya waktu itu weekend, harga tiket di CGV dan XXI sudah Rp40 ribu, di Golden cuma Rp35 ribu. 
        Sam's Studio Kediri malah cuma Rp30 ribu, tapi sayangnya cuma menayangkan film lokal.

        Lantaran harga tiket yang murah itulah banyak warga yang kemudian memilih nonton di Golden. 
        Meski harga tiket terpaut Rp5 ribu, tapi lumayan, kan. 
        Bisa buat bayar parkir atau dialihkan beli pentol, lho. 
        Kalau di Golden malah pentolnya bisa dibawa masuk juga ke dalam bioskop buat ngemil. 
        Hitungannya jadi lebih hemat kalau nonton di Golden.

        3. Filmnya masih up to date dan lebih banyak yang tayang
        Meski cuma tersedia 5 studio di Golden Theater Kediri, film yang tayang di bioskop ini banyak. 
        Sepertinya diatur bisa masuk di jam tertentu saja, tapi setidaknya bisa mengobati orang yang lagi pengin nonton film tersebut dan tidak tayang di bioskop lain.

        Saya pernah mau nonton film Korea. 
        Waktu itu saya kira film tersebut bakal tayang di CGV, tapi ternyata nggak, di XXI apa lagi. 
        Siapa sangka kalau Golden malah menayangkan film tersebut meski jadwal tayangnya cuma pagi dan malam, dan bukan di jam strategis. 
        Yah, setidaknya saya bisa menonton tanpa repot-repot ke luar kota.

        Kalau saya lihat memang film di Golden Theater Kediri lebih banyak. 
        Up to date juga untuk terus menayangkan film-film terbaru. 
        Jadi nggak salah kalau Golden masih ramai dikunjungi warga, tak punah termakan usia meski bersaing dengan bioskop ternama lainnya.

        Golden memang sudah tua, sejak saya SMP bioskop ini sudah eksis dan jadi satu-satunya di Kediri. 
        Makanya saya cukup salut karena bioskop ini masih bertahan sampai sekarang dan banyak dikunjungi.
        `
    },
    {
        title: "GTV Siap Gelar Indonesian Inspiring Celebrity Awards 2025, Malam Penghargaan Bergengsi Bagi Selebriti Inspiratif",
        desc: "nspiring Celebrity Awards 2025.",
        published: "25 Februari 2025",
        image: "https://imgur.com/qp7Ubvs?w=500",
        content: `
        BeritaKita ~~ GTV sebagai home of entertainment, telah berhasil memberikan banyak penghargaan bergengsi seperti Indonesian Comedy Awards sebuah penghargaan bagi komedian Indonesia, Indonesian Trending Awards yang merupakan penghargaan bagi insan kreatif digital, dan banyak pengharaggan lainnya.

        Kini GTV siap menggelar malam puncak Indonesian Inspiring Celebrity Awards 2025, acara penghargaan bergengsi bagi selebriti Indonesia ter-inspiring. 
        Event tahunan ini pertama kali digelar dan akan disiarkan langsung pada Selasa, 25 Februari 2025, pukul 19.30 WIB, eksklusif di GTV.

        5 trofi bergengsi siap diperebutkan, mulai dari Best Celebrity Couple untuk pasangan selebriti yang harmonis dan menginspirasi, Inspiring Teens Celebrity bagi anak selebriti berprestasi, serta Celebrity Family Goals untuk keluarga selebriti yang kompak dan penuh kehangatan. 
        Ada juga Rising Star Celebrity bagi selebriti yang semakin bersinar sejak 2024, serta Most Wanted Celebrity untuk figur publik yang paling dicari dan diperbincangkan sepanjang tahun.

        Selain 5 kategori ini, Indonesian Inspiring Celebrity Awards 2025 juga akan memberikan satu trofi spesial Inspiring Celebrity Of The Year yang hanya akan diberikan kepada selebriti yang menjadi inspirasi banyak orang sepanjang setahun terakhir. 
        Kira-kira siapa ya selebriti yang akan bawa pulang trofi-trofi bergensi ini?

        Dengan menghadirkan deretan bintang ternama, malam penghargaan ini akan dipandu oleh, Indra Herlambang dan Astrid Tiar. 
        Penampilan spesial dari Bunga Citra Lestari (BCL), Rony Parulian, Happy Asmara, Nabila Taqiyyah dan Via Amelia siap memberikan penampilan terbaik dengan membawakan top hits mereka.

        Bukan hanya penyanyi ternama, Indonesian Inspiring Celebrity Awards 2025 juga dimeriahkan oleh kehadiran komedian dan selebriti yang namanya bersinar seperti, Imam Darto, Amel Carla, Dul Jaelani, Ate, Musdalifah, Arif Brata, dan Claudia Andhara. 
        Tak cukup sampai di situ, sederet artis ternama lainnya juga akan hadir loh, di malam puncak Indonesian Inspiring Celebrity Awards 2025.

        Jangan lewatkan Indonesian Inspiring Celebrity Awards 2025 pada Selasa, 25 Februari 2025, pukul 19.30 WIB, hanya di GTV.
        `
    },
    {
        title: "Bertabur Bintang dan Keluarga Selebriti di Amazing Kids Favorit Awards GTV Bertema Ice World Pertama di TV Indonesia!",
        desc: "Amazing Kids Favorit Awards GTV.",
        published: "13 Agustus 2025",
        image: "https://imgur.com/OabIXCe?w=500",
        content: `
        BeritaKita ~~ Setelah sukses selama dua tahun berturut-turut, Amazing Kids Favorit Awards kembali menyapa dengan konsep yang makin keren, Ice World! 
        Ajang ini bukan cuma hanya penghargaan, tapi juga ajang inspiratif untuk mengapresiasi kreativitas dan semangat anak-anak Indonesia dalam berkarya. 
        Wajar saja kalau event ini selalu dinantikan banyak keluarga.

        Tahun ini, puncak malam penghargaan akan tayang pada Jumat, 15 Agustus pukul 18.30 WIB, dari studio RCTI+, yang dikenal sebagai studio tercanggih di Asia!
        Dengan set panggung yang megah dan penuh warna, malam istimewa ini akan dipandu oleh duet host seru: Irfan Hakim dan Vega Darwanti.

        Makin seru dengan penampilan dari deretan bintang yang luar biasa. 
        Siap-siap terhibur oleh aksi panggung dari JKT48, Lyodra, dan Quinn Salman. 
        Lebih spesial lagi, ada kolaborasi dari empat keluarga selebriti yang bakal bikin kamu tersentuh dan tertawa:
        • Irfan Hakim bersama tiga buah hatinya: Aisha Keem, Djalu Hakim, dan Dzaky Hakim
        • Vega Darwanti dan Razqa
        • Gisel dan Gempi
        • Sarwendah bersama Thalia Putri Onsu

        Setiap pengumuman pemenang di kategori Amazing Kids Favorit Awards 2025 juga dikemas dengan cara seru lewat sketsa lucu dari Mazaya Amania, dibantu oleh komika seperti Hifdzi Khoir dan Ebel Cobra. 
        Pastinya bikin malam kamu makin pecah!

        Jangan sampai kelewatan, Jumat, 15 Agustus pukul 18.30 WIB di GTV. 
        Yuk, seru-seruan bareng di malam penghargaan anak paling kece ini!
        `
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