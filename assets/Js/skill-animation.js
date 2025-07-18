// skill-animation.js

document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the 'skill-item' class
  const skillItems = document.querySelectorAll('.skill-item');

  // Options for the Intersection Observer
  const observerOptions = {
    root: null, // Use the viewport as the root
    rootMargin: '0px', // No margin around the root
    threshold: 0.1 // Trigger when 10% of the item is visible
  };

  // Create a new Intersection Observer instance
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // If the item is intersecting (visible in the viewport)
      if (entry.isIntersecting) {
        // Add the 'is-visible' class to trigger the animation
        entry.target.classList.add('is-visible');
        // Stop observing the item once it's visible to prevent re-triggering
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Loop through each skill item and start observing it
  skillItems.forEach((item, index) => {
    // Add a delay to each item to make them appear one by one
    // The delay is applied using inline style for simplicity, but could be handled with CSS variables or more complex JS
    item.style.transitionDelay = `${index * 0.1}s`; // 0.1s delay between each item
    observer.observe(item);
  });
});
