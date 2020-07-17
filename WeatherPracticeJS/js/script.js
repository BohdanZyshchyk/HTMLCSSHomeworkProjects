let url = new URL('https://api.openweathermap.org/data/2.5/weather');
const imgURL = 'https://openweathermap.org/img/wn/'
let searchParams = new URLSearchParams();
searchParams.append('appid', 'b1bd4ba5c1dd83cfd744ecfb3348d7de');
searchParams.append('units', 'metric');
searchParams.append('count', '5');
url.search = searchParams;


document.querySelector(".search-b").addEventListener("click", loadData);

document.querySelector("#search").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".search-b").click();
    }
});

function loadData(e) {
    let city = document.querySelector("#search").value;
    searchParams.append('q', city);
    console.log(city);
    url.search = searchParams;
    console.log(url);
    request(url, shoWeather);
}

async function request(url, callback) {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    callback(data);
}

function shoWeather(allData) {
    // header
    let cityName = document.querySelector(".city-name");
    cityName.innerText = allData.name;
    let date = document.querySelector(".weather-date");
    date.innerText = new Date().toJSON().slice(0,10);
    // weather detail
    let wDetail = document.querySelector(".weather-detail");
    let wWeath = document.createElement('h4');
    let wPic = document.createElement('img')
    wWeath.innerText = allData.weather[0].main;
    image = imgURL + allData.weather[0].icon +'@4x.png';
    console.log(image);
    wPic.src = image;
    wDetail.append(wWeath);
    wDetail.append(wPic);
    // temp-detail
    let tempBig =  document.querySelector(".temp-detail");
    let tempD = document.createElement('h2');
    tempBig.append(tempD);
    tempD.innerText = allData.main.temp;
    // data-detail
    let dataD =  document.querySelector(".data-detail");
    console.log(dataD);
    let dataDetail = ['Min temperature: ' + allData.main.temp_min+'C',
    'Max temperature: ' + allData.main.temp_max +"C",
    'Wind speed(km/h): ' + allData.wind.speed];
    console.log(dataDetail);
    let h3 = dataDetail.map((elem) => {
        let h3Elem = document.createElement('h3');
        h3Elem.innerText = elem;
        return h3Elem;
    }) 
    console.log(h3);
    h3.forEach(element => {
        dataD.append(element);
    });
    
}