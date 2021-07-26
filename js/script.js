const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// display mobile menu
const mobileMenu = () => {
    if(!menu.classList.contains('is-active') || !menuLinks.classList.contains('active')){
        menu.classList.add('is-active');
        menuLinks.classList.add('active');
        document.body.classList.add('stop-scrolling');
    }else{
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
        document.body.classList.remove('stop-scrolling');
    }
}

menu.addEventListener('click', mobileMenu);

//javascript для эффектов панели навигации при прокрутке

window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


window.addEventListener('scroll', reveal); 

// function reveal(){
//     var reveals = document.querySelectorAll('.reveal');

//     for(var i = 0; i < reveals.lenght; i++){
//         var windowHeight = window.innerHeight;
//         let revealTop = reveals[i].getBoundingClientRect().top;
//         var revealPoint = 50;

//         if(revealTop < windowHeight - revealPoint){
//             reveals[i].classList.add('active');
//         }
//     }
// }

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50; 

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('active');
        }
    }
}

const navLinks = document.querySelectorAll('.navbar__item');
const navbarMenu = document.querySelector('.navbar');
function hideMobileMenu(){
    if(menu.classList.contains('is-active') && menuLinks.classList.contains('active') && document.body.classList.contains('stop-scrolling')){
        menu.classList.remove('is-active');
        menuLinks.classList.remove('active');
        document.body.classList.remove('stop-scrolling');
    }
    // menu.classList.toggle('is-active');
    // menuLinks.classList.remove('active');
}
navLinks.forEach((navLinks)=>{
    navLinks.addEventListener('click', hideMobileMenu);
});
navLogo.addEventListener('click', hideMobileMenu);
menuLinks.addEventListener('click', hideMobileMenu);