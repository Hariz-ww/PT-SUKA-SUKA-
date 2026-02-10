const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');

let index = 0;

/* BUAT DOT OTOMATIS */
slide.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');

    dot.addEventListener('click', () => {
        index = i;
        showSlide(index);
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showSlide(i) {
    slides.style.transform = `translateX(-${i * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[i].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    index = (index + 1) % slide.length;
    showSlide(index);
});

prevBtn.addEventListener('click', () => {
    index = (index - 1 + slide.length) % slide.length;
    showSlide(index);
});

// =====================
// HAMBURGER MENU
// =====================

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const backdrop = document.getElementById('nav-backdrop');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('open');
    backdrop.classList.toggle('active');
});

/* klik backdrop = tutup menu */
backdrop.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('open');
    backdrop.classList.remove('active');
});

document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('open');
        backdrop.classList.remove('active');
    });
});