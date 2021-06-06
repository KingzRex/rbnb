import jump from '/node_modules/jump.js/dist/jump.module.js';

const home = document.getElementById('home');
const meet = document.getElementById('meet');
const map = document.getElementById('map');

home.addEventListener('click', () => {
  jump('.info');
});

meet.addEventListener('click', () => {
  jump('.community');
});
map.addEventListener('click', () => {
  jump('.roadmap');
});
