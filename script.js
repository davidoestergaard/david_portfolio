/* Variabler */

let btn = document.querySelector('.toggle-btn');
let menu = document.querySelector('.main-menu');

function toggleMenu(){

  menu.classList.toggle('shown');
}

btn.addEventListener('click', toggleMenu);
