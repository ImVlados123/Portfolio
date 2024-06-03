const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = './img/icons/nav-open.svg';
    }
}

AOS.init({
    once: true
});

document.getElementById('GotoHome').addEventListener('click', function() {
    document.getElementById('Home').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('GotoAbout').addEventListener('click', function() {
    document.getElementById('About').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('GotoWorks').addEventListener('click', function() {
    document.getElementById('Works').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('GotoContact').addEventListener('click', function() {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
});
