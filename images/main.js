let currentPosition = 0;
const imageGrid = document.querySelector('.image-grid');
const slideWidth = imageGrid.clientWidth / 4; 

document.querySelector('.next-btn').addEventListener('click', () => {
    if (currentPosition < 2) { 
        currentPosition++;
        imageGrid.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
    }
});

document.querySelector('.prev-btn').addEventListener('click', () => {
    if (currentPosition > 0) {
        currentPosition--;
        imageGrid.style.transform = `translateX(-${currentPosition * slideWidth}px)`;
    }
});
