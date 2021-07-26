
function Header(){
    const elementHeader = document.createElement('header');
    const content = document.querySelector('.content');
    elementHeader.innerHTML = `
        <div class="navbar__conteiner" style='background: #039b93;'>
            <a href="../index.html" id="navbar__logo"></a>
            
            <ul class="navbar__menu home">
                <li class="navbar__item">
                    <a href="../index.html" class="navbar__links" id="home-page">Главная</a>
                </li>
            </ul>
        </div>
    `;
    content.before(elementHeader);

    const elementFooter = document.createElement('div');
    elementFooter.classList.add('footer__container');
    elementFooter.innerHTML = `
    <div class="footer__container" id="contact">
        <div class="footer__links">
            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <li><a href="#">О Мырза-Аке</a></li>
                    <li><a href="#">Народная легенда</a></li>
                    <li><a href="#">Места</a></li>
                </div>
                <div class="footer__link--items">
                    <li><a href="#">Образовательные центры</a></li>
                    <li><a href="#">Карта</a></li>
                    <li><a href="#">Видеоролик</a></li>
                </div>
            </div>
        </div>
        <section class="social__media"> 
            <div class="social__media--wrap">
                <div class="footer__logo">
                    <a href="/" id="footer__logo"></a>
                    <p class="website__rights">Создание сайта-Ойгонуу</p>
                </div>
                <div class="social__icons">
                    <a href="https://www.instagram.com/nurdoolotabdullaev____/?hl=ru" class="social__icon--link">
                        <i class="fab fa-instagram" aria-hidden="true"></i>
                    </a><span>Инстаграм</span>
                </div>
                <div class="social__number">
                    Номер телефона: <span>0 553 626 566</span>
                </div>
            </div>
        </section>
    </div>
    `;
    content.after(elementFooter);
}

Header();

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// display mobile menu
// const mobileMenu = () => {
//     if(!menu.classList.contains('is-active') || !menuLinks.classList.contains('active')){
//         menu.classList.add('is-active');
//         menuLinks.classList.add('active');
//         document.body.classList.add('stop-scrolling');
//     }else{
//         menu.classList.remove('is-active');
//         menuLinks.classList.remove('active');
//         document.body.classList.remove('stop-scrolling');
//     }
// }

// menu.addEventListener('click', mobileMenu);

//javascript для эффектов панели навигации при прокрутке

window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});


window.addEventListener('scroll', reveal); 

