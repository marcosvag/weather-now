import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import cors from "cors"

const app = express();
app.use(cors())
const PORT = process.env.PORT || 3000;

dotenv.config({path: 'config/.env'});



app.get('/:city', async (request, response) => {
    try {

        const weather = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${request.params.city}`);
        const weatherInfo = await weather.json();
        response.status(200).send(weatherInfo);
    } catch (error) {
        console.error(error)
        response.status(500).send('Internal Server Error')
    }
})

app.listen(PORT, () => {
    console.log(`Connected on PORT: ${PORT}`)
})