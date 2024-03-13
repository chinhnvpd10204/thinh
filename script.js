document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.social-media-images img');
    let delay = 0;

    images.forEach(image => {
        setTimeout(() => {
            image.style.opacity = 1;
        }, delay);
        delay += 200;
    });
});
