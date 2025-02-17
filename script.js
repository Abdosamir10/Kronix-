
const mobileBtn = document.querySelector('#mobile-btn');
const mobileMenu = document.querySelector('#mobile-menu');
const mobileMenuItems = document.querySelectorAll('#mobile-menu a'); 


mobileBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});


mobileMenuItems.forEach(item => {
  item.addEventListener('click', () => {
    mobileMenu.classList.add('hidden'); 
  });
});


function toggleFAQ(id) {
    var faq = document.getElementById('faq' + id);
    faq.classList.toggle('hidden');
}


particlesJS("particles-js", {
    particles: {
      number: { value: 50 },
      size: { value: 3 },
      move: { speed: 2 },
      opacity: { value: 0.5 },
      line_linked: { enable: true, opacity: 0.2 }
    }
  });