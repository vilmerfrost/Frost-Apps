/*
 * ByggTid – interaktivitet och effekter
 */

document.addEventListener('DOMContentLoaded', () => {
  // Sätt aktuellt år i footern
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Lägg till/ta bort bakgrund på header när man scrollar
  const header = document.querySelector('header');
  const toggleHeaderBg = () => {
    if (window.scrollY > 80) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', toggleHeaderBg);
  toggleHeaderBg();

  // Reveal-effekt för funktionskort när de kommer in i viewport
  const cards = document.querySelectorAll('.feature');
  const options = {
    threshold: 0.15
  };
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target);
      }
    });
  }, options);
  cards.forEach(card => observer.observe(card));
});