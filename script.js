
window.addEventListener('scroll', ()=> {
    if (window.scrollY > 50) {
   document.querySelector(".header").style.background = "black"
    }
    else {
         document.querySelector(".header").style.background = "0"
    }
   })




const dropDownLeanguages = document.querySelector(".dropdown-leanguage")
const innerDropdown = document.querySelector(".inner-leanguage")

const nav_hamburger = document.querySelector(".nav-hamburger")
const inner_hamburger = document.querySelector(".inner-hamburger")

let count = 1

dropDownLeanguages.addEventListener("mouseover", () => {
    innerDropdown.style.display = "block"
})

dropDownLeanguages.addEventListener("mouseleave", () => {
    innerDropdown.style.display = "none"
})

nav_hamburger.addEventListener("click", ()=> {
    inner_hamburger.style.display = "block"

    if ((count%2) == 0) {
        inner_hamburger.style.display = "none"
    }
    count++
})

