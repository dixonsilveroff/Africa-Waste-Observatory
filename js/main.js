// Page-specific functionality (e.g., carousel for homepage)

// Carousel functionality
const carousel = {
    currentSlide: 0,
    slides: null,
    dots: null,
    
    init() {
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dots = document.querySelectorAll('.carousel-dot');
        
        if (!this.slides.length || !this.dots.length) return;

        // Add click listeners to dots
        this.dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                this.currentSlide = parseInt(e.target.dataset.slide);
                this.updateCarousel();
            });
        });
        
        // Auto-rotate carousel every 5 seconds
        setInterval(() => {
            this.currentSlide = (this.currentSlide + 1) % this.slides.length;
            this.updateCarousel();
        }, 5000);
    },
    
    updateCarousel() {
        // Remove active class from all slides and dots
        this.slides.forEach(slide => slide.classList.remove('carousel-active'));
        this.dots.forEach(dot => dot.classList.remove('carousel-active'));
        
        // Add active class to current slide and dot
        this.slides[this.currentSlide].classList.add('carousel-active');
        this.dots[this.currentSlide].classList.add('carousel-active');
    }
};

// Initialize carousel when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => carousel.init());
} else {
    carousel.init();
}
