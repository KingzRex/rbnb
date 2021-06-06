function MobileMenu() {
  const menu = document.querySelector('.menu-list');
  const menuBtn = document.querySelector('.menu-btn');
  const cancelBtn = document.querySelector('.cancel-btn');
  const body = document.querySelector('body');

  menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
  });
  cancelBtn.addEventListener('click', () => {
    menu.classList.remove('active');
  });
}

MobileMenu();

function scrollAnime() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.sec-2',

      //start: '-=400px',
      start: '-=600px',
    },
  });

  tl.from('.sec-2 .intro', {
    y: 80,
    opacity: 0,
    duration: 1.5,
    ease: 'elastic.out',
  });
  tl.from(
    '.sec-2 .content',
    {
      y: 80,
      opacity: 0,
      duration: 1.5,
      ease: 'elastic.out',
    },
    '-=1'
  );
  tl.from(
    '.sec-2 .block-1',
    {
      x: 50,
      opacity: 0,
      duration: 0.5,
    },
    '-=1'
  );

  tl.from('.sec-2 .block-2', {
    x: -50,
    opacity: 0,
    duration: 0.5,
  });
  tl.from('.sec-2 .block-3', {
    x: 50,
    opacity: 0,
    duration: 0.5,
  });
  tl.from('.sec-2 .block-4', {
    x: -50,
    opacity: 0,
    duration: 0.5,
    ease: 'elastic.out',
  });

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '.sec-3',

      //start: '-=400px',
      start: '-=600px',
    },
  });

  tl2.from('.sec-3 .intro', {
    y: 80,
    opacity: 0,
    duration: 1.5,
    ease: 'elastic.out',
  });
  tl2.from(
    '.sec-3 .desc',
    {
      x: -50,
      opacity: 0,
      duration: 0.5,
    },
    '-=1'
  );
  tl2.from(
    '.sec-3 .illus-box',
    {
      x: 50,
      opacity: 0,
      duration: 0.5,
    },
    '-=1'
  );
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '.sec-4',
    },
  });
  tl3.from('.sec-4', {
    y: -80,
    opacity: 0,
    duration: 1.5,
    ease: 'elastic.out',
  });
}

scrollAnime();

const btn = document.getElementById('close-modal');
const modal = document.querySelector('.modal-bg');
const main = document.querySelector('.main');

btn.addEventListener('click', () => {
  modal.classList.add('no-modal');
});
