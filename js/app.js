const boton_menu = document.querySelector(".hamburger");
const nav_links =  document.querySelector(".nav-links");
const line = document.querySelector(".line");
const line_02 = document.querySelector(".line-02");
const line_03 = document.querySelector(".line-03");
boton_menu.addEventListener('click', () =>{
    nav_links.classList.toggle('open');
    line.classList.toggle('line-white');
    line_02.classList.toggle('line-white');
    line_03.classList.toggle('line-white');
});