const url = 'https://api.github.com/users/'



document.querySelector("button").addEventListener('click', getUserAsync);

async function getUserAsync(e) {
    e.preventDefault();
    console.log("test");
    let login = document.querySelector("input[type=search]").value;
    let _url = url + login;
    let response = await fetch(_url);
    let data = await response.json();
    procData(data);

}


function procData(data) {

    if (data.message == "Not Found") {
        document.querySelector("h2").classList.remove("display");
        document.querySelector(".profile").classList.add("display");
        return;
    }

    let forms = document.querySelectorAll("form");
    forms.forEach(element => {
        element.reset();
    });

    document.querySelector("h2").classList.add("display");
    document.querySelector(".profile").classList.remove("display");
    document.querySelector("#inputName").value = data.name;
    document.querySelector("#inputLogin").value = data.login;
    document.querySelector("#gitUrl").innerText = data.html_url;
    document.querySelector("#gitUrl").href = data.html_url;
    document.querySelector("#email").value = data.email;
    document.querySelector("#city").value = data.public_repos;
    document.querySelector("#followers").value = data.followers;
    document.querySelector("#following").value = data.following;
    document.querySelector("img").src = data.avatar_url;

}