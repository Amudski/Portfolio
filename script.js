function navSlide() {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.nav-links');
    let navLinks = document.querySelectorAll('.nav-links li');
    // toggler nav bar
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animerer links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                console.log(index / 7);
            }
        });
        burger.classList.toggle('burgerkolaps');
    });
}
navSlide();
