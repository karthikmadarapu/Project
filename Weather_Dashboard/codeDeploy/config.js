// config.js 

const API_KEY = `YOUR_API_KEY`;
const BASE_URL = 'https://openweathermap.org';

/**
 * Constructs a safe, encoded URL for the OpenWeather API
  * param {string} city 
 * returns {string} Fully structured URL
 */
// This file isolates your credentials and handles the string construction. It ensures spatial names with spaces (like "New York") are safely encoded for the internet using encodeURIComponent.

function buildWeatherUrl(city) {
    if(!city|| city.trim() === "")  {
        
    throw new Error("City name cannot be empty.");
  }


    // encodeURIComponent safely handles spaces and special characters in city names
  return `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`;
}


module.exports = {buildWeatherUrl};
