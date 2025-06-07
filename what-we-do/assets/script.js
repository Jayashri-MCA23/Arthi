   
 //  <!-- menu activate function -->
      function toggleMenu() {
        document.getElementById("mobileNav").classList.toggle("active");
        document.getElementById("overlay").classList.toggle("active");
      }

//  <!-- animate up and  slide for ourteam and logo -->
     window.addEventListener('load', () => {
    document.querySelector('.animate-up').classList.add('show');
    document.querySelector('.animate-slide').classList.add('show');
  });

// <!-- Scroll Animation Script -->
   function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-up, .animate-right');

    elements.forEach(el => {
      const position = el.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight * 0.9;

      if (position < triggerPoint) {
        el.classList.add('show');
      } else {
        el.classList.remove('show');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);




  function animateContent() {
      const elements = document.querySelectorAll('.animate-right');
      const trigger = window.innerHeight * 0.9;

      elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < trigger) {
          el.classList.add('show');
        } else {
          el.classList.remove('show');
        }
      });
    }

    window.addEventListener('scroll', animateContent);
    window.addEventListener('load', animateContent);
