document.addEventListener('DOMContentLoaded', function () {
  // === ANIMASI SPAN (anime.js) ===
  anime({
    targets: '.grid span',
    translateY: [-50, 0],
    opacity: [0, 1],
    delay: anime.stagger(500),
    duration: 800,
    easing: 'easeOutExpo',
    loop: true
  });

  // === TYPING EFFECT ===
  const text = "Rafly Fadriansyah Ramadhani";
  const speed = 100;
  const delay = 1000;
  let i = 0;
  const typedText = document.getElementById("typed-text");

  function typeWriter() {
    if (i < text.length) {
      typedText.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        typedText.innerHTML = "";
        i = 0;
        typeWriter();
      }, delay);
    }
  }

  typeWriter();

  // === GANTI FOTO SETIAP 1 DETIK ===
  const imageElement = document.getElementById("foto-ganti");
  const imageUrls = [
    "assets/img/diri2.png",
    "assets/img/fotodiri2.png"
  ];
  let index = 0;

  function newImage() {
    imageElement.src = imageUrls[index];
    index = (index + 1) % imageUrls.length;
  }

  setInterval(newImage, 1000);
});

        document.addEventListener('DOMContentLoaded', (event) => {
            tsParticles.load("particles-js", {
                // Anda bisa menggunakan preset "default", "bigCircles", "bubbles", dll.
                // Atau kustomisasi seperti di bawah ini.
                background: {
                    color: { value: "transparent" },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" },
                        resize: true,
                    },
                    modes: {
                        repulse: { distance: 100, duration: 0.4 },
                    },
                },
                particles: {
                    color: { value: "#ffffff" },
                    links: {
                        color: "#ffffff",
                        distance: 150,
                        enable: true,
                        opacity: 0.15,
                        width: 1,
                    },
                    collisions: { enable: false },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: { default: "bounce" },
                        random: false,
                        speed: 1,
                        straight: false,
                    },
                    number: {
                        density: { enable: true, area: 800 },
                        value: 80,
                    },
                    opacity: { value: 0.15 },
                    shape: { type: "circle" },
                    size: { value: { min: 1, max: 3 } },
                },
                detectRetina: true,
            });
        });
