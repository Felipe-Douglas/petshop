/*
*   ANCORA COM EFEITO DE ROLAGEM SUAVIZADO
*/
const itemMenu = document.querySelectorAll('a[href^="#"]');

itemMenu.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault();
        const element = event.target;
        const id = element.getAttribute('href');
        const section = document.querySelector(id).offsetTop;

        window.scroll({
            top: section - 80,
            behavior: "smooth"
        });
    });
});

/*
*   MENU FIXO 
*/

window.onscroll = () => {
    var element = document.querySelector('.menu');
    var topo = window.pageYOffset || document.documentElement.scrollTop;
    if(topo > 962) {
        element.classList.add("fixed");
    }else{
        element.classList.remove("fixed");
    }
}

/*
*   PEGA O ANO ATUAL
*/

var ano = new Date().getFullYear();
var element = document.querySelector("#ano");

element.innerHTML = ano;