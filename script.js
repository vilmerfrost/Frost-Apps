/*
 * ByggTid – interaktivitet och enklare effekter för webbplatsen.
 */

// Sätt aktuellt år i footern
document.addEventListener('DOMContentLoaded', () => {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
  }

  // Fade-in effekt för funktionskort när de kommer in i viewport
  const observerOptions = {
    threshold: 0.1
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, observerOptions);
  document.querySelectorAll('.feature-card').forEach(card => {
    observer.observe(card);
  });
});