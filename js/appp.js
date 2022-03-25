// javascript for navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

//alert function
document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector(".btn4").addEventListener("click", A);
})
function A(e){
    alert("Send me a message");
}


// responsive navigation sidebar menu

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation")
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItems) =>{
    navigationItems.addEventListener("click", ()=> {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    })
})

// javascript for reveal website elements on scroll

window.addEventListener("scroll", reveal);
function reveal(){
    var reveals = document.querySelectorAll(".reveal");

    for(var i =0; i < reveals.length; i++){
       var windowHeight = window.innerHeight;
       var revealTop = reveals[i].getBoundingClientRect().top;
       var revealPoint = 50;

       if(revealTop < windowHeight - revealPoint){
           reveals[i].classList.add("active");
       }
    }
}