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