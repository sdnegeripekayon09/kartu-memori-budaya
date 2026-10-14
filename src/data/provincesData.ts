import { ProvinceData, DifficultyConfig, Achievement, DifficultyLevel, IslandRegion } from '../types/game';

export const PROVINCES_DATA: ProvinceData[] = [
  // --- SUMATRA (10) ---
  {
    id: 'aceh',
    name: 'Aceh',
    capital: 'Banda Aceh',
    island: 'Sumatra',
    ethnicGroups: 'Aceh, Gayo, Alas, Tamiang, Kluet',
    languages: 'Bahasa Aceh, Gayo, Alas, Tamiang',
    traditionalFood: 'Mie Aceh, Ayam Tangkap, Kuah Pliek U',
    traditionalDance: 'Tari Saman, Tari Seudati, Tari Ranup Lam Puan',
    traditionalHouse: 'Rumoh Aceh (Krong Bade)',
    funFact: 'Tari Saman diakui UNESCO sebagai Warisan Budaya Takbenda Dunia dan dijuluki tari seribu tangan.',
    color: '#0D9488'
  },
  {
    id: 'sumut',
    name: 'Sumatera Utara',
    capital: 'Medan',
    island: 'Sumatra',
    ethnicGroups: 'Batak (Toba, Karo, Mandailing, Simalungun), Nias, Melayu',
    languages: 'Bahasa Batak, Nias, Melayu',
    traditionalFood: 'Bika Ambon, Arsik Ikan Mas, Soto Medan',
    traditionalDance: 'Tari Tor-Tor, Tari Sigale-gale, Tari Gundala-Gundala',
    traditionalHouse: 'Rumah Bolon (Batak) & Rumah Omo Hada (Nias)',
    funFact: 'Danau Toba di Sumatera Utara adalah danau vulkanik terbesar di dunia dengan Pulau Samosir di tengahnya.',
    color: '#B91C1C'
  },
  {
    id: 'sumbar',
    name: 'Sumatera Barat',
    capital: 'Padang',
    island: 'Sumatra',
    ethnicGroups: 'Minangkabau, Mentawai',
    languages: 'Bahasa Minangkabau, Mentawai',
    traditionalFood: 'Rendang, Dendeng Balado, Sate Padang',
    traditionalDance: 'Tari Piring, Tari Payung, Tari Pasambahan',
    traditionalHouse: 'Rumah Gadang (atap gonjong mirip tanduk kerbau)',
    funFact: 'Rendang dinobatkan sebagai salah satu makanan terlezat di dunia versi CNN Travel.',
    color: '#DC2626'
  },
  {
    id: 'riau',
    name: 'Riau',
    capital: 'Pekanbaru',
    island: 'Sumatra',
    ethnicGroups: 'Melayu Riau, Sakai, Akit, Talang Mamak',
    languages: 'Bahasa Melayu Riau',
    traditionalFood: 'Gulai Belacan, Mie Sagu, Asam Pedas Ikan Baung',
    traditionalDance: 'Tari Zapin, Tari Makan Sirih (Persembahan)',
    traditionalHouse: 'Rumah Selaso Jatuh Kembar',
    funFact: 'Tari Zapin Riau kental dengan pengaruh irama gambus Arab dan Melayu yang anggun dan dinamis.',
    color: '#059669'
  },
  {
    id: 'kepri',
    name: 'Kepulauan Riau',
    capital: 'Tanjungpinang',
    island: 'Sumatra',
    ethnicGroups: 'Melayu Kepri, Bugis, Tionghoa, Jawa',
    languages: 'Bahasa Melayu Kepri',
    traditionalFood: 'Otak-otak Gonggong, Mie Tarempa, Luti Gendang',
    traditionalDance: 'Tari Melemang, Tari Zapin Melayu',
    traditionalHouse: 'Rumah Belah Bubung',
    funFact: 'Pulau Penyengat di Kepri adalah tempat lahirnya standarisasi bahasa Melayu yang menjadi cikal bakal Bahasa Indonesia.',
    color: '#2563EB'
  },
  {
    id: 'jambi',
    name: 'Jambi',
    capital: 'Jambi',
    island: 'Sumatra',
    ethnicGroups: 'Melayu Jambi, Kerinci, Kubu (Suku Anak Dalam)',
    languages: 'Bahasa Jambi, Melayu, Kerinci',
    traditionalFood: 'Tempoyak Patin, Gulai Tepek Ikan, Nasi Gemuk',
    traditionalDance: 'Tari Sekapur Sirih, Tari Selampit Delapan',
    traditionalHouse: 'Rumah Panggung Kajang Lako',
    funFact: 'Candi Muaro Jambi adalah kompleks percandian Buddha terluas di Asia Tenggara yang berdiri sejak abad ke-7.',
    color: '#D97706'
  },
  {
    id: 'sumsel',
    name: 'Sumatera Selatan',
    capital: 'Palembang',
    island: 'Sumatra',
    ethnicGroups: 'Palembang, Komering, Musi, Ogan, Pasemah',
    languages: 'Bahasa Palembang, Melayu Musi, Komering',
    traditionalFood: 'Pempek, Tekwan, Burgo, Pindang Patin',
    traditionalDance: 'Tari Gending Sriwijaya, Tari Tanggai',
    traditionalHouse: 'Rumah Limas',
    funFact: 'Palembang adalah pusat kemaharajaan maritim Sriwijaya yang pernah menguasai jalur perdagangan Asia.',
    color: '#E11D48'
  },
  {
    id: 'babel',
    name: 'Kepulauan Bangka Belitung',
    capital: 'Pangkalpinang',
    island: 'Sumatra',
    ethnicGroups: 'Melayu Bangka, Tionghoa Hakka',
    languages: 'Bahasa Melayu Bangka, Hakka',
    traditionalFood: 'Lempah Kuning, Mie Belitung, Martabak Bangka',
    traditionalDance: 'Tari Campak, Tari Men Sahang Lah Mirah',
    traditionalHouse: 'Rumah Rakit & Rumah Panggung Bangka',
    funFact: 'Terkenal dengan pantai batu granit raksasa nan indah yang diabadikan dalam novel dan film Laskar Pelangi.',
    color: '#0284C7'
  },
  {
    id: 'bengkulu',
    name: 'Bengkulu',
    capital: 'Bengkulu',
    island: 'Sumatra',
    ethnicGroups: 'Rejang, Serawai, Lembak, Enggano, Melayu',
    languages: 'Bahasa Rejang, Serawai, Melayu Bengkulu',
    traditionalFood: 'Pendap, Bagar Hiu, Pendap Daun Talas',
    traditionalDance: 'Tari Andun, Tari Bidadari Teminang Anak',
    traditionalHouse: 'Rumah Bubungan Lima',
    funFact: 'Habitat alami bunga bangkai raksasa Rafflesia arnoldii terbesar di dunia.',
    color: '#9333EA'
  },
  {
    id: 'lampung',
    name: 'Lampung',
    capital: 'Bandar Lampung',
    island: 'Sumatra',
    ethnicGroups: 'Lampung (Saibatin & Pepadun), Jawa, Sunda',
    languages: 'Bahasa Lampung (dialek Belalau & Menggala)',
    traditionalFood: 'Seruit, Gulai Taboh, Gabing, Lapis Legit',
    traditionalDance: 'Tari Sembah (Sigeh Penganten), Tari Bedana',
    traditionalHouse: 'Rumah Nuwou Sesat',
    funFact: 'Lampung memiliki aksara tradisional sendiri bernama Aksara Kaganga atau Had Lampung.',
    color: '#EA580C'
  },

  // --- JAWA (6) ---
  {
    id: 'dki',
    name: 'DKI Jakarta',
    capital: 'Jakarta',
    island: 'Jawa',
    ethnicGroups: 'Betawi, Jawa, Sunda, Tionghoa, Arab',
    languages: 'Bahasa Betawi, Indonesia',
    traditionalFood: 'Kerak Telor, Soto Betawi, Nasi Ulam, Roti Buaya',
    traditionalDance: 'Tari Topeng Betawi, Tari Yapong, Tari Cokek',
    traditionalHouse: 'Rumah Kebaya & Rumah Bapang',
    funFact: 'Ikon boneka Ondel-ondel Betawi yang megah awalnya berfungsi sebagai penolak bala bagi masyarakat kampung.',
    color: '#D97706'
  },
  {
    id: 'jabar',
    name: 'Jawa Barat',
    capital: 'Bandung',
    island: 'Jawa',
    ethnicGroups: 'Sunda, Cirebon, Baduy',
    languages: 'Bahasa Sunda',
    traditionalFood: 'Karedok, Nasi Liwet Sunda, Peuyeum, Batagor',
    traditionalDance: 'Tari Jaipong, Tari Merak, Tari Wayang Sunda',
    traditionalHouse: 'Rumah Imah Badak Heuay & Kasepuhan Cirebon',
    funFact: 'Alat musik tradisional Angklung asal Sunda Jawa Barat telah diakui oleh UNESCO sebagai Masterpiece of Oral and Intangible Heritage.',
    color: '#16A34A'
  },
  {
    id: 'banten',
    name: 'Banten',
    capital: 'Serang',
    island: 'Jawa',
    ethnicGroups: 'Banten, Sunda Baduy, Melayu',
    languages: 'Bahasa Sunda Banten, Jawa Serang',
    traditionalFood: 'Sate Bandeng, Rabeg, Gerem Asem',
    traditionalDance: 'Tari Deker, Tari Cokek Banten, Debus',
    traditionalHouse: 'Rumah Sulah Nyanda (Suku Baduy)',
    funFact: 'Masyarakat Suku Baduy Dalam di pedalaman Banten masih memegang teguh hidup alami tanpa listrik dan alas kaki.',
    color: '#4B5563'
  },
  {
    id: 'jateng',
    name: 'Jawa Tengah',
    capital: 'Semarang',
    island: 'Jawa',
    ethnicGroups: 'Jawa, Samin',
    languages: 'Bahasa Jawa',
    traditionalFood: 'Lumpia Semarang, Tahu Petis, Garang Asem',
    traditionalDance: 'Tari Gambyong, Tari Serimpi, Tari Bedhaya Ketawang',
    traditionalHouse: 'Rumah Joglo (beratap tumpang tajug)',
    funFact: 'Rumah Joglo memiliki 4 tiang penyangga utama yang disebut Soko Guru, melambangkan 4 arah mata angin.',
    color: '#CA8A04'
  },
  {
    id: 'diy',
    name: 'DI Yogyakarta',
    capital: 'Yogyakarta',
    island: 'Jawa',
    ethnicGroups: 'Jawa',
    languages: 'Bahasa Jawa',
    traditionalFood: 'Gudeg, Bakpia Pathok, Mangut Lele',
    traditionalDance: 'Tari Beksan Menak, Tari Golek Ayun-Ayun',
    traditionalHouse: 'Rumah Joglo Bangsal Kencono Keraton',
    funFact: 'DI Yogyakarta dipimpin oleh Sultan Hamengkubuwono yang sekaligus menjabat sebagai Gubernur seumur hidup.',
    color: '#7C3AED'
  },
  {
    id: 'jatim',
    name: 'Jawa Timur',
    capital: 'Surabaya',
    island: 'Jawa',
    ethnicGroups: 'Jawa, Madura, Tengger, Osing',
    languages: 'Bahasa Jawa (Arekan), Madura, Osing',
    traditionalFood: 'Rawon, Rujak Cingur, Tahu Campur, Pecel Madiun',
    traditionalDance: 'Tari Gandrung Banyuwangi, Tari Remo, Reog Ponorogo',
    traditionalHouse: 'Rumah Joglo Situbondo & Rumah Adat Osing',
    funFact: 'Seni Reog Ponorogo mengenakan topeng kepala singa dengan bulu merak raksasa (Dadap) berbobot hingga 50 kg yang digigit dengan gigi!',
    color: '#2563EB'
  },

  // --- BALI & NUSA TENGGARA (3) ---
  {
    id: 'bali',
    name: 'Bali',
    capital: 'Denpasar',
    island: 'Bali & Nusa Tenggara',
    ethnicGroups: 'Bali, Bali Aga',
    languages: 'Bahasa Bali',
    traditionalFood: 'Ayam Betutu, Lawar, Sate Lilit, Nasi Jinggo',
    traditionalDance: 'Tari Kecak, Tari Pendet, Tari Legong, Tari Barong',
    traditionalHouse: 'Rumah Gapura Candi Bentar & Bale Manten',
    funFact: 'Tari Kecak ditarikan oleh puluhan pria bertelanjang dada melingkar sambil menyuarakan paduan cak-cak-cak tanpa iringan alat musik melodis.',
    color: '#EA580C'
  },
  {
    id: 'ntb',
    name: 'Nusa Tenggara Barat',
    capital: 'Mataram',
    island: 'Bali & Nusa Tenggara',
    ethnicGroups: 'Sasak, Samawa (Sumbawa), Mbojo (Bima)',
    languages: 'Bahasa Sasak, Samawa, Bima',
    traditionalFood: 'Ayam Taliwang, Plecing Kangkung, Sate Bulayak',
    traditionalDance: 'Tari Gandrung Sasak, Tari Rudat, Tari Lenggo',
    traditionalHouse: 'Rumah Dalam Loka (Sumbawa) & Bale Tani (Sasak)',
    funFact: 'Lantai rumah adat Bale Tani suku Sasak dirawat dengan cara tradisional menggunakan kotoran kerbau kering yang membuat lantai mengkilap dan bebas debu.',
    color: '#0D9488'
  },
  {
    id: 'ntt',
    name: 'Nusa Tenggara Timur',
    capital: 'Kupang',
    island: 'Bali & Nusa Tenggara',
    ethnicGroups: 'Manggarai, Flores, Timor, Rote, Sumba, Dawan',
    languages: 'Bahasa Manggarai, Rote, Dawan, Tetun',
    traditionalFood: 'Sei Sapi, Catemak Jagung, Kolo (Nasi Bakar)',
    traditionalDance: 'Tari Caci (Manggarai), Tari Cerana, Tari Likurai',
    traditionalHouse: 'Rumah Musalaki (Ende) & Rumah Mbaru Niang (Wae Rebo)',
    funFact: 'Desa Wae Rebo di Manggarai memiliki rumah kerucut tinggi Mbaru Niang yang memenangkan penghargaan tertinggi UNESCO Asia-Pasifik.',
    color: '#4F46E5'
  },

  // --- KALIMANTAN (5) ---
  {
    id: 'kalbar',
    name: 'Kalimantan Barat',
    capital: 'Pontianak',
    island: 'Kalimantan',
    ethnicGroups: 'Dayak (Kanayatn, Iban), Melayu, Tionghoa',
    languages: 'Bahasa Dayak, Melayu Pontianak, Khek',
    traditionalFood: 'Bubur Pedas Sambas, Pengkang, Sotong Pangkong',
    traditionalDance: 'Tari Monong, Tari Zapin Melayu Kalbar',
    traditionalHouse: 'Rumah Radakng (Rumah Panjang Dayak)',
    funFact: 'Kota Pontianak dilintasi garis Khatulistiwa tepat di titik lintang nol derajat yang ditandai Tugu Khatulistiwa.',
    color: '#059669'
  },
  {
    id: 'kalteng',
    name: 'Kalimantan Tengah',
    capital: 'Palangkaraya',
    island: 'Kalimantan',
    ethnicGroups: 'Dayak Ngaju, Dayak Ot Danum, Maanyan',
    languages: 'Bahasa Dayak Ngaju, Bakumpai',
    traditionalFood: 'Juhu Singkah Enyuh (Umbut Rotan), Kalumpe',
    traditionalDance: 'Tari Kancet Papatai, Tari Mandau, Tari Tambun dan Bungai',
    traditionalHouse: 'Rumah Betang',
    funFact: 'Rumah Betang Dayak panjangnya bisa mencapai 150 meter dan menampung hingga puluhan kepala keluarga secara rukun.',
    color: '#0284C7'
  },
  {
    id: 'kalsel',
    name: 'Kalimantan Selatan',
    capital: 'Banjarbaru',
    island: 'Kalimantan',
    ethnicGroups: 'Banjar (Kuala, Hulu), Dayak Meratus',
    languages: 'Bahasa Banjar',
    traditionalFood: 'Soto Banjar, Ketupat Kandangan, Mandai',
    traditionalDance: 'Tari Baksa Kembang, Tari Radap Rahayu',
    traditionalHouse: 'Rumah Bubungan Tinggi',
    funFact: 'Pasar Terapung Lok Baintan di atas Sungai Martapura adalah tradisi jual beli perahu (jukung) yang lestari sejak zaman Kesultanan Banjar.',
    color: '#EAB308'
  },
  {
    id: 'kaltim',
    name: 'Kalimantan Timur',
    capital: 'Samarinda',
    island: 'Kalimantan',
    ethnicGroups: 'Kutai, Dayak Kenyah, Tunjung, Benuaq',
    languages: 'Bahasa Kutai, Dayak Kenyah',
    traditionalFood: 'Ayam Cincane, Nasi Bekepor, Gangan Manchal',
    traditionalDance: 'Tari Kancet Ledo (Tari Gong), Tari Jepen',
    traditionalHouse: 'Rumah Lamin Dayak Kenyah',
    funFact: 'Ibu Kota Nusantara (IKN) berlokasi di Kalimantan Timur dengan konsep smart forest city masa depan Indonesia.',
    color: '#10B981'
  },
  {
    id: 'kaltara',
    name: 'Kalimantan Utara',
    capital: 'Tanjung Selor',
    island: 'Kalimantan',
    ethnicGroups: 'Tidung, Dayak Bulungan, Lun Bawang, Kenyah',
    languages: 'Bahasa Tidung, Bulungan, Dayak',
    traditionalFood: 'Lawas Tidung, Kepiting Soka, Tudai',
    traditionalDance: 'Tari Kancet Bual, Tari Magunatip',
    traditionalHouse: 'Rumah Baloy Mayo (Suku Tidung)',
    funFact: 'Tari Magunatip adalah tarian lincah melompati bilah bambu yang saling dihentakkan dengan ketepatan tinggi.',
    color: '#6366F1'
  },

  // --- SULAWESI (6) ---
  {
    id: 'sulut',
    name: 'Sulawesi Utara',
    capital: 'Manado',
    island: 'Sulawesi',
    ethnicGroups: 'Minahasa, Bolaang Mongondow, Sangihe, Talaud',
    languages: 'Bahasa Melayu Manado, Minahasa, Sangihe',
    traditionalFood: 'Tinutuan (Bubur Manado), Cakalang Fufu, Klappertaart',
    traditionalDance: 'Tari Maengket, Tari Kabasaran (Cakalele Minahasa)',
    traditionalHouse: 'Rumah Walewangko (Pewaris Minahasa)',
    funFact: 'Tari Kabasaran adalah tarian keprajuritan Minahasa dengan busana serba merah dan pedang/tombak santi yang gagah perkasa.',
    color: '#DC2626'
  },
  {
    id: 'gorontalo',
    name: 'Gorontalo',
    capital: 'Gorontalo',
    island: 'Sulawesi',
    ethnicGroups: 'Gorontalo, Suwawa, Atinggola',
    languages: 'Bahasa Gorontalo, Suwawa',
    traditionalFood: 'Binte Biluhuta (Sup Jagung), Ilabulo, Tiliaya',
    traditionalDance: 'Tari Dana-Dana, Tari Polopalo',
    traditionalHouse: 'Rumah Dulohupa',
    funFact: 'Gorontalo berjuluk Kota Serambi Madinah dan Rumah Dulohupa dulunya digunakan sebagai balai musyawarah para kerabat kerajaan.',
    color: '#D97706'
  },
  {
    id: 'sulteng',
    name: 'Sulawesi Tengah',
    capital: 'Palu',
    island: 'Sulawesi',
    ethnicGroups: 'Kaili, Lore, Pamona, Balantak, Banggai',
    languages: 'Bahasa Kaili, Pamona, Banggai',
    traditionalFood: 'Kaledo (Kaki Lembu Donggala), Uta Kelo, Duo Sale',
    traditionalDance: 'Tari Dero, Tari Pontanu, Tari Peule Cinde',
    traditionalHouse: 'Rumah Tambi & Souraja (Kaili)',
    funFact: 'Lembah Bada di Sulawesi Tengah menyimpan patung-patung megalitikum misterius peninggalan zaman prasejarah ribuan tahun lalu.',
    color: '#0D9488'
  },
  {
    id: 'sulbar',
    name: 'Sulawesi Barat',
    capital: 'Mamuju',
    island: 'Sulawesi',
    ethnicGroups: 'Mandar, Mamuju, Toraja Mamasa',
    languages: 'Bahasa Mandar, Mamasa, Melayu Mamuju',
    traditionalFood: 'Jepa, Bau Peapi, Kue Tetu',
    traditionalDance: 'Tari Patuddu, Tari Sayyang Pattu’du (Kuda Menari)',
    traditionalHouse: 'Rumah Boyang (Mandar)',
    funFact: 'Tradisi Sayyang Pattu’du menampilkan kuda terlatih yang menari berirama rabana untuk merayakan anak yang khatam Al-Qur’an.',
    color: '#8B5CF6'
  },
  {
    id: 'sulsel',
    name: 'Sulawesi Selatan',
    capital: 'Makassar',
    island: 'Sulawesi',
    ethnicGroups: 'Bugis, Makassar, Toraja, Mandar',
    languages: 'Bahasa Bugis, Makassar, Toraja',
    traditionalFood: 'Coto Makassar, Konro, Pallubasa, Pisang Epe',
    traditionalDance: 'Tari Pakarena, Tari Pa’gellu (Toraja), Tari Paduppa',
    traditionalHouse: 'Rumah Tongkonan (Toraja) & Balla Lompoa (Makassar)',
    funFact: 'Tongkonan memiliki atap melengkung menjulang mirip perahu leluhur yang berlayar mengarungi samudra menuju Sulawesi.',
    color: '#BE185D'
  },
  {
    id: 'sultra',
    name: 'Sulawesi Tenggara',
    capital: 'Kendari',
    island: 'Sulawesi',
    ethnicGroups: 'Tolaki, Buton, Muna, Moronene',
    languages: 'Bahasa Tolaki, Buton, Muna',
    traditionalFood: 'Sinonggi (Sagu Tolaki), Kasoami, Kabuto',
    traditionalDance: 'Tari Lulo (Luu), Tari Lumense, Tari Balumpa',
    traditionalHouse: 'Rumah Banua Tada & Istana Buton (Malige)',
    funFact: 'Benteng Keraton Buton tercatat di Guinness Book of Records sebagai benteng terluas di dunia dengan keliling hampir 3 kilometer.',
    color: '#0891B2'
  },

  // --- MALUKU (2) ---
  {
    id: 'maluku',
    name: 'Maluku',
    capital: 'Ambon',
    island: 'Maluku & Papua',
    ethnicGroups: 'Ambon, Kei, Tanimbar, Seram, Buru',
    languages: 'Bahasa Melayu Ambon, Kei, Tanimbar',
    traditionalFood: 'Papeda Ikan Kuah Kuning, Sambal Colo-Colo, Kohu-Kohu',
    traditionalDance: 'Tari Cakalele, Tari Lenso, Tari Saureka-Reka',
    traditionalHouse: 'Rumah Baileo',
    funFact: 'Kepulauan Banda di Maluku pada masa lampau merupakan satu-satunya produsen buah pala di dunia yang diperebutkan bangsa Eropa.',
    color: '#F59E0B'
  },
  {
    id: 'malut',
    name: 'Maluku Utara',
    capital: 'Sofifi',
    island: 'Maluku & Papua',
    ethnicGroups: 'Ternate, Tidore, Halmahera, Galela, Tobelo',
    languages: 'Bahasa Ternate, Tidore, Melayu Maluku Utara',
    traditionalFood: 'Gohu Ikan (Sashimi khas Ternate), Gatang Kenari, Bagea',
    traditionalDance: 'Tari Soya-Soya, Tari Lalayon, Tari Salai Jin',
    traditionalHouse: 'Rumah Sasadu (Halmahera Barat)',
    funFact: 'Ternate dan Tidore adalah dua kesultanan maritim kembar yang terkenal di dunia sebagai Kepulauan Cengkih (The Spice Islands).',
    color: '#EC4899'
  },

  // --- PAPUA (6) ---
  {
    id: 'papua',
    name: 'Papua',
    capital: 'Jayapura',
    island: 'Maluku & Papua',
    ethnicGroups: 'Sentani, Biak, Yapen, Waropen, Tobati',
    languages: 'Bahasa Sentani, Biak, Melayu Papua',
    traditionalFood: 'Papeda Bungkus, Ikan Kuah Asam Sentani, Sate Ulat Sagu',
    traditionalDance: 'Tari Yospan (Yosim Pancar), Tari Suanggi',
    traditionalHouse: 'Rumah Honai & Rumah Kariwari',
    funFact: 'Tari Yospan adalah tarian pergaulan muda-mudi Papua yang sangat energik diiringi petikan gitar, ukulele, dan tifa.',
    color: '#16A34A'
  },
  {
    id: 'papua_barat',
    name: 'Papua Barat',
    capital: 'Manokwari',
    island: 'Maluku & Papua',
    ethnicGroups: 'Arfak, Hattam, Moile, Meyah',
    languages: 'Bahasa Hatam, Meyah, Melayu Papua',
    traditionalFood: 'Ikan Bakar Manokwari, Papeda Kelapa',
    traditionalDance: 'Tari Perang Papua, Tari Magasa',
    traditionalHouse: 'Rumah Mod Aki Aksa (Rumah Kaki Seribu)',
    funFact: 'Rumah Kaki Seribu suku Arfak memiliki ratusan tiang kayu penopang untuk menahan gempa bumi dan hewan liar di lereng pegunungan.',
    color: '#0284C7'
  },
  {
    id: 'papua_selatan',
    name: 'Papua Selatan',
    capital: 'Merauke',
    island: 'Maluku & Papua',
    ethnicGroups: 'Marind-Anim, Asmat, Mandobo, Yei',
    languages: 'Bahasa Marind, Asmat, Melayu Papua',
    traditionalFood: 'Sagu Sep, Dendeng Rusa Merauke',
    traditionalDance: 'Tari Gatsi, Tari Tifa Marind',
    traditionalHouse: 'Rumah Adat Gotad (Suku Marind)',
    funFact: 'Merauke merupakan titik paling timur Indonesia dan habitat bagi ratusan sarang semut raksasa tanah unik bernama Musamus.',
    color: '#9333EA'
  },
  {
    id: 'papua_tengah',
    name: 'Papua Tengah',
    capital: 'Nabire',
    island: 'Maluku & Papua',
    ethnicGroups: 'Mee, Moni, Damal, Amungme, Kamoro',
    languages: 'Bahasa Mee, Moni, Damal',
    traditionalFood: 'Ubi Jalar Bakar Batu, Papeda Bungkus',
    traditionalDance: 'Tari Yuwo (Tari Syukur Suku Mee)',
    traditionalHouse: 'Rumah Emehe (Suku Kamoro)',
    funFact: 'Di wilayah Papua Tengah terdapat Puncak Carstensz (Puncak Jaya) berketinggian 4.884 mdpl dengan gletser salju abadi khatulistiwa.',
    color: '#2563EB'
  },
  {
    id: 'papua_pegunungan',
    name: 'Papua Pegunungan',
    capital: 'Wamena',
    island: 'Maluku & Papua',
    ethnicGroups: 'Dani, Lani, Yali, Nduga',
    languages: 'Bahasa Dani, Lani, Yali',
    traditionalFood: 'Ubi Manis Lembah Baliem, Kuliner Bakar Batu (Barapen)',
    traditionalDance: 'Tari Perang Lembah Baliem, Tari Sege',
    traditionalHouse: 'Rumah Honai (laki-laki) & Ebei (perempuan)',
    funFact: 'Tradisi Bakar Batu (Barapen) adalah upacara memasak bersama menggunakan batu panas membara sebagai simbol perdamaian dan kebersamaan.',
    color: '#D97706'
  },
  {
    id: 'papua_barat_daya',
    name: 'Papua Barat Daya',
    capital: 'Sorong',
    island: 'Maluku & Papua',
    ethnicGroups: 'Moi, Raja Ampat (Maya, Matbat, Misool)',
    languages: 'Bahasa Moi, Maya, Melayu Papua',
    traditionalFood: 'Udang Selingkuh Saus Merah, Ikan Asar Kayu Buah',
    traditionalDance: 'Tari Aluyen, Tari Gale-Gale',
    traditionalHouse: 'Rumah Adat Kaki Seribu Suku Moi',
    funFact: 'Papua Barat Daya adalah gerbang menuju Kepulauan Raja Ampat, pusat segitiga karang dunia dengan keanekaragaman hayati laut terkaya di bumi.',
    color: '#059669'
  }
];

export const DIFFICULTY_CONFIGS: Record<DifficultyLevel, DifficultyConfig> = {
  easy: {
    id: 'easy',
    label: 'Mudah',
    rows: 3,
    cols: 4,
    pairs: 6,
    description: '12 Kartu · 6 Pasangan Budaya · Cocok untuk pemula & anak-anak',
    timeLimitSec: 90,
    maxMistakes: 8
  },
  medium: {
    id: 'medium',
    label: 'Sedang',
    rows: 4,
    cols: 4,
    pairs: 8,
    description: '16 Kartu · 8 Pasangan Budaya · Tantangan asah memori seimbang',
    timeLimitSec: 80,
    maxMistakes: 6
  },
  hard: {
    id: 'hard',
    label: 'Sulit',
    rows: 4,
    cols: 5,
    pairs: 10,
    description: '20 Kartu · 10 Pasangan Budaya · Uji ketajaman ingatan nusantara',
    timeLimitSec: 75,
    maxMistakes: 5
  },
  master: {
    id: 'master',
    label: 'Master',
    rows: 6,
    cols: 6,
    pairs: 18,
    description: '36 Kartu · 18 Pasangan Budaya · Ujian akbar pendekar budaya',
    timeLimitSec: 150,
    maxMistakes: 8
  }
};

export const ACHIEVEMENTS_LIST: Achievement[] = [
  {
    id: 'first_win',
    title: 'Langkah Pertama',
    description: 'Selesaikan permainan memori budaya pertamamu.',
    icon: 'compass'
  },
  {
    id: 'perfect_memory',
    title: 'Ingatan Emas',
    description: 'Selesaikan satu ronde tanpa melakukan kesalahan sekalipun.',
    icon: 'sparkles'
  },
  {
    id: 'speed_demon',
    title: 'Kilat Khatulistiwa',
    description: 'Selesaikan permainan dalam waktu kurang dari 40 detik.',
    icon: 'zap'
  },
  {
    id: 'sumatra_explorer',
    title: 'Jelajah Sumatra',
    description: 'Selesaikan permainan dengan filter wilayah pulau Sumatra.',
    icon: 'map-pin'
  },
  {
    id: 'java_master',
    title: 'Penakluk Jawa',
    description: 'Selesaikan permainan dengan filter wilayah pulau Jawa.',
    icon: 'landmark'
  },
  {
    id: 'house_detective',
    title: 'Arsitek Tradisional',
    description: 'Cocokkan kartu dalam kategori khusus Rumah Adat.',
    icon: 'home'
  },
  {
    id: 'dance_expert',
    title: 'Maestro Tari Daerah',
    description: 'Cocokkan kartu dalam kategori khusus Tarian Daerah.',
    icon: 'music'
  },
  {
    id: 'food_lover',
    title: 'Pakar Kuliner Nusantara',
    description: 'Cocokkan kartu dalam kategori khusus Makanan Khas.',
    icon: 'utensils'
  },
  {
    id: 'duel_champion',
    title: 'Pendekar Persahabatan',
    description: 'Mainkan pertandingan di mode Duel 2 Pemain.',
    icon: 'users'
  },
  {
    id: 'master_conqueror',
    title: 'Mahaguru Nusantara',
    description: 'Taklukkan tingkat kesulitan Master (36 Kartu).',
    icon: 'trophy'
  }
];

export const ISLANDS: IslandRegion[] = [
  'Semua',
  'Sumatra',
  'Jawa',
  'Bali & Nusa Tenggara',
  'Kalimantan',
  'Sulawesi',
  'Maluku & Papua'
];

export const CATEGORIES_CONFIG = [
  { id: 'all', label: 'Campuran', desc: 'Acak dari semua elemen budaya' },
  { id: 'provinsi_budaya', label: 'Provinsi & Budaya', desc: 'Pasangkan Nama Provinsi dengan Aset Budayanya' },
  { id: 'rumah_adat', label: 'Rumah Adat', desc: 'Arsitektur vernakular tradisional' },
  { id: 'tarian', label: 'Tarian Daerah', desc: 'Koreografi pusaka nusantara' },
  { id: 'makanan', label: 'Makanan Khas', desc: 'Kuliner autentik kepulauan' },
  { id: 'suku', label: 'Suku Bangsa', desc: 'Keragaman etnis nusantara' },
  { id: 'bahasa', label: 'Bahasa Daerah', desc: 'Kekayaan linguistik daerah' },
];
