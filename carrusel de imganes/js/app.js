'use strict';

const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const totalSlides = punto.length;
const slideWidth = 100 / totalSlides;

function updateCarousel(index) {
    let operacion = index * -100;
    grande.style.transform = `translateX(${operacion}%)`;
    punto.forEach(p => p.classList.remove('activo'));
    punto[index].classList.add('activo');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel(currentIndex);
}

punto.forEach((cadaPunto, i) => {
    cadaPunto.addEventListener('click', () => {
        currentIndex = i;
        updateCarousel(i);
    });
});

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);


let autoplayInterval = setInterval(nextSlide, 3000); 

document.querySelector('.carrousel').addEventListener('mouseover', () => {
    clearInterval(autoplayInterval);
});


document.querySelector('.carrousel').addEventListener('mouseleave', () => {
    autoplayInterval = setInterval(nextSlide, 3000);
});
