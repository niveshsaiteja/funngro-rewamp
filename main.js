console.log("working")

let burgerAction = document.getElementById("burgerAction");
let crossAction = document.getElementById("crossAction");
let navBar2 = document.getElementById("navBar2");
let mainNav= document.getElementById("mainNav");

burgerAction.onclick = function(){
    burgerAction.classList.add("no-display");
    crossAction.classList.remove("no-display");

    navBar2.style.display="flex"
}

crossAction.onclick = function(){
    burgerAction.classList.remove("no-display");
    crossAction.classList.add("no-display");
    navBar2.style.display="none"
   
}