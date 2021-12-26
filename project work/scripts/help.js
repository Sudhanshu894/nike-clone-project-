var menu = document.getElementById("menu-items")
document.getElementById("menu-bar-icon").addEventListener("click",function(){
  menu.style.right = "0px";
})
document.getElementById("close-menu").addEventListener("click",function(){
  menu.style.right = "-400px";
})

var search = document.querySelector("#search-bar");
var Cross = document.querySelector("#cross-btn")
var topbar = document.querySelector("#top-bar-container");
function expand(){
    search.classList.add('expand');
    // search.style.width = "73vw"
    Cross.style.display = "block";
    topbar.style.height = "0vh";
    topbar.style.transition = "0.3s ease-in-out";
    
}
function cross(){
    search.classList.remove('expand');
    // search.style.width = "initial";
    Cross.style.display = "none";
    topbar.style.height = "4vh";
    topbar.style.transition = "0.3s ease-in-out";
}