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
    "assets/img/foto_diri_tpbg.png",
    "assets/img/fotodiri2.png"
  ];
  let index = 0;

  function newImage() {
    imageElement.src = imageUrls[index];
    index = (index + 1) % imageUrls.length;
  }

  setInterval(newImage, 1000);
});


