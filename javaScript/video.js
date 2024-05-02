const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

let index = 0;

// Actualiza la posición del carrusel y el indicador de diapositiva actual
function updateCarousel() {
    const offset = index * -1096; // Mueve el carrusel según la diapositiva
    carousel.style.transform = `translateX(${offset}px)`;
    
    // Actualiza el indicador de diapositiva actual
    document.getElementById('current-slide').textContent = index + 1;
}

// Controladores de eventos para los botones
document.getElementById('prev-btn').addEventListener('click', () => {
    index--;
    if (index < 0) {
        index = totalSlides - 1;
    }
    updateCarousel();
});

document.getElementById('next-btn').addEventListener('click', () => {
    index++;
    if (index >= totalSlides) {
        index = 0;
    }
    updateCarousel();
});

// Evento `submit` del formulario para manejar la navegación a una diapositiva específica
const slideForm = document.getElementById('slide-form');

slideForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe

    const slideNumber = parseInt(slideForm.elements['slide-number'].value, 10);

    // Verifica si el número de diapositiva es válido
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
        index = slideNumber - 1;
        updateCarousel();
    } else {
        alert('Número de diapositiva no válido. Por favor, ingresa un número entre 1 y 5.');
    }
});

// Actualiza el carrusel al cargar la página
updateCarousel();
