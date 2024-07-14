// follow and fav changing color to focus witch one is used.
const h1 = document.getElementById("heading1");
const h2 = document.getElementById("heading2");

// Custom colors
const customColor1 = "white";
const customColor2 = "#737373";

// Add click event listeners to h1 and h2
h1.addEventListener("click", () => {
    h1.style.color = customColor1;
    h2.style.color = customColor2;
});

h2.addEventListener("click", () => {
    h1.style.color = customColor2;
    h2.style.color = customColor1;
});


//likes bookmark on the comments below the post

function toggleColor(element) {
    if (element.style.color === 'red' || element.style.color === 'yellow') {
        // If the color is red or yellow, change it back to white (default)
        element.style.color = 'white';
    } else if (element.classList.contains('fa-heart')) {
        // If it's the .fa-hurt icon, change its color to red
        element.style.color = 'red';
    } else if (element.classList.contains('fa-bookmark')) {
        // If it's the .fa-books icon, change its color to yellow
        element.style.color = 'yellow';
    }
}




