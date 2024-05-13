const carousels = document.querySelectorAll(".carousel-inner");

for (let i = 0; i < carousels.length; i++) {
    const carousel = carousels[i];
    const carouselWidth = carousel.scrollWidth;
    const cardWidth = carousel.querySelector(".carousel-item").offsetWidth;
    let scrollPosition = 0;

    carousel.parentElement.querySelector(".carousel-control-next").addEventListener("click", function () {
        if (scrollPosition < (carouselWidth - cardWidth * 6)) {
            scrollPosition += cardWidth;
            carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
    });

    carousel.parentElement.querySelector(".carousel-control-prev").addEventListener("click", function () {
        if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            carousel.scrollTo({ left: scrollPosition, behavior: 'smooth' });
        }
    });
}
