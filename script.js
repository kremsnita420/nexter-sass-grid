const gridToggle = document.getElementById('sidebar__button')
const grid = document.getElementById('container')
const mainNav = document.getElementById('main-nav')

gridToggle.addEventListener('click', () => {


    if (grid.classList.contains("container--nav-visible")) {
        grid.classList.remove("container--nav-visible")
        mainNav.classList.add("nav-hidden")


        console.log('clicked')
    } else {

        grid.classList.add("container--nav-visible")
        mainNav.classList.remove("nav-hidden")
        console.log('clicked')
    }
})



