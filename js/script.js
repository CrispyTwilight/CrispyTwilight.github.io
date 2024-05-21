/*
    Auth: John O'Neal
	Date Created: 05/01/2023
    Date Updated: 05/21/2024
	Desc: This is the main JavaScript file for the portfolio site at CrispyTwilight.github.io.
*/

/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x')
    navbar.classList.remove('active')
};

/*==================== scroll reveal ====================*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*==================== form submission ====================*/
document.querySelector('#contact').addEventListener('submit', function(event) {
    // Since there is no backend, prevent the form from submitting, but alert the user with an email address to send to
    event.preventDefault();
    alert('The form is not currently hooked up to any email service. Please email me directly at john.p.oneal@proton.me');
});

/*==================== phone number validation ====================*/
document.querySelector('#mobileNumber').addEventListener('input', function(e) {
    // Format phone number as (123) 456-7890
    let input = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
    if (input.length > 10) input = input.slice(0, 10); // Limit to 10 digits

    let formattedNumber = '';
    if (input.length > 6) {
        formattedNumber = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6)}`;
    } else if (input.length > 3) {
        formattedNumber = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    } else if (input.length > 0) {
        formattedNumber = `(${input}`;
    }

    e.target.value = formattedNumber;
});

/*==================== email validation ====================*/
document.querySelector('#email').addEventListener('input', function(e) {
    // Check if email is valid with a regex pattern and change border color to red if invalid
    let isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
    e.target.style.borderColor = e.target.value.length && !isValid ? 'red' : '';
});

/*==================== subject validation ====================*/
document.querySelector('#emailSubject').addEventListener('input', function(e) {
    // limit to 50 characters
    if (e.target.value.length > 50) e.target.value = e.target.value.slice(0, 50);
});

/*==================== dynamic copyright year ====================*/
document.getElementById('year').textContent = new Date().getFullYear();

/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    // Set strings to be typed and time values
    strings: ['Full Stack Dev', 'Frontend Engineer', 'Web Designer', 'WordPress Specialist', 'UI/UX Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});