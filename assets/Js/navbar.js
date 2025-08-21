        let lastScrollTop = 0;
        const navbar = document.querySelector(".main-header .navbar");

        window.addEventListener("scroll", function() {
            let scrollTop = window.scrollY || document.documentElement.scrollTop;
            // Threshold agar animasi tidak terlalu sensitif di bagian atas
            if (scrollTop > 50) { 
                if (scrollTop > lastScrollTop) {
                    // Scroll ke bawah -> sembunyikan navbar
                    navbar.classList.add("shrink");
                } else {
                    // Scroll ke atas -> tampilkan navbar
                    navbar.classList.remove("shrink");
                }
            } else {
                navbar.classList.remove("shrink");
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        });