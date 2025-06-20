// Carousel functionality for Salto Soccer
// Carousel funcionalidad para dos carruseles
let currentSlide = 0;
let currentSlide2 = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;
const slides2 = document.querySelectorAll('.carousel2-slide');
const totalSlides2 = slides2.length;
let interval1, interval2;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });
    slides[index].style.display = 'block';
    // For fade effect, force reflow before adding 'active'
    void slides[index].offsetWidth;
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function showSlide2(index) {
    slides2.forEach((slide, i) => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });
    slides2[index].style.display = 'block';
    void slides2[index].offsetWidth;
    slides2[index].classList.add('active');
}

function nextSlide2() {
    currentSlide2 = (currentSlide2 + 1) % totalSlides2;
    showSlide2(currentSlide2);
}

function prevSlide2() {
    currentSlide2 = (currentSlide2 - 1 + totalSlides2) % totalSlides2;
    showSlide2(currentSlide2);
}

function startAutoplay() {
    interval1 = setInterval(nextSlide, 3500);
    interval2 = setInterval(nextSlide2, 3500);
}
function stopAutoplay() {
    clearInterval(interval1);
    clearInterval(interval2);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    showSlide2(currentSlide2);
    document.getElementById('carousel-next').addEventListener('click', () => { nextSlide(); stopAutoplay(); startAutoplay(); });
    document.getElementById('carousel-prev').addEventListener('click', () => { prevSlide(); stopAutoplay(); startAutoplay(); });
    document.getElementById('carousel2-next').addEventListener('click', () => { nextSlide2(); stopAutoplay(); startAutoplay(); });
    document.getElementById('carousel2-prev').addEventListener('click', () => { prevSlide2(); stopAutoplay(); startAutoplay(); });
    startAutoplay();
});
