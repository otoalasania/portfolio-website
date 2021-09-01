// NAVBAR START ///
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle() {
    navToggler.classList.toggle("active");
    const nav = document.querySelector(".nav");
    nav.classList.toggle("open");
    if(nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight + "px";
    }
    else{
        nav.removeAttribute("style");
    }
};
// NAVBAR END ///

//SCROLL UP START//
window.addEventListener('scroll' , function(){
    var scroll =document.querySelector('.scrollTop');
    scroll.classList.toggle("active", window.scrollY > 300)
})

function scrollToTop(){
    window.scrollTo({
        top: 0
    })
}
//SCROLL UP END//

//LOADER START//
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; 
});
//LOADER END//