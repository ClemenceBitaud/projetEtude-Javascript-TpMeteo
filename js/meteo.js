
let ville;
/**
 * The Ajax Request to API.
 */
function searchMeteo() {
    ville = document.getElementById("city_input").value;

    $.ajax({
        url:`http://api.openweathermap.org/data/2.5/weather?q=${ville}&units=metric&lang=fr&APPID=ee07e2bf337034f905cde0bdedae3db8`,
        dataType:"json",
        success:function (json) {
            console.log(json);
            data(json);
        }
    })

}

/**
 * Function that retrieves data from JSON and puts it into an HTML table.
 * @param meteoData the JSON file.
 */
function data(meteoData){

    console.log(meteoData);

    let weather = meteoData.weather[0].description;
    let main = meteoData.main;
    let temp = main.temp;
    let icon = getWeatherIcon(meteoData.weather[0].icon);
    let tempMin = main.temp_min;
    let tempMax = main.temp_max;
    let feel = main.feels_like;
    let pressure = main.pressure;
    let humidity = main.humidity;
    let wind = meteoData.wind.speed;
    let windO = meteoData.wind.deg;
    let cloud = meteoData.clouds.all;

    let divMeteo = document.getElementById("meteo_data");
    divMeteo.innerHTML =
        `<table>
            <tr>
                <td>Ville : </td>
                <td>${ville}</td>
            </tr>
            <tr>
                <td>Meteo : </td>
                <td>${weather}</td>
                <td><img src="${icon}"></td>
            </tr>
            <tr>
                <td>Temperature : </td>
                <td>${temp}</td>
            </tr>
        </table>
        <br>
        <details>
            <summary>Voir plus</summary>
            <table>
                <tr>
                    <td>Temperature Min : </td>
                    <td>${tempMin}</td>
                </tr>
                <tr>
                    <td>Temperature Max : </td>
                    <td>${tempMax}</td>
                </tr>
                <tr>
                    <td>Ressenti : </td>
                    <td>${feel}</td>
                </tr>
                <tr>
                    <td>Pression : </td>
                    <td>${pressure}</td>
                </tr>
                <tr>
                    <td>Humidité : </td>
                    <td>${humidity}</td>
                </tr>
                <tr>
                    <td>Vent : </td>
                    <td>${wind}</td>
                </tr>
                <tr>
                    <td>Orientation du vent : </td>
                    <td>${windO}</td>
                </tr>
                <tr>
                    <td>Nuage : </td>
                    <td>${cloud}</td>
                </tr>
            </table>
        </details>
        `
    divMeteo.style.visibility = 'visible';
}

/**
 * Allows you to retrieve the weather icon.
 * @param weatherCode the code of the icon.
 */
function getWeatherIcon(weatherCode) {
    let icon = `http://openweathermap.org/img/w/`+weatherCode+`.png`;
    return icon;

}
