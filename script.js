let currentIndex = 0;

function updateCarousel() {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-images img');
    const imageWidth = images[0].clientWidth;

    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

function showNextImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex + 1) % images.length; // Cíclico hacia adelante
    updateCarousel();
}

function showPreviousImage() {
    const images = document.querySelectorAll('.carousel-images img');
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Cíclico hacia atrás
    updateCarousel();
}

document.getElementById('prevButton').addEventListener('click', showPreviousImage);
document.getElementById('nextButton').addEventListener('click', showNextImage);

// Asegura que el carrusel sea responsivo
window.addEventListener('resize', updateCarousel);

// Carrusel automático (opcional)
setInterval(showNextImage, 30000);

// Detectar las teclas del teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        // Flecha derecha: Avanzar al siguiente
        showNextImage();
    } else if (event.key === 'ArrowLeft') {
        // Flecha izquierda: Retroceder al anterior
        showPreviousImage();
    }
});

const music = document.getElementById('background-music');
const musicControl = document.getElementById('music-control');

musicControl.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicControl.textContent = 'Pausar Música';
    } else {
        music.pause();
        musicControl.textContent = 'Reproducir Música';
    }
});
