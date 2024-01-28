function PageAnimation() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
    let a = document.querySelector(".project-bar-container")
    let btmImg = document.querySelector("#bottom-img")
    a.addEventListener("mouseenter", function(){
        btmImg.style.display = "block"
    })
    a.addEventListener("mouseleave", function(){
        btmImg.style.display = "none"
    })
    
    let projectBar = document.querySelectorAll("#project-bar1")
    projectBar.forEach(function(i){
        i.addEventListener("mouseenter", function(){
            let image = i.getAttribute("data-img")
            btmImg.style.backgroundImage = `url(${image})`
        })
    })
}

function SwiperAnimation() {
    let swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
      });
}

PageAnimation()
SwiperAnimation()

let menu = document.querySelector("nav h3")
let full = document.querySelector(".full-scr")
let navImg = document.querySelector("nav img")
let flag = 0
menu.addEventListener("click", ()=>{
    if (flag == 0) {
        full.style.top = 0
        navImg.style.opacity = 0
        flag = 1
    }
    else{
        full.style.top = "-100%"
        navImg.style.opacity = 1
        flag = 0
    }
}) 