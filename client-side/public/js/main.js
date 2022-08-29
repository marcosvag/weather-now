const form = document.querySelector('form');
const element = (element) => document.getElementById(element);

form.addEventListener("submit", getWeather);

async function getWeather(event) {
  event.preventDefault()
  const location_inputed = element("inputTxt").value;
  location_inputed.trim();
  try {
    const weather = await fetch(`https://api-weather-marcosag.herokuapp.com/${location_inputed}`)
    const data = await weather.json();
    addWeatherInfo(data)
  } catch (error) {
    console.error(error)
  }
}

function addWeatherInfo(data) {
  console.log(data);
  const fourTofourHours = [0, 4, 8, 12, 16, 20];
  element("city").innerText = data.location.name;
  element("region").innerText = data.location.region;
  element("date").innerText = new Date(data.location.localtime).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" });
  element("temperature").innerText = `${data.current["temp_c"]}°C`;
  element("more-temp").innerHTML = `${data.forecast.forecastday[0].day.maxtemp_c}° / ${data.forecast.forecastday[0].day.mintemp_c}° | Feels like: ${data.current["feelslike_c"]}°`;
  element("img-temp").src = `http:${data.current.condition.icon}`;
  element("curent-description").innerText = data.current.condition.text;
  element("last-updated").innerText = `Last updated: ${new Date(data.current["last_updated"]).toLocaleDateString("en-US", { weekday: "long", day: "2-digit", hour: "2-digit", minute: "2-digit" })}`;
  for (let e = 0; e <= 5; e++) {
    element(`forecast_hour${e}`).innerText = new Date(data.forecast.forecastday[0].hour[fourTofourHours[e]].time).toLocaleTimeString([], { hour: "2-digit" });
    element(`forecast-img${e}`).src = `http:${data.forecast.forecastday[0].hour[fourTofourHours[e]].condition.icon}`;
    element(`forecast-temperature${e}`).innerHTML = `${data.forecast.forecastday[0].hour[fourTofourHours[e]].temp_c.toFixed(1)}°`;
  }
  element('data-container').classList.remove('none')
  element('main').classList.add('main-container')
}