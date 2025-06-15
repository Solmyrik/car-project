const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle('open');

  const isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

navLinks.addEventListener('click', (e) => {
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

const scrollRevealOption = {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
};

ScrollReveal().reveal('.header__container h1', {
  ...scrollRevealOption,
});
ScrollReveal().reveal('.header__container form', {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal('.header__container img', {
  ...scrollRevealOption,
  delay: 1000,
});

const price = ['225', '455', '275', '625', '395'];

const priceEl = document.getElementById('select-price');

function updateSwiperImage(eventName, args) {
  if (eventName === 'slideChangeTransitionStart') {
    const index = args && args[0].realIndex;
    priceEl.innerText = price[index];
    selectCards.forEach((item) => {
      item.classList.remove('show__info');
    });
    selectCards[index].classList.add('show__info');
  }
}

const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  onAny(event, ...args) {
    updateSwiperImage(event, args);
  },
});
