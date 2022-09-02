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
            "last_updated": fullWeatherInfo["current"]["condition"]["last_updated"],
            "forecast_hourly": {
                "today": [{
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][0]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][0]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][0]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][1]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][1]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][1]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][2]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][2]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][2]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][3]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][3]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][3]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][4]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][4]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][4]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][5]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][5]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][5]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][6]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][6]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][6]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][7]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][7]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][7]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][8]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][8]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][8]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][9]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][9]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][9]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][10]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][10]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][10]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][11]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][11]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][11]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][12]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][12]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][12]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][13]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][13]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][13]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][14]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][14]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][14]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][15]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][15]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][15]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][16]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][16]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][16]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][17]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][17]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][17]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][18]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][18]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][18]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][19]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][19]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][19]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][20]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][20]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][20]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][21]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][21]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][21]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][22]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][22]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][22]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][23]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][23]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][0]["hour"][23]["temp_c"],
                }
            ],
                "tomorrow": [{
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][0]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][0]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][0]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][1]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][1]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][1]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][2]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][2]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][2]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][3]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][3]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][3]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][4]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][4]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][4]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][5]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][5]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][5]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][6]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][6]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][6]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][7]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][7]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][7]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][8]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][8]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][8]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][9]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][9]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][9]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][10]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][10]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][10]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][11]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][11]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][11]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][12]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][12]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][12]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][13]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][13]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][13]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][14]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][14]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][14]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][15]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][15]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][15]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][16]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][16]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][16]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][17]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][17]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][17]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][18]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][18]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][18]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][19]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][19]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][19]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][20]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][20]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][20]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][21]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][21]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][21]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][22]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][22]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][22]["temp_c"],
                },
                {
                    "forecast_time": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][23]["time"],
                    "forecast_img": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][23]["condition"]["icon"],
                    "forecast_temp_c": fullWeatherInfo["forecast"]["forecastday"][1]["hour"][23]["temp_c"],
                }
            ]
            }
    }
        response.status(200).send(treatedWeatherInfo);
    } catch (error) {
        console.error(error)
        response.status(500).send('Internal Server Error')
    }
})

app.listen(PORT, () => {
    console.log(`Connected on PORT: ${PORT}`)
})