/* =====================================
   PORTFOLIO INTERACTIVE JAVASCRIPT
   ===================================== */
document.addEventListener('DOMContentLoaded', () => {

  // =========================
  // 1️⃣ Scroll Reveal Animation
  // =========================
  const revealElements = document.querySelectorAll('section, h2, p, ul, li');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible'); // Add class when element appears
        observer.unobserve(entry.target);      // Stop observing once revealed
      }
    });
  }, { threshold: 0.1 }); // Reveal when 10% visible

  revealElements.forEach(el => observer.observe(el));


  // =========================
  // 2️⃣ Smooth Scroll for Internal Links
  // =========================
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });


  // =========================
  // 3️⃣ Optional: Animated Heading Text Typing
  // =========================
  const headerH1 = document.querySelector('header h1');
  const headingText = "RAHUL RAJ PORTFOLIO";
  let index = 0;

  function typeHeading(){
    if(index <= headingText.length){
      headerH1.textContent = headingText.slice(0, index);
      index++;
      setTimeout(typeHeading, 120); // typing speed
    }
  }

  typeHeading();


  // =========================
  // 4️⃣ Optional: Highlight Section on Hover
  // =========================
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.boxShadow = '0 0 30px #444'; // stronger glow
    });
    section.addEventListener('mouseleave', () => {
      section.style.boxShadow = '0 0 10px #222'; // normal glow
    });
  });

});
