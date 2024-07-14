// Get all elements with the "icon_pfp" class
const iconPfpElements = document.querySelectorAll('.icon_pfp');

// Add click event listeners to each "icon_pfp" element
iconPfpElements.forEach((iconPfp) => {
    iconPfp.addEventListener('click', () => {
        iconPfp.style.background = 'rgb(75, 74, 74)'; // Change the background color of span.icon_pfp to gray on click
    });
});
