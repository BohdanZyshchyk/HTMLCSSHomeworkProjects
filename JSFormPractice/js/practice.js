let check = document.querySelector('[type="checkbox"]');
let button = document.querySelector("button");
check.addEventListener("click", function () {
    if (this.checked)
        button.disabled = false;
    else
        button.disabled = true;
});

function isFildsEmpty() {
    let inputs = document.querySelectorAll('[type="text"], [type="email"], [type="password"]');
    for (let item in inputs) {
        if (item.value == "")
            return false;
    }
    return true;
}

var object = {};
button.addEventListener("click", function () {
    let tempObj = {};
    document.querySelectorAll('[type="text"], [type="email"], [type="password"]').forEach((x) => {
        if (x.value == "")
            x.classList.add("empty");
        else {
            if (x.placeholder != 'undefined') {
                 tempObj[`${x.placeholder}`] = x.value;
            }
             x.classList.remove("empty");
        }
    })

    if (isFildsEmpty()) {
        object = tempObj;
    }
  
});
console.log(object);
