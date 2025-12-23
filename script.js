        AOS.init();
          document.getElementById("year").textContent = new Date().getFullYear();

          const btn = document.getElementById('menu-btn');
            const close_btn = document.getElementById('close-btn')

  const menu = document.getElementById('mobile-menu');


  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
    close_btn.addEventListener('click', () => {
    menu.classList.toggle('hidden')
  })

  // Change navbar background on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-white/95', 'shadow-md', 'backdrop-blur');
    } else {
      navbar.classList.remove('bg-white/95', 'shadow-md', 'backdrop-blur');
    }
  });