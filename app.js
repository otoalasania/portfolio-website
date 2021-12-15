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

const modal = document.getElementById("modal");
const closeModal = document.getElementById("modalClose")

window.onload = function() {
    setTimeout(function(){
        modal.style.display = "flex";
    }, 4000)
}

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});


const countdown = () => {
    const countDate = new Date('Dec 31, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;
}

setInterval(countdown, 1000);
