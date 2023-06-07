const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    speed: 1200,
    parallax: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: true
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});

//# sourceMappingURL=index.d3dbad53.js.map
