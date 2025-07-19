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

      // Home Page Specific Translations
      helloIAm: "HELLO I'AM",
      undergraduateInfo: "Undergraduate <br />System Information",
      universityInfo: "At <br />Gunadarma University",
      linkedinAccount: "Linkedin Account",
      aboutMeTitle: "About Me",
      aboutMeContent: "6th-semester student of Information Systems at Gunadarma University with a primary focus on website development such as UI/UX, HTML, CSS, PHP. I am flexible, creative, and open-minded, capable of working independently or in groups by leveraging leadership and project management skills gained through active involvement in the Student Executive Board. Additionally, my strong interest in UI/UX and Data Analysis has led me to delve into both fields, enabling me to provide innovative solutions that support better decision-making.",
      experienceTitle: "Organizational Experience",
      orgDate1: "2023 - 2024",
      orgTitle1: "Staff of Political and Student Welfare Department (POLKESMA)<br>Student Executive Board of Faculty of Computer Science and Information Technology",
      orgDesc1_1: "<strong>Aspiration Formulation & Faculty Liaison:</strong> Accommodating and conveying FIKTI student aspirations to Vice Dean III as the main liaison between students and the faculty.",
      orgDesc1_2: "<strong>POLKESMA Work Programs:</strong><br><em>FIKTI Hotline:</em> Managing academic assistance channels for students.<br><em>FIKTI Talk:</em> Facilitating interactive dialogue between students and faculty.<br><em>FIKTI Voice Current Opinion:</em> Representing student opinions on current issues.",
      orgDesc1_3: "<strong>Design & Publication (Outside POLKESMA Work Programs):</strong><br><em>Internal Upgrading X FIKTI Next Generation:</em> Head of HPDD – certificate design, Zoom background, proposals, and PPT.<br><em>FIKTI VISIT:</em> Media Staff – Certificates, banners, and documentation.<br><em>SOSMAS Sharing:</em> Media Staff – Posters & social event documentation.<br><em>A Thread of Hope:</em> Media Staff – Certificates & humanitarian activity documentation.<br><em>FIKTI Student Executive Board General Election:</em> Media Staff – Posters and Instagram campaign feed.",
      orgDate2: "2020 - 2021",
      orgTitle2: "Head of MPK SMAN 23 Jakarta",
      orgDesc2: "Led MPK activities and supervised OSIS for one period. Responsible for various school activities and served as the chief executive for the 2022 yearbook.",
      educationTitle: "Education",
      eduUniName: "Gunadarma University",
      eduUniDate: "2022 – Present",
      eduUniMajor: "Information Systems",
      eduHighSchoolName: "SMA Negeri 23 Jakarta",
      eduHighSchoolDate: "2019 – 2022",
      eduHighSchoolMajor: "Social Sciences Major",
      certificatesTitle: "Certificates",
      certGundarOrg: "Gunadarma University",
      certGundarTitle: "JavaScript Programming Language Fundamental",
      certMySkillOrg: "MySkill",
      certMySkillTitle: "Introduction to UX research",
      logoExplanationTitle: "My Personal Logo",
      logoExplanationContent: "This logo is a visual representation of my initials, Rafly Fadriansyah Ramadhani, abbreviated as RFR. The logo design carries a minimalist and modern concept, which aligns with my design principles in UI/UX: simple, functional, and aesthetic.<br>The use of bold and symmetrical letterforms reflects consistency, professionalism, and systematic thinking—important characteristics in the world of design and information system development. Diagonal line cuts on the middle letter add a dynamic and futuristic nuance, indicating a willingness to continuously grow and innovate.<br>Dark blue color is chosen to give an impression of stability, trust, and firmness, reflecting my approach to completing projects: focused, directed, and responsible.<br>Overall, this logo is not just a symbol of personal identity, but also a visual statement about my work style and professional values in the digital design world.",
      viewPortfolioBtn: "View Portfolio",
      clickToExploreBtn: "Click to explore",

      // Contact Page Specific Translations
      contactPageTitle: "Contact Me - MyWebsite",
      contactMeTitle: "Contact Me",
      contactLeadText: "Get closer to me",
      formNamePlaceholder: "Your Name",
      formEmailPlaceholder: "Your Email",
      formSubjectPlaceholder: "Subject",
      formMessagePlaceholder: "Your Message",
      sendMessageBtn: "Send Message",
      addressTitle: "Address",
      addressContent: "Kota Bambu Selatan, West Jakarta, DKI Jakarta", // Added "West Jakarta" for clarity in English
      sendMessageTitle: "Send your message",
      callUsTitle: "Call us on",

      // My Skill Page Specific Translations
      mySkillPageTitle: "My Skill - MyWebsite",
      mySkillTitle: "My Skill",
      usingNowTitle: "Using Now",
      learningTitle: "Learning",
      skillFigma: "Figma",
      skillHtml: "HTML",
      skillBootstrap: "Bootstrap",
      skillLaravel: "Laravel",
      skillCanva: "Canva",
      skillCss: "CSS",
      skillMysql: "MySQL",
      skillPowerBI: "Power BI",
      skillOracle: "Oracle",
      skillJavascript: "JavaScript",
      skillPython: "Python",
      skillAdobeLightroom: "Adobe Lightroom",

      // Portofolio Page Specific Translations (Add these when you implement them)
      portofolioPageTitle: "Portofolio - MyWebsite",
      myPortofolioTitle: "My Portofolio",
      flowerShopProjectTitle: "Flower Shop Project",
      flowerShopProjectDesc: "This project was created as part of a Database Systems course assignment in the 4th semester. In this project, we collaborated as a team to design and develop a database for an online flower shop.<br><br>My responsibility was to design the UI/UX of the website, from wireframe to the final design, to be user-friendly and support the business needs of the online flower shop.",
      linkUiUxBtn: "Link UI UX",
      homeEventProjectTitle: "Home Event Project",
      homeEventProjectDesc: "This project is the Final Assignment for the Web-Based Programming course in the 5th semester, carried out in a team.<br><br>I was responsible for the UI/UX design, from the login page to the user redirection process to the official event website. This website serves as an event promotion platform, without handling direct transactions.<br><br>I ensured the design was intuitive, aesthetic, and easily accessible.",
      githubHomeEventBtn: "Github Home Event",
    },
    id: {
      // General/Navbar Translations
      homePageTitle: "Home - MyWebsite",
      navHome: "Home",
      navMySkill: "MySkill",
      navPortofolio: "Portofolio",
      navContact: "Kontak", // Changed to "Kontak" for Indonesian context
      followMeTitle: "Ikuti Saya",
      copyrightText: "© 2025 Hak Cipta:",

      // Home Page Specific Translations
      helloIAm: "HELLO SAYA",
      undergraduateInfo: "Mahasiswa <br />Sistem Informasi",
      universityInfo: "Di <br />Universitas Gunadarma",
      linkedinAccount: "Akun Linkedin",
      aboutMeTitle: "Tentang Saya",
      aboutMeContent: "Mahasiswa semester 6 Program Studi Sistem Informasi di Universitas Gunadarma dengan fokus utama pada pengembangan website seperti UI/UX, HTML, CSS, PHP. Saya fleksibel, kreatif, dan berpikiran terbuka, serta mampu bekerja secara mandiri atau kelompok dengan memanfaatkan keterampilan kepemimpinan dan manajemen proyek yang saya peroleh melalui keterlibatan aktif di Badan Eksekutif Mahasiswa. Selain itu, minat saya yang tinggi dalam bidang UI/UX, Data Analyst membuat saya mendalami kedua bidang tersebut. sehingga dapat memberikan solusi inovatif yang mendukung pengambilan keputusan yang lebih baik.",
      experienceTitle: "Pengalaman Organisasi",
      orgDate1: "2023 - 2024",
      orgTitle1: "Staf Departemen Politik dan Kesejahteraan Mahasiswa (POLKESMA)<br>BEM Fakultas Ilmu Komputer dan Teknologi Informasi",
      orgDesc1_1: "<strong>Perumusan Aspirasi & Penghubung Fakultas:</strong> Menampung dan menyampaikan aspirasi mahasiswa FIKTI kepada Wakil Dekan III sebagai penghubung utama antara mahasiswa dan fakultas.",
      orgDesc1_2: "<strong>Program Kerja POLKESMA:</strong><br><em>Hotline FIKTI:</em> Mengelola kanal bantuan akademik mahasiswa.<br><em>Bincang Bareng FIKTI:</em> Memfasilitasi dialog interaktif mahasiswa dan fakultas.<br><em>FIKTI Bersuara Opini Terkini:</em> Mewakili opini mahasiswa terhadap isu terkini.",
      orgDesc1_3: "<strong>Desain & Publikasi (Diluar Program Kerja POLKESMA):</strong><br><em>Upgrading Internal X FIKTI Next Generation:</em> Ketua HPDD – desain sertifikat, Zoom background, proposal, dan PPT.<br><em>FIKTI VISIT:</em> Staf Media – Sertifikat, spanduk, dan dokumentasi.<br><em>SOSMAS Berbagi:</em> Staf Media – Poster & dokumentasi acara sosial.<br><em>Seutas Harapan:</em> Staf Media – Sertifikat & dokumentasi kegiatan kemanusiaan.<br><em>Pemilihan Umum Raya BEM FIKTI:</em> Staf Media – Poster dan Instagram campaign feed.",
      orgDate2: "2020 - 2021",
      orgTitle2: "Ketua MPK SMAN 23 Jakarta",
      orgDesc2: "Memimpin kegiatan MPK dan mengawasi OSIS selama satu periode. Bertanggung jawab terhadap berbagai kegiatan sekolah dan menjadi ketua pelaksana buku tahunan pada tahun 2022.",
      educationTitle: "Pendidikan",
      eduUniName: "Universitas Gunadarma",
      eduUniDate: "2022 – Sekarang",
      eduUniMajor: "Sistem Informasi",
      eduHighSchoolName: "SMA Negeri 23 Jakarta",
      eduHighSchoolDate: "2019 – 2022",
      eduHighSchoolMajor: "Jurusan IPS",
      certificatesTitle: "Sertifikat",
      certGundarOrg: "Universitas Gunadarma",
      certGundarTitle: "Dasar-dasar Bahasa Pemrograman JavaScript",
      certMySkillOrg: "MySkill",
      certMySkillTitle: "Pengantar Penelitian UX",
      logoExplanationTitle: "Logo Pribadi Saya",
      logoExplanationContent: "Logo ini merupakan representasi visual dari inisial nama saya, Rafly Fadriansyah Ramadhani, yang disingkat menjadi RFR. Desain logo mengusung konsep minimalis dan modern, yang sejalan dengan prinsip desain saya dalam bidang UI/UX: sederhana, fungsional, dan estetis.<br>Penggunaan bentuk huruf yang tegas dan simetris mencerminkan konsistensi, profesionalisme, dan struktur berpikir sistematis—karakter yang penting dalam dunia desain dan pengembangan sistem informasi. Potongan garis diagonal pada huruf tengah menambahkan nuansa dinamis dan futuristik, menunjukkan kemauan untuk terus berkembang dan berinovasi.<br>Warna biru tua dipilih untuk memberikan kesan stabilitas, kepercayaan, dan ketegasan, yang merefleksikan pendekatan saya dalam menyelesaikan proyek: fokus, terarah, dan bertanggung jawab.<br>Secara keseluruhan, logo ini bukan hanya lambang identitas personal, tetapi juga sebuah pernyataan visual tentang gaya kerja dan nilai profesional yang saya pegang dalam dunia desain digital.",
      viewPortfolioBtn: "Lihat Portofolio",
      clickToExploreBtn: "Klik untuk menjelajahi",

      // Contact Page Specific Translations
      contactPageTitle: "Kontak Saya - MyWebsite",
      contactMeTitle: "Kontak Saya",
      contactLeadText: "Menjadi lebih dekat dengan saya",
      formNamePlaceholder: "Nama Anda",
      formEmailPlaceholder: "Email Anda",
      formSubjectPlaceholder: "Subjek",
      formMessagePlaceholder: "Pesan Anda",
      sendMessageBtn: "Kirim Pesan",
      addressTitle: "Alamat",
      addressContent: "Kota Bambu Selatan, Jakarta Barat, DKI Jakarta",
      sendMessageTitle: "Kirim pesan Anda",
      callUsTitle: "Hubungi saya di",

      // My Skill Page Specific Translations
      mySkillPageTitle: "Kemampuan Saya - MyWebsite",
      mySkillTitle: "Kemampuan Saya",
      usingNowTitle: "Digunakan Sekarang",
      learningTitle: "Sedang Dipelajari",
      skillFigma: "Figma",
      skillHtml: "HTML",
      skillBootstrap: "Bootstrap",
      skillLaravel: "Laravel",
      skillCanva: "Canva",
      skillCss: "CSS",
      skillMysql: "MySQL",
      skillPowerBI: "Power BI",
      skillOracle: "Oracle",
      skillJavascript: "JavaScript",
      skillPython: "Python",
      skillAdobeLightroom: "Adobe Lightroom",

      // Portofolio Page Specific Translations (Add these when you implement them)
      portofolioPageTitle: "Portofolio - MyWebsite",
      myPortofolioTitle: "Portofolio Saya",
      flowerShopProjectTitle: "Proyek Toko Bunga",
      flowerShopProjectDesc: "Proyek ini dibuat sebagai bagian dari tugas mata kuliah Sistem Basis Data pada semester 4. Dalam proyek ini, kami berkolaborasi sebagai tim untuk merancang dan mengembangkan basis data untuk sebuah toko bunga online. <br><br>Tanggung jawab saya adalah merancang UI/UX dari website, mulai dari wireframe hingga desain akhir agar ramah pengguna dan mendukung kebutuhan bisnis toko bunga secara daring.",
      linkUiUxBtn: "Link UI UX",
      homeEventProjectTitle: "Proyek Home Event",
      homeEventProjectDesc: "Proyek ini merupakan Tugas Akhir untuk mata kuliah Pemrograman Berbasis Web di semester 5, yang dilaksanakan secara tim. <br><br>Saya bertanggung jawab atas desain UI/UX, mulai dari halaman login hingga proses pengalihan pengguna ke situs resmi event. Website ini menjadi platform promosi acara, tanpa menangani transaksi langsung. <br><br>Saya memastikan desainnya intuitif, estetis, dan mudah diakses.",
      githubHomeEventBtn: "Github Home Event",
    }
  };

  // Function to set the language
  function setLanguage(lang) {
    // Store selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);

    // Update active button styling
    document.querySelectorAll('.lang-btn').forEach(button => {
      if (button.dataset.lang === lang) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });

    // Update text content based on selected language
    document.querySelectorAll('[data-lang-key]').forEach(element => {
      const key = element.dataset.langKey;
      if (translations[lang] && translations[lang][key]) {
        // Handle innerHTML for elements that contain HTML tags (like <br> or <strong>)
        // Also handle placeholder attributes
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[lang][key];
        } else {
          element.innerHTML = translations[lang][key];
        }
      }
    });

    // Special handling for the document title
    const titleElement = document.querySelector('title');
    if (titleElement && titleElement.dataset.langKey) {
      const key = titleElement.dataset.langKey;
      if (translations[lang] && translations[lang][key]) {
        titleElement.textContent = translations[lang][key];
      }
    }

    // Special handling for the typed text in the header (if app.js uses it)
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
        // This part assumes app.js has a way to be re-initialized or updated.
        // If app.js is complex, this might require more integration.
        // For now, let's assume it's just a static text after typing.
        // If `app.js` needs to be updated, please let me know.
        // As per previous instructions, the typed text is static after typing.
        // We will keep it as is, or you can add a specific translation key for it
        // if you want it to change with language.
        // For now, it will remain "Rafly Fadriansyah Ramadhani" in both languages
        // unless you add a specific key for it in the translations object.
        // Example:
        // if (lang === 'en') {
        //     typedTextElement.textContent = "Rafly Fadriansyah Ramadhani";
        // } else {
        //     typedTextElement.textContent = "Rafly Fadriansyah Ramadhani";
        // }
    }
  }

  // Get the stored language or default to 'id' (Indonesian)
  const initialLang = localStorage.getItem('selectedLanguage') || 'id';
  setLanguage(initialLang);

  // Add event listeners to language buttons
  document.querySelectorAll('.lang-btn').forEach(button => {
    button.addEventListener('click', () => {
      setLanguage(button.dataset.lang);
    });
  });
});
