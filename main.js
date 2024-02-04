console.log("working")

let burgerAction = document.getElementById("burgerAction");
let crossAction = document.getElementById("crossAction");
let companyBtn = document.getElementById("companyBtn");
let mainNav= document.getElementById("mainNav");
let navigationBtns = document.getElementById("navigationBtns");

burgerAction.onclick = function(){
    burgerAction.classList.add("no-display");
    crossAction.classList.remove("no-display");

    companyBtn.style.display="block"
    navigationBtns.style.display="block";
    mainNav.classList.add("main-nav-background");
}

crossAction.onclick = function(){
    burgerAction.classList.remove("no-display");
    crossAction.classList.add("no-display");
    companyBtn.style.display="none"
    navigationBtns.style.display="none";
    mainNav.classList.remove("main-nav-background");
}