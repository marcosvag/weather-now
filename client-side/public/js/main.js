const form = document.querySelector('form');
const element = (element) => document.getElementById(element);

form.addEventListener("submit", getWeather);

async function getWeather(event) {
  event.preventDefault();
  const location_inputed = element("inputTxt").value;
  location_inputed.trim();
  try {
    const weather = await fetch(`https://api-weather-marcosag.herokuapp.com/${location_inputed}`);
    const data = await weather.json();
    addWeatherInfo(data);
  } catch (error) {
    console.error(error);
  }
}

function addWeatherInfo(data) {
  console.log(data);
  element("city").innerText = data["city"];
  element("region").innerText = data["region"];
  element("date").innerText = new Date(data["localtime"]).toLocaleDateString(undefined, { weekday: "long", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" });
  element("temperature").innerText = `${data["temp_c"]}°C`;
  element("more-temp").innerHTML = `${data["maxtemp_c"]}° / ${data["mintemp_c"]}° | Feels like: ${data["feelslike_c"]}°`;
  element("img-temp").src = `http:${data["current_img"]}`;
  element("curent-description").innerText = data["current_text"];
  element("last-updated").innerText = `Last updated: ${new Date(data["last_updated"]).toLocaleDateString(undefined, { weekday: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" })}`;

  let now = new Date().toLocaleTimeString([],{hour: "2-digit"});
  let futureTime = Number(new Date().toLocaleTimeString([],{hour12: false, hour: "2-digit"}));
  let max = now.length > 2 ? 12 : 24;
  let day = 'today';

  for (let e = 0; e <= 5; e++) {
    futureTime  += 4;
    if(futureTime > 23) {
      futureTime -= 24;
      day = 'tomorrow';
    }
    let futureDisplayTime = `${max == 24 ? futureTime : futureTime > 12 ? futureTime - 12 : futureTime}${max == 24 ?  'h' : futureTime > 12 ? ' PM' : " AM"}`;
    element(`forecast_hour${e}`).innerText = futureDisplayTime;
    element(`forecast-img${e}`).src = `http:${data["forecast_hourly"][day][futureTime]["forecast_img"]}`;
    element(`forecast-temperature${e}`).innerHTML = `${data["forecast_hourly"][day][futureTime]["forecast_temp_c"].toFixed(1)}°`;
  }
  
  element('data-container').classList.remove('none');
  element('main').classList.add('main-container');
}