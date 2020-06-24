let menuDiv = document.getElementsByClassName("menu");
let menuSlide = document.getElementsByClassName("slide-menu");
let slideItem = document.getElementsByClassName("slide-menu-li");


for (let index = 0; index < menuDiv.length; index++) {
    // icons
    menuDiv[index].addEventListener("click", function () {
        let icon = menuDiv[index].querySelector(".fa-sort-up");
        icon.classList.toggle("fa-rotate-180");
    })

    let iconHover = menuDiv[index].querySelector(".fa-sort-up");

    iconHover.addEventListener("mouseout", function () {
        iconHover.classList.toggle("fa-rotate-180");
    })

    iconHover.addEventListener("mouseover", function () {
        iconHover.classList.toggle("fa-rotate-180");
    })
  
}

function sliderfunc(params){
    menuSlide[params].classList.toggle("display");
}

for (let index = 0; index < slideItem.length; index++) {
    slideItem[index].addEventListener("mouseover", function(){
        this.classList.add("transition");
    });
    
    slideItem[index].addEventListener("mouseout", function(){
        this.classList.remove("transition");
    });
}
