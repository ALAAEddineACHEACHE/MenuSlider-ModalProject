let nav = document.getElementsByTagName("nav");
let boutton = document.getElementById("toggle");
let body = document.getElementById("body");
boutton.addEventListener("click",function(event){
    event.preventDefault();
    body.classList.toggle("toggles");

});
