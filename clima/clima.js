const axios = require( 'axios' );
const config = require( '../config' );

const getClima = async (lat, lng) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${config.openWeatherApiKey}`);
    return response.data.main.temp;
};

module.exports = { getClima };
