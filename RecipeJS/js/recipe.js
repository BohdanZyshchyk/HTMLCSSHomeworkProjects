

function getData(){
    let name = document.querySelector("#recipe-name").value;
    let descr = document.querySelector("#description").value;
    let types = document.querySelector("#types").value;
    let diff =  document.querySelector('input[name="choice"]:checked').value;
    let servs = document.querySelector("#servings").value;
    let prepT = document.querySelector("#prepare").value;
    let cookT = document.querySelector("#cooking").value;
    let ingr = document.querySelector("#ingredients").value;
    
    let recipe ={
        Name: name,
        Descr: descr,
        Type: types,
        Difficult: diff,
        Servs: servs,
        PrepT: prepT,
        CookT: cookT,
        Ingr: ingr
    }

    return recipe;
}


function formRecipe(){
    let recipe = getData();
    document.querySelector("form").classList.toggle("display");
    document.querySelector(".recipe").classList.toggle("display");

    document.querySelector("#r-name").innerText = recipe.Name;
    document.querySelector("#r-type").innerText = recipe.Type;
    document.querySelector("#r-people").innerText = recipe.Servs;
    document.querySelector("#r-time").innerText = recipe.PrepT;
    document.querySelector("#r-lvl").innerText = recipe.Difficult;
    document.querySelector("#r-cook").innerText = recipe.CookT;
    document.querySelector(".description").innerText = recipe.CookT;
    document.querySelector(".ingredients").innerText = recipe.Ingr;
}

let button = document.querySelector('input[type="button"]');
button.addEventListener('click',formRecipe);