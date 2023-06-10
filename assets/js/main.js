// navbar
let header = document.querySelector('nav');
let menu = document.querySelector('#bx-menu');
let navbar = document.querySelector('.navbar');
 

menu.onclick = () => {
    navbar.classList.toggle('active');
}

//escone o menu quando a tela sobe
window.onscroll = () => {
    navbar.classList.remove('active');
}

