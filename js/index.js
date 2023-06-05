const toggleNav = document.querySelector('.toggle-nav');
const navLinks = document.querySelectorAll('.nav--link')

toggleNav.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});