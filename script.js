const gridToggle = document.getElementById('sidebar__button')
const grid = document.getElementById('sidebar')
const mainNav = document.getElementById('main-nav')
const scrollTopButton = document.getElementById('scroll-top')


// ! Open close navbar
gridToggle.addEventListener('click', () => {


    if (grid.classList.contains("sidebar--nav-visible")) {
        grid.classList.remove("sidebar--nav-visible")
        mainNav.classList.add("nav-hidden")


        console.log('clicked')
    } else {

        grid.classList.add("sidebar--nav-visible")
        mainNav.classList.remove("nav-hidden")
        console.log('clicked')
    }
})

// ! Scroll to top
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.transform = "scale(1)";
    } else {
        scrollTopButton.style.transform = "scale(0)";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



