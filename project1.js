let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.gallery-slide .slide');
    const totalSlides = slides.length;

  
    if (index < 0) {
        currentSlide = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentSlide = 0;
    } else {
        currentSlide = index;
    }

    const slideWidth = slides[0].clientWidth;
    const newTransformValue = -currentSlide * slideWidth;

    
    document.querySelector('.gallery-slide').style.transform = `translateX(${newTransformValue}px)`;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function previousSlide() {
    showSlide(currentSlide - 1);
}


document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
