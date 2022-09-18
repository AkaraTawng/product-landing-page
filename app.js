const logo = document.querySelector("#header-img");
const navLinks = document.querySelector(".nav-link");
const socialLinks = document.querySelector(".social");
const navContainer = document.querySelector("#nav-bar");

logo.addEventListener("click", () => {
    if(navLinks.classList.contains("open") && socialLinks.classList.contains("open")){
        setTimeout(() => {
            navLinks.classList.remove("open");
            socialLinks.classList.remove("open");
        }, 400)
    } else {
        navLinks.classList.add("open");
        socialLinks.classList.add("open");
    }
   
   navContainer.classList.toggle("open");
})

navLinks.addEventListener("click", () => {
    navLinks.classList.toggle("open");
   socialLinks.classList.toggle("open");
   navContainer.classList.toggle("open");
})