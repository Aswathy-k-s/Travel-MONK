function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function () {
    const testimonials = document.querySelectorAll(".testimonial");
    const prevButton = document.getElementById("prevSlide");
    const nextButton = document.getElementById("nextSlide");
    let currentIndex = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    prevButton.addEventListener("click", function () {
        currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
        showTestimonial(currentIndex);
    });

    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex === testimonials.length - 1) ? 0 : currentIndex + 1;
        showTestimonial(currentIndex);
    });

    showTestimonial(currentIndex);
});
document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const items = document.querySelectorAll(".carousel-item");
    const prevButton = document.getElementById("prevHighlight");
    const nextButton = document.getElementById("nextHighlight");
    let currentIndex = 0;
    const totalItems = items.length;
    const visibleItems = 4; // Number of images visible at a time

    function updateCarousel() {
        const itemWidth = items[0].offsetWidth + 20; // Including margin
        const offset = -currentIndex * itemWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener("click", function () {
        if (currentIndex < totalItems - visibleItems) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the start
        }
        updateCarousel();
    });

    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = totalItems - visibleItems; // Loop to end
        }
        updateCarousel();
    });

    updateCarousel(); // Initialize the carousel position
});
let currentIndex = 0;
const itemsPerSlide = 3;
const tourRows = document.querySelectorAll('.tours-row');

tourRows.forEach((row) => {
    const items = row.querySelectorAll('.tour-item');
    items.forEach((item, index) => {
        if (index < itemsPerSlide) {
            item.classList.add('active');
        }
    });
});

document.querySelectorAll('.next-btn').forEach((button) => {
    button.addEventListener('click', (event) => {
        const row = event.target.closest('.tours-row');
        const items = row.querySelectorAll('.tour-item');
        let activeItems = row.querySelectorAll('.tour-item.active');
        activeItems.forEach(item => item.classList.remove('active'));

        currentIndex += itemsPerSlide;
        if (currentIndex >= items.length) currentIndex = 0;
        
        for (let i = currentIndex; i < currentIndex + itemsPerSlide; i++) {
            if (items[i]) {
                items[i].classList.add('active');
            }
        }
    });
});