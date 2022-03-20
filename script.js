const gridToggle = document.getElementById('sidebar__button')
const grid = document.getElementById('container')

gridToggle.addEventListener('click', () => {


    if (grid.classList.contains("container--nav-visible")) {
        grid.classList.remove("container--nav-visible")


        console.log('clicked')
    } else {

        grid.classList.add("container--nav-visible")
        console.log('clicked')
    }
})