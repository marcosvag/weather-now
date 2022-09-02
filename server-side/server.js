import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors"

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;

dotenv.config({ path: 'config/.env' });



app.get('/:city', async (request, response) => {
    try {
        const weather = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${request.params.city}&days=2&aqi=no&alerts=no`);
        const fullWeatherInfo = await weather.json();
        const treatedWeatherInfo = {
            "city": fullWeatherInfo["location"]["name"],
            "region": fullWeatherInfo["location"]["region"],
            "localtime": fullWeatherInfo["location"]["localtime"],
            "temp_c": fullWeatherInfo["current"]["temp_c"],
            "maxtemp_c": fullWeatherInfo["forecast"]["forecastday"][0]["day"]["maxtemp_c"],
            "mintemp_c": fullWeatherInfo["forecast"]["forecastday"][0]["day"]["mintemp_c"],
            "feelslike_c": fullWeatherInfo["current"]["feelslike_c"],
            "current_img": fullWeatherInfo["current"]["condition"]["icon"],
            "current_text": fullWeatherInfo["current"]["condition"]["text"],
            "last_updated": fullWeatherInfo["current"]["last_updated"],
            "forecast_hourly": {
                "today": [],
                "tomorrow": []

    }            }
        for(let e = 0; e <= 23; e++){
            treatedWeatherInfo["forecast_hourly"]["today"].push(
            {
                "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][e]["condition"]["icon"],
                "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][e]["temp_c"],
            })
            treatedWeatherInfo["forecast_hourly"]["tomorrow"].push(
                {
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][e]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][e]["temp_c"],
                })
        }
        response.status(200).send(JSON.stringify(treatedWeatherInfo));
    } catch (error) {
        console.error(error)
        response.status(500).send('Internal Server Error')
    }
})

app.listen(PORT, () => {
    console.log(`Connected on PORT: ${PORT}`)
})