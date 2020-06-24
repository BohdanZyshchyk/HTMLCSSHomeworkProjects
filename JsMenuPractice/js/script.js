let div = document.querySelector(".div-style");
console.log(div.classList);

div.classList.add("shadow");
div.classList.remove("display");

let btn = document.querySelector("button");
// btn.onclick = function(){
//     div.classList.toggle("display");
// }

 let imeg = div.querySelector("img");
document.querySelector("button")

btn.addEventListener("click", addimg)
function addimg() {

    div.querySelector("img").setAttribute("src", "../img/остин.jpg");
    let attr = div.querySelector("img").getAttribute("alt");
    console.log(attr);
    // imeg.src = '../img/остин.jpg';
    if (div.querySelector("img").classList.contains("one"))
        div.querySelector("img").classList.contains("two")
}

imeg.addEventListener("mouseover", function(){
    this.style.opacity = 0.5;
    this.style.transform = "scale(1.1)";
})
imeg.addEventListener("mouseout", function(){
    this.style.opacity = 1;
    this.style.transform = "scale(1)";
})