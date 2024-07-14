const scrollLeftButton = document.querySelector('.fa-arrow-left');
const scrollRightButton = document.querySelector('.fa-arrow-right');
const followsContainer = document.querySelector('.follows');

scrollLeftButton.addEventListener('click', () => {
    followsContainer.scrollBy({
        left: -200, // Adjust the scroll amount as needed
        behavior: 'smooth',
    });
});

scrollRightButton.addEventListener('click', () => {
    followsContainer.scrollBy({
        left: 200, // Adjust the scroll amount as needed
        behavior: 'smooth',
    });
});
