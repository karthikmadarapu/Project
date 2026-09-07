const {buildWeatherUrl} = require('./config');


async function fetchCleanWeather(city){

    const url = buildWeatherUrl(city);

  console.log(`[LOADING] Fetching weather data for "${city}"...`);
  console.log("Testing URL: ", url);
  try{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error(` HTTP ERROR ${response.status}: ${response.statusText} `);
    }

    const rawData = await response.json();

    const{
        name: locationName,
        main: { temp: currentTemp, temp_min: minTemp, temp_max: maxTemp, humidity },
        weather: [{ description: condition }]
        } = rawData;

        return {
          locationName,
          currentTemp: `${Math.round(currentTemp)}°C`,
          minTemp: `${Math.round(minTemp)}°C`,
          maxTemp: `${Math.round(maxTemp)}°C`,
          humidity: `${humidity}%`,
          condition: condition.toUpperCase()
         };
  }
     catch(error){
        throw error;
     }
     finally{
         // Micro-Problem 2: Guaranteed to execute whether the fetch wins or crashes
         console.log(`[LIFECYCLE] Network request complete for "${city}".`);
     }
}

module.exports = {fetchCleanWeather};