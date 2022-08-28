document.getElementById("inputBtn").addEventListener("click", getWeather);

function getWeather() {
    const getElement = (el) => document.getElementById(el);
    let location_inputed = getElement("inputTxt").value;
    location_inputed.trim();
    fetch(`https://api-weather-marcosag.herokuapp.com/${location_inputed}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          let fourTofourHours = [0, 4, 8, 12, 16, 20];
          getElement("city").innerText = data.location.name;
          getElement("region").innerText = data.location.region;
          getElement("date").innerText = new Date(data.location.localtime).toLocaleDateString("en-US", {weekday: "long", month: "long", day: "2-digit", hour:"2-digit", minute:"2-digit"});
          getElement("temperature").innerText = `${data.current["temp_c"]}°C`; 
          getElement("more-temp").innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}° / ${data.forecast.forecastday[0].day.mintemp_c}° | Feels like: ${data.current["feelslike_c"]}°`; // work on it
          getElement("img-temp").src = `http:${data.current.condition.icon}`;
          getElement("curent-description").innerText = data.current.condition.text;
          getElement("last-updated").innerText = `Last updated: ${new Date(data.current["last_updated"]).toLocaleDateString("en-US", {weekday: "long", day: "2-digit", hour:"2-digit", minute:"2-digit"})}`;
          for (let e = 0; e <= 5; e++){
            if (e > 0) getElement(`hour${e}`).style = "border-left: 1px solid;";
            getElement(`forecast_hour${e}`).innerText = new Date(data.forecast.forecastday[0].hour[fourTofourHours[e]].time).toLocaleTimeString([], {hour: "2-digit"});
            getElement(`forecast-img${e}`).src = `http:${data.forecast.forecastday[0].hour[fourTofourHours[e]].condition.icon}`;
            getElement(`forecast-temperature${e}`).innerHTML = `${data.forecast.forecastday[0].hour[fourTofourHours[e]].temp_c.toFixed(1)}°`;
          }
          getElement('data-container').classList.remove('none')
          getElement('main').classList.add('main-container')
        })
        .catch((error) => {
          console.log(`Error ${error}`);
        });
}