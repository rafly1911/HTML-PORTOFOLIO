// home-animation.js

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the 'animate-on-scroll' class
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  // Options for the Intersection Observer
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.1 // Trigger when 10% of the element is visible
  };

  // Create a new Intersection Observer instance
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If the element is intersecting (visible in the viewport)
      if (entry.isIntersecting) {
        // Add the 'is-visible' class to trigger the animation
        entry.target.classList.add('is-visible');
        // Stop observing the element once it's visible
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Loop through each element and start observing it
  animatedElements.forEach((element, index) => {
    // Apply a staggered delay for each element to appear one by one
    // The delay is based on its index in the NodeList
    element.style.transitionDelay = `${index * 0.15}s`; // 0.15s delay between each element
    observer.observe(element);
  });
});
