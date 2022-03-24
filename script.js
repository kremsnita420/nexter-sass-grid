const gridToggle = document.getElementById('sidebar__button')
const grid = document.getElementById('sidebar')
const mainNav = document.getElementById('main-nav')

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



