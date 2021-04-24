let pageYOffsetPlus = 0;
const navBar = document.getElementById("nav-bar");
window.addEventListener("resize", () => {
    navBar.style.removeProperty("top");
    navBar.style.removeProperty("bottom");
})
window.onscroll = () => {
    if (window.visualViewport.width > window.visualViewport.height) {
        if (window.pageYOffset > pageYOffsetPlus) {
            navBar.style.top = "-2.8rem";
        } else {
            navBar.style.top = "0rem";
        }
    }
    else {
        if (window.pageYOffset > pageYOffsetPlus) {
            navBar.style.bottom = "-2.8rem";
        } else {
            navBar.style.bottom = "0rem";
        }
    }
    pageYOffsetPlus = window.pageYOffset;
}

document.getElementById("theme-changer").addEventListener("change", event=>{
        document.body.classList.toggle("dark-mode");
})