const navbar = document.querySelector('.nav-bar');
const sections = document.querySelectorAll('section');
const navbarLinks = document.querySelectorAll('.nav-bar-links');
const progress = document.querySelector('.progress-bar-wrapper');
const progressPercent = document.querySelectorAll('.progress-percent')

const progressBarPercent = [97, 89, 80, 77, 80, 70, 50];
const navbarOffsetTop = navbar.offsetTop;

window.addEventListener('scroll', () => {
   mainFn();
});

const mainFn = () =>{
    if (window.pageYOffset >= navbarOffsetTop) {
        navbar.classList.add('sticky');
    }else{
        navbar.classList.remove('sticky');
    }

    sections.forEach((section, i) => {
        if (window.pageYOffset >= section.offsetTop -10) {
            navbarLinks.forEach(navbarLink => {
                navbarLink.classList.remove('change-nav-bar-link');
            })
            navbarLinks[i].classList.add('change-nav-bar-link');
        }
    });

    if (window.pageYOffset + window.innerHeight >= progress.offsetTop){
       progressPercent.forEach((el, i) => {
            el.style.width = `${progressBarPercent[i]}%`;
        });
    }
}

mainFn();

window.addEventListener('resize', () => {
    window.location.reload();
});