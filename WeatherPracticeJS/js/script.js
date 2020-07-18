let url = new URL('https://api.openweathermap.org/data/2.5/weather');
let dailyurl = new URL('https://api.openweathermap.org/data/2.5/daily'); // НЕ РОБЕ, РОБИВ В СЛІПУ ВЕРСТКУ
const imgURL = 'https://openweathermap.org/img/wn/'
let searchParams = new URLSearchParams();
searchParams.append('appid', 'b1bd4ba5c1dd83cfd744ecfb3348d7de');
searchParams.append('units', 'metric');

url.search = searchParams;


document.querySelector(".search-b").addEventListener("click", loadData);
// document.querySelector(".search-b").addEventListener("click", loadHour);

document.querySelector("#search").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector(".search-b").click();
    }
});

function loadData() {
    let city = document.querySelector("#search").value;
    searchParams.append('q', city);
    console.log(city);
    url.search = searchParams;
    console.log(url);
    request(url, shoWeather);
}

function loadHour() {
    let city = document.querySelector("#search").value;
    searchParams.append('count', '5');
    dailyurl.search = searchParams;
    console.log(dailyurl);
    request(url, shoDetailWeather);
}

async function request(url, callback) {
    let response = await fetch(url);
    let data = await response.json();
    if (data.cod == "404") {
        console.log("ERRROR");
        document.querySelector('.data-show').classList.add("display");
        document.querySelector('.c-404').classList.remove("display");
        return;
    }
    console.log(data);
    callback(data);
}

function shoWeather(allData) {
    // header
    let cityName = document.querySelector(".city-name");
    cityName.innerText = allData.name;
    let date = document.querySelector(".weather-date");
    date.innerText = new Date().toJSON().slice(0, 10);
    // weather detail
    let wDetail = document.querySelector(".weather-detail");
    let wWeath = document.createElement('h4');
    let wPic = document.createElement('img')
    wWeath.innerText = allData.weather[0].main;
    image = imgURL + allData.weather[0].icon + '@4x.png';
    console.log(image);
    wPic.src = image;
    wDetail.append(wWeath);
    wDetail.append(wPic);
    // temp-detail
    let tempBig = document.querySelector(".temp-detail");
    let tempD = document.createElement('h2');
    tempBig.append(tempD);
    tempD.innerText = allData.main.temp + "\xB0 C";
    // data-detail
    let dataD = document.querySelector(".data-detail");
    console.log(dataD);
    let dataDetail = ['Min temperature: ' + allData.main.temp_min + '\xB0 C',
        'Max temperature: ' + allData.main.temp_max + "\xB0 C",
        'Wind speed(km/h): ' + allData.wind.speed
    ];
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

function shoDetailWeather(allData) {
    console.log("HOUR:" + allData)
    let tablDetail = document.querySelector(".hour-detail");
    let cityName = tablDetail.querySelector(".day");
    cityName.innerText = allData.city.Name;

    let allTemps = allData.list.map((elem) => {
        let newDetail = tablDetail.cloneNode(true);
        let hour = newDetail.querySelector(".day");
        hour.innerText = elem.dt;
        let image = newDetail.querySelector("img");
        image = imgURL + elem.weather.icon + '@4x.png';
        let forecast = newDetail.querySelector(".forecast");
        forecast.innerText = elem.weather.main;
        let temp = newDetail.querySelector(".temp");
        temp.innerText = elem.main.temp + "\xB0 C";
        let wind = newDetail.querySelector(".wind");
        wind.innerText = elem.wind.speed;
        return newDetail;
    });

    let listDetail = document.querySelector(".details-hour");

    allTemps.forEach(element => {
        listDetail.append(element);
    });

}