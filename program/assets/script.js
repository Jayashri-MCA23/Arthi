
    // <!-- menu activate function -->
    
      function toggleMenu() {
        document.getElementById("mobileNav").classList.toggle("active");
        document.getElementById("overlay").classList.toggle("active");
      }
    


          function animateOnScroll() {
      document.querySelectorAll('.animate').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('show');
        }
      });

      document.querySelectorAll('.logos img, .books img, .photos img').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add('show');
        }
      });
    }

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
  



    