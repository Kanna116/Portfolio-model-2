var pcontainer = document.querySelector(".projects")
var body = document.querySelector("#body")
pcontainer.addEventListener("mouseenter",function(){
    body.style.backgroundColor = "#caf0f8"
})

pcontainer.addEventListener("mouseleave",function(){
    body.style.backgroundColor = "#f2f2f2"
    
})