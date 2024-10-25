let slides = document.querySelectorAll('.slide');
let indicators = document.querySelectorAll('.indicator');
let cards = document.querySelectorAll('.card-inner');
let confettiContainer = document.getElementById('confetti-container');
let edadText = document.getElementById('edad');
let backgroundMusic = document.getElementById('background-music');

window.addEventListener('load', function() {
    backgroundMusic.play();
});

cards.forEach(function(card) {
    card.addEventListener('click', function() {
        this.classList.toggle('is-flipped');
        if (this.parentElement.id === 'card4') {
            edadText.style.display = 'block';
            setTimeout(function() {
                edadText.style.display = 'none';
            }, 8000); // Texto desaparece después de 8 segundos

            for (let i = 0; i < 100; i++) {
                let confetti = document.createElement('div');
                confetti.classList.add('confetti');
                confetti.style.left = Math.random() * 100 + 'vw';
                confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                confettiContainer.appendChild(confetti);

                setTimeout(function() {
                    confetti.remove();
                }, 3000);
            }
        }
    });
});

let currentSlide = 0;

function updateSlide(index) {
    let slideWidth = slides[0].clientWidth;
    document.querySelector('.slides').style.transform = `translateX(-${slideWidth * index}px)`;
    document.querySelector('.indicator.active').classList.remove('active');
    indicators[index].classList.add('active');
}

function setSlideWidths() {
    slides.forEach(function(slide) {
        slide.style.width = `${document.querySelector('.slider').clientWidth}px`;
    });
    updateSlide(currentSlide);
}

window.addEventListener('resize', setSlideWidths);
setSlideWidths();

indicators.forEach(function(indicator, idx) {
    indicator.addEventListener('click', function() {
        currentSlide = idx;
        updateSlide(currentSlide);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let currentYear = new Date().getFullYear();
    let updateText = document.getElementById('update-year');
    updateText.innerText = `Esta página se actualizará cada misma fecha del 23 de octubre del ${currentYear}`;
});
