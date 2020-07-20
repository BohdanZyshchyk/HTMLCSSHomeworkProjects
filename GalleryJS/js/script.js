document.addEventListener("DOMContentLoaded", loadImg);

function loadImg() {
    let div = document.querySelector('.container');
    for (let i = 1; i <= 12; i++) {
        console.log('test')
        let img = document.createElement('img');
        img.src = '../img/' + i + '.jpg ';
        div.append(img);
    }
}