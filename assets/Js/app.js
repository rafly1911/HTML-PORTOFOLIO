// Contoh animasi teks "HELLO I'M"
anime({
  targets: '.grid span',
  translateY: [-50, 0],
  opacity: [0, 1],
  delay: anime.stagger(500),
  duration: 800,
  easing: 'easeOutExpo',
  loop:true
});