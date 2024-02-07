console.log("smile bro 😊");

let burgerAction = document.getElementById("burgerAction");
let crossAction = document.getElementById("crossAction");
let navBar2 = document.getElementById("navBar2");
let mainNav= document.getElementById("mainNav");

let liveProjectsDiv = document.getElementById("liveProjectsDiv");
let teenLancersDiv = document.getElementById("teenLancersDiv");
let categoriesDiv = document.getElementById("categoriesDiv");
let companiesDiv = document.getElementById("companiesDiv");

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
let liveporjects =0;
let teen =599000;
let categories =0;
let companies =11500;

let returnId = setInterval(()=>{
    if(liveporjects<1000){
        liveporjects=liveporjects+1;
        liveProjectsDiv.textContent = liveporjects+"+";
        
    }
    else{
        closeInterval(returnId);
    }
},1)

let returnId1 = setInterval(()=>{
    if(companies<12500){
        companies=companies+1;
        companiesDiv.textContent = companies+"+";
        
    }
    else{
        closeInterval(returnId1);
    }
},1)

let returnId2 = setInterval(()=>{
    if(teen<600000){
        teen=teen+1;
        teenLancersDiv.textContent = teen+"+";
        
    }
    else{
        closeInterval(returnId2);
    }
},1)

let returnId3 = setInterval(()=>{
    if(categories<12){
        categories=categories+1;
        categoriesDiv.textContent = categories+"+";
        
    }
    else{
        closeInterval(returnId3);
    }
},10)


var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });