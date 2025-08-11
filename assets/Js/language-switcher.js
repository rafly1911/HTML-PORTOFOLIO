// assets/js/language-switcher.js

document.addEventListener('DOMContentLoaded', () => {
  // Define your translations
  const translations = {
    en: {
      // General/Navbar Translations
      homePageTitle: "Home - MyWebsite",
      navHome: "Home",
      navMySkill: "MySkill",
      navPortofolio: "Portofolio",
      navContact: "Contact",
      followMeTitle: "Follow Me",
      copyrightText: "© 2025 Copyright:",
      copyrightName: "Rafly Fadriansyah Ramadhani",

      // Home Page Specific Translations
      helloIAm: "HELLO I'M",
      iAm: "I'm a",
      droppingText1: "Information Systems Undergraduate",
      droppingText2: "UI/UX Designer",
      droppingText3: "Photographer",
      droppingText4: "Graphic Designer",
      linkedinAccount: "Linkedin Account",
      linkedinName: "Rafly Fadriansyah Ramadhani",
      aboutMeTitle: "About Me",
      aboutMeContent: "A 6th-semester Information Systems student at Gunadarma University with a primary focus on web development (UI/UX, HTML, CSS, PHP). I am flexible, creative, and open-minded, capable of working independently or in a team by leveraging leadership and project management skills gained from active involvement in the Student Executive Board. My strong interest in UI/UX and Data Analysis drives me to continuously explore these fields, enabling me to provide innovative solutions that support better decision-making.",
      experienceTitle: "Organizational Experience",
      orgDate1: "2023 - 2024",
      orgTitle1: "Staff of Political and Student Welfare Department (POLKESMA)<br>Student Executive Board of the Faculty of Computer Science and Information Technology",
      orgDesc1_1: "<strong>Aspiration Formulation & Faculty Liaison:</strong> Gathering and conveying student aspirations to the Vice Dean III, serving as the primary link between students and the faculty.",
      orgDesc1_2_title: "POLKESMA Work Programs:",
      orgDesc1_2_item1: "<em>Hotline FIKTI:</em> Managed academic support channels for students.",
      orgDesc1_2_item2: "<em>Bincang Bareng FIKTI:</em> Facilitated interactive dialogues between students and faculty.",
      orgDesc1_2_item3: "<em>FIKTI Bersuara:</em> Represented student opinions on current issues.",
      orgDesc1_3_title: "Design & Publication (Cross-Departmental Contributions):",
      orgDesc1_3_item1: "<em>Internal Upgrading X FIKTI Next Generation:</em> Head of HPDD – designed certificates, Zoom backgrounds, proposals, and presentations.",
      orgDesc1_3_item2: "<em>FIKTI VISIT:</em> Media Staff – Created certificates, banners, and handled documentation.",
      orgDesc1_3_item3: "<em>SOSMAS Berbagi:</em> Media Staff – Designed posters & documented social events.",
      orgDesc1_3_item4: "<em>Seutas Harapan:</em> Media Staff – Produced certificates & documented humanitarian activities.",
      orgDesc1_3_item5: "<em>BEM FIKTI General Election:</em> Media Staff – Developed posters and the Instagram campaign feed.",
      orgDate2: "2020 - 2021",
      orgTitle2: "Head of Student Council (MPK) at SMAN 23 Jakarta",
      orgDesc2: "Led MPK activities and supervised the Student Organization (OSIS) for one term.",
      educationTitle: "Education",
      eduUniName: "Gunadarma University",
      eduUniDate: "2022 – Present",
      eduUniMajor: "Information Systems",
      eduHighSchoolName: "SMA Negeri 23 Jakarta",
      eduHighSchoolDate: "2019 – 2022",
      eduHighSchoolMajor: "Social Sciences",
      certificatesTitle: "Certificates",
      certGundarOrg: "Gunadarma University",
      certGundarTitle: "JavaScript Programming Language Fundamentals",
      certMySkillOrg: "MySkill",
      certMySkillTitle: "Introduction to UX Research",
      logoExplanationTitle: "My Personal Logo",
      logoExplanationContent: "This logo is a visual representation of my initials, Rafly Fadriansyah Ramadhani (RFR). It embodies a minimalist and modern concept, aligning with my UI/UX design principles: simple, functional, and aesthetic.<br><br>The use of bold, symmetrical letterforms reflects consistency, professionalism, and systematic thinking—crucial traits in design and information systems. The diagonal cut on the central letter adds a dynamic, futuristic touch, symbolizing a commitment to continuous growth and innovation.<br><br>The dark blue color was chosen for its association with stability, trust, and decisiveness, mirroring my project approach: focused, direct, and responsible.<br><br>Overall, this logo is more than a personal identity; it's a visual statement of my work ethic and professional values in the digital design realm.",
      viewPortfolioBtn: "View Portfolio",
      clickToExploreBtn: "Click to explore",
    },
    id: {
      // General/Navbar Translations
      homePageTitle: "Beranda - Website Saya",
      navHome: "Beranda",
      navMySkill: "Keahlian",
      navPortofolio: "Portofolio",
      navContact: "Kontak",
      followMeTitle: "Ikuti Saya",
      copyrightText: "© 2025 Hak Cipta:",
      copyrightName: "Rafly Fadriansyah Ramadhani",

      // Home Page Specific Translations
      helloIAm: "HALO, SAYA",
      iAm: "Saya seorang",
      droppingText1: "Mahasiswa Sistem Informasi",
      droppingText2: "Desainer UI/UX",
      droppingText3: "Fotografer",
      droppingText4: "Desainer Grafis",
      linkedinAccount: "Akun Linkedin",
      linkedinName: "Rafly Fadriansyah Ramadhani",
      aboutMeTitle: "Tentang Saya",
      aboutMeContent: "Mahasiswa semester 6 Program Studi Sistem Informasi di Universitas Gunadarma dengan fokus utama pada pengembangan website seperti UI/UX, HTML, CSS, PHP. Saya fleksibel, kreatif, dan berpikiran terbuka, serta mampu bekerja secara mandiri atau kelompok dengan memanfaatkan keterampilan kepemimpinan dan manajemen proyek yang saya peroleh melalui keterlibatan aktif di Badan Eksekutif Mahasiswa. Selain itu, minat saya yang tinggi dalam bidang UI/UX, Data Analyst membuat saya mendalami kedua bidang tersebut sehingga dapat memberikan solusi inovatif yang mendukung pengambilan keputusan yang lebih baik.",
      experienceTitle: "Pengalaman Organisasi",
      orgDate1: "2023 - 2024",
      orgTitle1: "Staf Departemen Politik dan Kesejahteraan Mahasiswa (POLKESMA)<br>BEM Fakultas Ilmu Komputer dan Teknologi Informasi",
      orgDesc1_1: "<strong>Perumusan Aspirasi & Penghubung Fakultas:</strong> Menampung dan menyampaikan aspirasi mahasiswa FIKTI kepada Wakil Dekan III sebagai penghubung utama antara mahasiswa dan fakultas.",
      orgDesc1_2_title: "Program Kerja POLKESMA:",
      orgDesc1_2_item1: "<em>Hotline FIKTI:</em> Mengelola kanal bantuan akademik mahasiswa.",
      orgDesc1_2_item2: "<em>Bincang Bareng FIKTI:</em> Memfasilitasi dialog interaktif mahasiswa dan fakultas.",
      orgDesc1_2_item3: "<em>FIKTI Bersuara Opini Terkini:</em> Mewakili opini mahasiswa terhadap isu terkini.",
      orgDesc1_3_title: "Desain & Publikasi (Kontribusi Lintas Departemen):",
      orgDesc1_3_item1: "<em>Upgrading Internal X FIKTI Next Generation:</em> Ketua HPDD – desain sertifikat, Zoom background, proposal, dan PPT.",
      orgDesc1_3_item2: "<em>FIKTI VISIT:</em> Staff Media – Sertifikat, spanduk, dan dokumentasi.",
      orgDesc1_3_item3: "<em>SOSMAS Berbagi:</em> Staff Media – Poster & dokumentasi acara sosial.",
      orgDesc1_3_item4: "<em>Seutas Harapan:</em> Staff Media – Sertifikat & dokumentasi kegiatan kemanusiaan.",
      orgDesc1_3_item5: "<em>Pemilihan Umum Raya BEM FIKTI:</em> Staff Media – Poster dan Instagram feed kampanye.",
      orgDate2: "2020 - 2021",
      orgTitle2: "Ketua MPK SMAN 23 Jakarta",
      orgDesc2: "Bertanggung jawab memimpin kegiatan MPK dan mengawasi OSIS selama satu periode.",
      educationTitle: "Pendidikan",
      eduUniName: "Universitas Gunadarma",
      eduUniDate: "2022 – Sekarang",
      eduUniMajor: "Sistem Informasi",
      eduHighSchoolName: "SMA Negeri 23 Jakarta",
      eduHighSchoolDate: "2019 – 2022",
      eduHighSchoolMajor: "Ilmu Pengetahuan Sosial",
      certificatesTitle: "Sertifikat",
      certGundarOrg: "Universitas Gunadarma",
      certGundarTitle: "Dasar-dasar Bahasa Pemrograman JavaScript",
      certMySkillOrg: "MySkill",
      certMySkillTitle: "Pengenalan Riset UX",
      logoExplanationTitle: "Logo Pribadi Saya",
      logoExplanationContent: "Logo ini merupakan representasi visual dari inisial nama saya, Rafly Fadriansyah Ramadhani, yang disingkat menjadi RFR. Desain logo mengusung konsep minimalis dan modern, yang sejalan dengan prinsip desain saya dalam bidang UI/UX: sederhana, fungsional, dan estetis.<br><br>Penggunaan bentuk huruf yang tegas dan simetris mencerminkan konsistensi, profesionalisme, dan struktur berpikir sistematis—karakter yang penting dalam dunia desain dan pengembangan sistem informasi. Potongan garis diagonal pada huruf tengah menambahkan nuansa dinamis dan futuristik, menunjukkan kemauan untuk terus berkembang dan berinovasi.<br><br>Warna biru tua dipilih untuk memberikan kesan stabilitas, kepercayaan, dan ketegasan, yang merefleksikan pendekatan saya dalam menyelesaikan proyek: fokus, terarah, dan bertanggung jawab.<br><br>Secara keseluruhan, logo ini bukan hanya lambang identitas personal, tetapi juga sebuah pernyataan visual tentang gaya kerja dan nilai profesional yang saya pegang dalam dunia desain digital.",
      viewPortfolioBtn: "Lihat Portofolio",
      clickToExploreBtn: "Klik untuk menjelajahi",
    }
    // Note: Translations for other pages (Contact, MySkill, Portfolio) should be kept in this object
    // to maintain a single source of truth for all text.
  };

  function setLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);

    document.querySelectorAll('.lang-btn').forEach(button => {
      button.classList.toggle('active', button.dataset.lang === lang);
    });

    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.dataset.langKey;
      if (translations[lang] && translations[lang][key]) {
        // Check if the element is an input/textarea to set placeholder
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[lang][key];
        } else {
          // Use innerHTML to render HTML tags like <br> or <strong>
          element.innerHTML = translations[lang][key];
        }
      }
    });

    // Special handling for the document title
    const titleElement = document.querySelector('title[data-lang-key]');
    if (titleElement) {
        const key = titleElement.dataset.langKey;
        if (translations[lang] && translations[lang][key]) {
            titleElement.textContent = translations[lang][key];
        }
    }
  }

  // Add event listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
  });
  
  // Set initial language from storage or default to 'id'
  const initialLang = localStorage.getItem('selectedLanguage') || 'id';
  setLanguage(initialLang);
});